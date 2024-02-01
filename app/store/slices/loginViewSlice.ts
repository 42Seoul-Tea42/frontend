// src/store/slice.ts

import { createSlice } from '@reduxjs/toolkit';

interface LoginViewState {
  email: boolean;
}

const initialState: LoginViewState = {
  email: false
};

const loginViewSlice = createSlice({
  name: 'loginView',
  initialState,
  reducers: {
    toggleEmailView: (state: { email: boolean; }) => {
      state.email = !state.email;
    }
  }
});

export const { toggleEmailView } = loginViewSlice.actions;

export default loginViewSlice.reducer;
