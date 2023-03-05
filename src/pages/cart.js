import Cart from "../components/Cart/Cart.component";

const cart = ({ razorypay_key }) => {
  return <Cart razorypay_key={razorypay_key} />;
};
export default cart;

//

export async function getStaticProps() {
  return {
    props: {
      razorypay_key: process.env.RAZORPAY_KEY_ID,
    },
  };
}
