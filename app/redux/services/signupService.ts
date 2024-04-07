import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserSignupSet } from '../interface';

interface SignupState {
  user: UserSignupSet;
  loading: boolean;
  error: string | null;
}

const initialState: SignupState = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  },
  loading: false,
  error: null
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await fetch('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.json();
});

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserSignupSet>) => {
      state.user = action.payload;
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = signupSlice.reducer;

export default signupSlice.reducer;
