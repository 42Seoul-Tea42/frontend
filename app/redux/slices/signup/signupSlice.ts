import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addSignupExtraReducers } from './signupExtraReducers';

export interface SignupState {
  validation: {
    isSignup: boolean;
    isEmailDuplicateChecked: boolean;
    isEmailVerifyChecked: boolean;
    isIdDuplicateChecked: boolean;
  };
  loading: boolean;
  error: string | null;
}

export const initialState: SignupState = {
  validation: {
    isSignup: false,
    isEmailDuplicateChecked: false,
    isEmailVerifyChecked: false,
    isIdDuplicateChecked: false
  },
  loading: false,
  error: null
};

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    closeSignupError: state => {
      state.error = null;
    },
    setIsSignup: (state, action: PayloadAction<boolean>) => {
      state.validation.isSignup = action.payload;
    },
    setIsEmailDuplicateChecked: (state, action: PayloadAction<boolean>) => {
      state.validation.isEmailDuplicateChecked = action.payload;
    },
    setIsLoginIdDuplicateChecked: (state, action: PayloadAction<boolean>) => {
      state.validation.isIdDuplicateChecked = action.payload;
    }
  },
  extraReducers: builder => {
    addSignupExtraReducers(builder);
  }
});

export const { setIsEmailDuplicateChecked, setIsLoginIdDuplicateChecked, closeSignupError, setIsSignup } =
  signupSlice.actions;

export const extraReducers = signupSlice.reducer;

export default signupSlice.reducer;
