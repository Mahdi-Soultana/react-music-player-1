import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { libraryIsOpen: false },
  reducers: {
    toggleLibrary(state) {
      state.libraryIsOpen = !state.libraryIsOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
