import { configureStore } from "@reduxjs/toolkit";
import productSlice from "src/slices/productSlice";
import userSlice from "src/slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
  },
});
