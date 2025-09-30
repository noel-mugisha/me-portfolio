import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const education_level_slice = createSlice({
  name: "education_level",
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      return payload;
    },
  },
});

export const education_level = education_level_slice.reducer;
export default education_level_slice.actions;
