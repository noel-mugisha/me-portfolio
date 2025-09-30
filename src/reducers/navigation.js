import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    navigate: (state, { payload }) => {
      return payload;
    },
  },
});

export const navReducer = navSlice.reducer;
export default navSlice.actions;
