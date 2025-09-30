import { createSlice } from "@reduxjs/toolkit";
import { my_data } from "../data";

const initialState = my_data.techs.map((tech) => tech.tech);
const projectsTechSlice = createSlice({
  name: "projectTech",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      let techFilter = [...state];
      if (techFilter.includes(payload)) {
        techFilter = techFilter.filter((tech) => tech !== payload);
      } else {
        techFilter = [...techFilter, payload];
      }
      return techFilter;
    },
  },
});

export const projectsTechReducer = projectsTechSlice.reducer;
export default projectsTechSlice.actions;
