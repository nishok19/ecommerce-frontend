import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "src/components/Footer.component";
import Header from "src/components/Header.component";
import Toast from "src/components/Toast.component";
import { addCategoryStore } from "src/slices/categorySlice";
import { addProductsStore } from "src/slices/productSlice";
import { addToastStore } from "src/slices/toastSlice";
import { getAllCollections } from "src/utils/collection";
import { getProducts } from "src/utils/products.utils";

const MainLayout = ({ children }) => {
  const isUserLogged = true;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
    getCollections();
  }, []);

  const getAllProducts = async () => {
    const res = await getProducts();
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Something went wrong. Cannot fetch the products",
          type: "error",
        })
      );
      return null;
    }
    return dispatch(addProductsStore(res?.products));
  };

  const getCollections = async () => {
    const res = await getAllCollections();
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Something went wrong. Cannot fetch the categories",
          type: "error",
        })
      );
      return null;
    }
    return dispatch(addCategoryStore(res?.collections));
  };

  return (
    <>
      <Toast />
      {isUserLogged ? <Header /> : null}
      {children}
      {isUserLogged ? <Footer /> : null}
    </>
  );
};
// };
export default MainLayout;
