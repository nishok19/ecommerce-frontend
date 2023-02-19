import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard.component";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const cartItems = user.cart;
  const allProducts = useSelector((state) => state.products.products);

  const [cartProducts, setCartProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    allProducts?.map(async (product) => {
      await cartItems?.map((item) => {
        if (product?._id === item?.productId) {
          setTotalCost(totalCost + product?.price);
          setCartProducts((prevState) => [...prevState, product]);
        }
      });
    });
  }, [user]);

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {/* {cartProducts?.map((item) => (
              <CartCard key={item._id} product={item} />
            ))} */}
            {allProducts?.map((product) =>
              cartItems?.map((item) => {
                if (product?._id === item?.productId) {
                  console.log("carttttt", product);
                  return <CartCard key={product._id} product={product} />;
                }
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
              <p className="text-gray-700">Rs. 100</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">Rs. {totalCost + 100}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
