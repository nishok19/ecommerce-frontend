import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.user.user.cart);

  return (
    <>
      {items?.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};
export default Cart;
