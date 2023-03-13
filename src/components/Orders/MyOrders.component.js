import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import OrderCard from "./OrderCard.component";

const MyOrders = () => {
  const user = useSelector((state) => state.user.user);
  const myorderItems = user.orders;
  const allProducts = useSelector((state) => state.products.products);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    console.log("ordersssssss", myorderItems);
    allProducts?.map(async (product) => {
      await myorderItems?.map((item) => {
        if (product?._id === item?.productId) {
          setTotalCost((prevState) => prevState + product?.price);
        }
      });
    });
  }, [user, myorderItems]);

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {myorderItems?.length === 0 ? (
              <p className="text-center">No Items in the cart</p>
            ) : (
              allProducts?.map((product) => {
                return myorderItems?.map((item) => {
                  if (product?._id === item?.productId) {
                    return <OrderCard key={product._id} product={product} />;
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
                Rs. {myorderItems?.length == 0 ? 0 : 100}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  Rs. {myorderItems?.length == 0 ? 0 : totalCost + 100}
                </p>
                <p className="text-sm text-gray-700">including GST</p>
              </div>
            </div>
            <p>Item will be shipped within 10 business days.</p>

            {/* <button
              onClick={submitOrder}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Place your Order
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default MyOrders;
