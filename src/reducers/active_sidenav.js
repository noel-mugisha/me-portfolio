import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;
const active_sidenav = createSlice({
  name: "active_sidenav",
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      return payload;
    },
  },
});

export const active_sidenav_reducer = active_sidenav.reducer;
export default active_sidenav.actions;
