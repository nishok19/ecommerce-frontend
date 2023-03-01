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

    // add searched products to the slice
    addSearchedProductsStore: (state, { payload }) => {
      state.searchedProducts = payload;
    },

    // sorting the products
    sortProductsStore: (state, { payload }) => {
      payload == null && null;
      const sortedProducts = [...state.products].sort((a, b) => {
        if (payload === "asc") return a.price - b.price;
        if (payload === "desc") return b.price - a.price;
      });
      console.log("ooooooooo", sortedProducts);
      state.products = sortedProducts;
    },
  },
});

export const {
  addProductsStore,
  resetProductsStore,
  addSearchedProductsStore,
  sortProductsStore,
} = productSlice.actions;

export default productSlice.reducer;
