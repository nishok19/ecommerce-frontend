import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import { addUserStore } from "src/slices/userSlice";
import { orderSuccess, placeOrder } from "src/utils/products.utils";
import CartCard from "./CartCard.component";

const Cart = ({ razorypay_key }) => {
  const user = useSelector((state) => state.user.user);
  const cartItems = user?.cart;
  const allProducts = useSelector((state) => state.products.products);

  const [totalCost, setTotalCost] = useState(0);
  const [rzpRes, setRzpRes] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    allProducts?.map(async (product) => {
      await cartItems?.map((item) => {
        if (product?._id === item?.productId) {
          setTotalCost((prevState) => prevState + product?.price);
        }
      });
    });
  }, [user, cartItems]);

  useEffect(() => {
    console.log("payyyyyyyed", rzpRes);

    if (
      !rzpRes?.razorpay_payment_id &&
      !rzpRes?.razorpay_order_id &&
      !rzpRes?.razorpay_signature
    )
      return;

    sendSuccessData();
  }, [rzpRes]);

  const sendSuccessData = async () => {
    const res = await orderSuccess(rzpRes);
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Error in Updating the payment to the server",
          type: "error",
        })
      );
    }

    dispatch(addUserStore(res?.user));
  };

  const submitOrder = async () => {
    try {
      const cartProductIds = cartItems.map((item) => item.productId);

      const res = await placeOrder(cartProductIds);

      if (!res) throw new Error("Error while payment in cart");

      await initializePayment(res.order, razorypay_key, user);
    } catch (err) {
      console.log("Error while payment...", err);
      dispatch(
        addToastStore({
          msg: "Error in Payment",
          type: "error",
        })
      );
    }
  };

  const initializePayment = async ({ order }, razorypay_key, user) => {
    let options = {
      key: razorypay_key,
      amount: order.amount,
      currency: "INR",
      name: "Carter",
      description: "Product Purchase",
      order_id: order.id,
      // image: "https://example.com/your_logo",
      prefill: {
        name: user.username,
        email: user.email,
        contact: "9000090000",
      },
      handler: function (res) {
        setRzpRes(res);
      },
    };

    let rzp = await new Razorpay(options);
    await rzp.open();
  };

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems?.length === 0 ? (
              <p className="text-center">No Items in the cart</p>
            ) : (
              allProducts?.map((product) => {
                return cartItems?.map((item) => {
                  if (product?._id === item?.productId) {
                    return <CartCard key={product._id} product={product} />;
                  }
                });
              })
            )}

            {/* //////////// */}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">Rs. {totalCost}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">
                Rs. {cartItems?.length == 0 ? 0 : 100}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  Rs. {cartItems?.length == 0 ? 0 : totalCost + 100}
                </p>
                <p className="text-sm text-gray-700">including GST</p>
              </div>
            </div>
            <button
              onClick={submitOrder}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Place your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
