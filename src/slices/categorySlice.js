import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategoryStore: (state, { payload }) => {
      state.category = payload;
    },
    resetCategryStore: (state) => {
      state.category = [];
    },
  },
});

export const { addCategoryStore, resetCategryStore } = categorySlice.actions;

export default categorySlice.reducer;
