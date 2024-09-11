import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: { data: "" },
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;

export default emailSlice.reducer;
