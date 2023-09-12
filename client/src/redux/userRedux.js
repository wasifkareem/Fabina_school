import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educator: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.educator = action.payload;
    },
    logout: () => initialState,
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
