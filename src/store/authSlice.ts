import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type AuthState = {
  user: string | null;
  token: string | null;
};

const loginAuthSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: string; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      console.log(state);
    },
  },
});

export const { setCredentials } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
