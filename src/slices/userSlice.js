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
  },
});

export const { addUserStore, resetUserStore } = userSlice.actions;

export default userSlice.reducer;
