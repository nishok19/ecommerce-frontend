import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "src/components/Footer.component";
import Header from "src/components/Header.component";
import Toast from "src/components/Toast.component";
import { addProductsStore } from "src/slices/productSlice";
import { getProducts } from "src/utils/products.utils";

const MainLayout = ({ children }) => {
  const isUserLogged = true;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const res = await getProducts();
    if (!res.success) {
      console.log("error in getting all products");
      return null;
    }
    return dispatch(addProductsStore(res?.products));
    // return res.data.then((d) => d).catch((err) => console.log("error...", err));
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
