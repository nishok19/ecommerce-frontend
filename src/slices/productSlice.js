import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchedProducts: [],
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

    //
    addSearchedProductsStore: (state, { payload }) => {
      state.searchedProducts = payload;
    },
  },
});

export const {
  addProductsStore,
  resetProductsStore,
  addSearchedProductsStore,
} = productSlice.actions;

export default productSlice.reducer;
