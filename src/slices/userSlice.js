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
      state.user.cart = [...state.user.cart, payload[0]];
    },
  },
});

export const { addUserStore, resetUserStore, addNewProductToCart } =
  userSlice.actions;

export default userSlice.reducer;
