import { createSlice } from "@reduxjs/toolkit";

const initialState = true;
const education_panel_slice = createSlice({
  name: "education_panel_open",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      return payload;
    },
  },
});

export const education_panel_reducer = education_panel_slice.reducer;
export default education_panel_slice.actions;
