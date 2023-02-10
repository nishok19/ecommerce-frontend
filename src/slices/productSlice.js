import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsStore: (state, { payload }) => {
      state.products = payload;
    },
    resetProductsStore: (state) => {
      state.products = [];
    },
  },
});

export const { addProductsStore, resetProductsStore } = productSlice.actions;

export default productSlice.reducer;
