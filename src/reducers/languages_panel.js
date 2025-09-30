import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const languages_panel_slice = createSlice({
  name: "languages_panel_open",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      return payload;
    },
  },
});

export const languages_panel_reducer = languages_panel_slice.reducer;
export default languages_panel_slice.actions;
