import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "src/slices/categorySlice";
import productSlice from "src/slices/productSlice";
import toastSlice from "src/slices/toastSlice";
import userSlice from "src/slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
    toast: toastSlice,
    category: categorySlice,
  },
});
