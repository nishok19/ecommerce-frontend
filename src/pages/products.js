import { useDispatch } from "react-redux";
import ProductNav from "src/components/Products/ProductNav.component";
import { addToastStore } from "src/slices/toastSlice";

const products = () => {
  const dispatch = useDispatch();

  const toasty = () => {
    dispatch(
      addToastStore({
        msg: "testToastyyyyyyy",
        status: "success",
      })
    );
  };

  return (
    <>
      <ProductNav />
      {/* <button className="btn" onClick={toasty}>
        Click mee toasttt
      </button> */}
    </>
  );
};

export default products;
