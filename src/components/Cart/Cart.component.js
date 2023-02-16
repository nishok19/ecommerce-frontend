import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.user.user.cart);
  const allProducts = useSelector((state) => state.products.products);

  return (
    <>
      {allProducts?.map((product) => {
        return cartItems?.map((item) => {
          if (product._id === item.productId) {
            console.log("carttttttttt", product);
            return <div>{product?.name}</div>;
          }
        });
      })}
    </>
  );
};
export default Cart;
