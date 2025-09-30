import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const active_persInfo = createSlice({
  name: "active_persInfo",
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      return payload;
    },
  },
});

export const active_personalInfo = active_persInfo.reducer;
export default active_persInfo.actions;
