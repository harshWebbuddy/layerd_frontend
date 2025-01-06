 import { IUser } from "@/types/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface Plan {
  plan_id: string;
  smart_ai_messages: number;
  fast_ai_messages: number;
}

interface AuthState {
  user: IUser | null;
  currentPlan: Plan | null;
}

const initialState: AuthState = { 
  user: null,
  currentPlan: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setPlan: (state, action: PayloadAction<Plan | null>) => {
      state.currentPlan = action.payload;
    },
  },
});

export const { setUser, setPlan } = authSlice.actions;
export default authSlice.reducer;
