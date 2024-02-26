import { createSlice, current } from '@reduxjs/toolkit';

export enum signupSteps {
  AccountInfo,
  PersonalInfo,
  ProfileUpload,
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
    setCurrentStep: (state: { currentStep: number }, action: { payload: number }) => {
      state.currentStep = action.payload;
    }
  }
});

export const { setCurrentStep } = signupSlice.actions;

export default signupSlice.reducer;
