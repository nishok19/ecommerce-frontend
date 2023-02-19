import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserStore: (state, { payload }) => {
      state.user = payload;
    },
    resetUserStore: (state) => {
      state.user = {};
    },
    addNewProductToCart: (state, { payload }) => {
      state.user.cart = payload;
    },
    updateCartItemCountStore: (state, { payload }) => {
      const newCart = state.user.cart.map((item) => {
        if (payload.productId === item.productId) {
          item.count = payload.count;
          return item;
        }
      });

      state.user.cart = newCart;
    },
    deleteProductCartStore: (state, { payload }) => {
      console.log("payloadddddddd,", payload);
      const newCart = state.user.cart.filter(
        (item) => item.productId !== payload
      );
      state.user.cart = newCart;
    },
  },
});

export const {
  addUserStore,
  resetUserStore,
  addNewProductToCart,
  updateCartItemCountStore,
  deleteProductCartStore,
} = userSlice.actions;

export default userSlice.reducer;
