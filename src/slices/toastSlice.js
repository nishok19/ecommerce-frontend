import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {
    msg: "",
    status: "",
  },
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToastStore: (state, { payload }) => {
      state.toast = payload;
    },
    resetToastStore: (state) => {
      state.toast = {
        msg: "",
        status: "",
      };
    },
  },
});

export const { addToastStore, resetToastStore } = toastSlice.actions;

export default toastSlice.reducer;
