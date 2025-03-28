// src/store/authslice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  companyName: string;
  contactPerson: string;
  email: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  companyName: "",
  contactPerson: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        companyName: string;
        contactPerson: string;
        email: string;
      }>
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.companyName = action.payload.companyName;
      state.contactPerson = action.payload.contactPerson;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.companyName = "";
      state.contactPerson = "";
      state.email = "";
    },
    updateProfile: (
      state,
      action: PayloadAction<{
        companyName?: string;
        contactPerson?: string;
        email?: string;
      }>
    ) => {
      state.companyName = action.payload.companyName || state.companyName;
      state.contactPerson = action.payload.contactPerson || state.contactPerson;
      state.email = action.payload.email || state.email;
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
