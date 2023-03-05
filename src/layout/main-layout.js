import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "src/components/Footer.component";
import Header from "src/components/Header.component";
import Toast from "src/components/Toast.component";
// import getAllProducts from "src/helper/helper";
import { addCategoryStore } from "src/slices/categorySlice";
import { addProductsStore } from "src/slices/productSlice";
import { addToastStore } from "src/slices/toastSlice";
import { addUserStore } from "src/slices/userSlice";
import { getAllCollections } from "src/utils/collection.utils";
import { getProducts } from "src/utils/products.utils";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isUserLogged = !!user.email;

  const initializeRazorpay = (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    // Loading Razor-Pay scripts
    initializeRazorpay("https://checkout.razorpay.com/v1/checkout.js");
  });

  useEffect(() => {
    if (isUserLogged) {
      return;
    }
    getAllProducts();
    getCollections();

    router.push("/");
  }, [isUserLogged]);

  const getAllProducts = async () => {
    const res = await getProducts();
    console.log("resss", res);
    if (res.statusCode === 401) {
      router.push("/login");
      return null;
    }
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Something went wrong. Cannot fetch the products",
          type: "error",
        })
      );
      router.push("/login");

      return null;
    }
    dispatch(addProductsStore(res?.products));
    dispatch(addUserStore(res.user));
    return;
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
      router.push("/login");
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
