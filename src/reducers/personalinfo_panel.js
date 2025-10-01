import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const personalinfo_panel_slice = createSlice({
  name: "personalinfo_panel_open",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      return payload;
    },
  },
});

export const personalinfo_panel_reducer = personalinfo_panel_slice.reducer;
export default personalinfo_panel_slice.actions;
