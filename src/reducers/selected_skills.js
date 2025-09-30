import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const selected_skills = createSlice({
  name: "selected_skills",
  initialState,
  reducers: {
    select: (state, { payload }) => {
      return payload;
    },
  },
});

export const selected_skills_reducer = selected_skills.reducer;
export default selected_skills.actions;
