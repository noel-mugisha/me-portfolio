import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const contacts_panel_slice = createSlice({
  name: "contacts_panel_open",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      return payload;
    },
  },
});

export const contacts_panel_reducer = contacts_panel_slice.reducer;
export default contacts_panel_slice.actions;
