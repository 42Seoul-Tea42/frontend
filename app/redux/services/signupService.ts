import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserSignupSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface SignupState {
  user: UserSignupSet;
  reEnterPassword: string;
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
  reEnterPassword: '',
  loading: false,
  error: null
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await axiosInstance('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.data;
});

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setSignupId: (state, action: PayloadAction<string>) => {
      state.user.id = action.payload;
    },
    setSignupPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    setSignupReEnterPassword: (state, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setSignupFirstname: (state, action: PayloadAction<string>) => {
      state.user.firstname = action.payload;
    },
    setSignupLastname: (state, action: PayloadAction<string>) => {
      state.user.lastname = action.payload;
    },
    setSignupEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    }
  },
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

export const {
  setSignupId,
  setSignupPassword,
  setSignupReEnterPassword,
  setSignupEmail,
  setSignupFirstname,
  setSignupLastname
} = signupSlice.actions;
export const extraReducers = signupSlice.reducer;

export default signupSlice.reducer;
