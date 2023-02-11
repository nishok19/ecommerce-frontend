// import { useDispatch } from "react-redux";
// import { addCategoryStore } from "src/slices/categorySlice";
// import { addProductsStore } from "src/slices/productSlice";
// import { addToastStore } from "src/slices/toastSlice";
// import { getAllCollections } from "src/utils/collection.utils";
// import { getProducts } from "src/utils/products.utils";

// export const getAllProducts = async () => {
//   const dispatch = useDispatch();
//   const res = await getProducts();
//   console.log("resss", res);
//   if (res.statusCode === 401) {
//     router.push("/login");
//     return null;
//   }
//   if (!res.success) {
//     dispatch(
//       addToastStore({
//         msg: "Something went wrong. Cannot fetch the products",
//         type: "error",
//       })
//     );
//     router.push("/login");

//     return null;
//   }
//   console.log("oiwgtuwwwwww", res);
//   dispatch(addProductsStore(res?.products));
//   dispatch(addUserStore(res.user));
//   return;
// };

// export default getAllProducts;

// export const getCollections = async () => {
//   //   const dispatch = useDispatch();
//   const res = await getAllCollections();
//   if (!res.success) {
//     // dispatch(
//     return addToastStore({
//       msg: "Something went wrong. Cannot fetch the categories",
//       type: "error",
//     });
//     // );
//     return null;
//   }
//   return addCategoryStore(res?.collections);
//   //   dispatch(
//   // );
// };
