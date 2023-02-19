import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import {
  deleteProductCartStore,
  updateCartItemCountStore,
} from "src/slices/userSlice";
import { deleteCartItem, updateCartItemCount } from "src/utils/products.utils";

const CartCard = ({ product }) => {
  const cartItems = useSelector((state) => state.user.user.cart);
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    cartItems?.map((item) => {
      if (item?.productId === product?._id) {
        setItemCount(item.count);
      }
    });
  }, [cartItems]);

  const updateCount = async (e) => {
    const res = await updateCartItemCount(product._id, e.target.value);

    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Soemthing wrong. Cannot change the quantity.",
          type: "error",
        })
      );
    }

    dispatch(
      addToastStore({
        msg: "Updated the quantity.",
        type: "success",
      })
    );

    dispatch(
      updateCartItemCountStore({
        productId: product?._id,
        count: e.target.value,
      })
    );
  };

  const removeItem = async () => {
    const res = await deleteCartItem(product._id);

    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Soemthing wrong. Cannot remove the item.",
          type: "error",
        })
      );
    }

    dispatch(
      addToastStore({
        msg: "Removed the product from the cart.",
        type: "success",
      })
    );

    dispatch(deleteProductCartStore(res.productId));
  };

  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={product?.photos[0]?.secure_url}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{product?.name}</h2>
            <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            {/* //////////////////////////// */}
            <div className="flex items-center border-gray-100 ">
              <span>Qty: </span>
              <select
                className="select w-[6rem] outline-none "
                value={itemCount}
                onChange={updateCount}
              >
                {Array(9)
                  .fill()
                  .map((_item, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
              </select>
            </div>
            {/* //////////////////////////// */}
            <div className="flex items-center space-x-4">
              <p className="text-sm">Rs. {product?.price}</p>
              <button onClick={removeItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
