import { IUser } from "@/types/IUser";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IUser = null;

const userSlice = createSlice({
  name: "user",
  initialState: { data: initialState },
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
