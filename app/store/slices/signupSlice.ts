import { createSlice } from '@reduxjs/toolkit';

interface signupState {
  account: boolean;
  personal: boolean;
  emoji: boolean;
}

const initialState: signupState = {
  account: false,
  personal: false,
  emoji: false
};

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setAccount: (state: { account: boolean }, actions: { payload: boolean }) => {
      state.account = actions.payload;
    },
    setPersonal: (state: { personal: boolean }, actions: { payload: boolean }) => {
      state.personal = actions.payload;
    },
    setEmoji: (state: { emoji: boolean }, actions: { payload: boolean }) => {
      state.emoji = actions.payload;
    }
  }
});

export const { setAccount, setPersonal, setEmoji } = signupSlice.actions;

export default signupSlice.reducer;
