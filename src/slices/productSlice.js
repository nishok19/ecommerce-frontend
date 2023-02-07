import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsStore: (state, { payload }) => {
      state.products = payload.products;
    },
  },
});

export const { addProductsStore } = productSlice.actions;

export default productSlice.reducer;
