// import { useDispatch } from "react-redux";
// import { addCategoryStore } from "src/slices/categorySlice";
// import { addProductsStore } from "src/slices/productSlice";
// import { addToastStore } from "src/slices/toastSlice";
// import { getAllCollections } from "src/utils/collection";
// import { getProducts } from "src/utils/products.utils";

// export const getAllProducts = async () => {
//   //   const dispatch = useDispatch();
//   const res = await getProducts();
//   if (!res.success) {
//     // dispatch(
//     return addToastStore({
//       msg: "Something went wrong. Cannot fetch the products",
//       type: "error",
//     });
//     // );
//     return null;
//   }
//   return addProductsStore(res?.products);

//   //   dispatch(
//   // );
// };

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
