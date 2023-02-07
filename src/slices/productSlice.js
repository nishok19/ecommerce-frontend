import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsStore: (state, { payload }) => {
      console.log("payloadddd/...", payload.products);
      state.products = payload.products;
    },
  },
});

export const { addProductsStore } = productSlice.actions;

export default productSlice.reducer;
