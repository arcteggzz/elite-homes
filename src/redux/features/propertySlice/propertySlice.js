import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyName: "Zojatech",
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addnewProperty: (state, action) => {
      state.propertyName = action.payload.propertyName;
    },
  },
});
export const { addnewProperty } = propertySlice.actions;

export default propertySlice.reducer;
