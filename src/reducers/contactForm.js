import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};
const contactFormSlice = createSlice({
  name: "contact_form",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      return payload;
    },
  },
});

export const contactFormReducer = contactFormSlice.reducer;
export default contactFormSlice.actions;
