import { createSlice } from '@reduxjs/toolkit';

export enum signupSteps {
  AccountInfo,
  PersonalInfo,
  EmojiInfo
}

interface signupState {
  currentStep: number;
}

const initialState: signupState = {
  currentStep: signupSteps.AccountInfo
};

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setCurrentStep: (state: { currentStep: number }, actions: { payload: number }) => {
      state.currentStep = actions.payload;
    }
  }
});

export const { setCurrentStep } = signupSlice.actions;

export default signupSlice.reducer;
