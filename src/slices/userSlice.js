import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserStore: (state, { payload }) => {
      console.log("payloadddd/...", payload);
      state.user = payload;
    },
  },
});

export const { addUserStore } = userSlice.actions;

export default userSlice.reducer;
