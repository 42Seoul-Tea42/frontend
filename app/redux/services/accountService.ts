import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
  isSignup: boolean;
  verificationEmail: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  user: {
    /** Signup Info */
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    /** Profile info */
    age: 0,
    gender: '',
    subPhotos: [],
    interests: [],
    rating: 0,
    sexualPreference: '',
    introduction: '',
    latitude: 0,
    longitude: 0,
    mainPhoto: ''
  },
  isSignup: false,
  verificationEmail: false,
  reEnterPassword: '',
  loading: false,
  error: null
};

export const postSignupDataToServer = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await axiosInstance.post('https://api.example.com/data', {
    body: {
      email: accountSlice.user.email,
      login_id: accountSlice.user.id,
      pw: accountSlice.user.password,
      last_name: accountSlice.user.lastname,
      name: accountSlice.user.firstname
    }
  });
  return response.data;
});

export const getVerifyEmailToServer = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await axiosInstance.post('https://api.example.com/data', {
    body: {
      email: accountSlice.user.email
    }
  });
  return response.data;
});

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    setAccountId: (state: AccountState, action: PayloadAction<string>) => {
      state.user.id = action.payload;
    },
    setAccountPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    setAccountReEnterPassword: (state: AccountState, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setAccountFirstname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.firstname = action.payload;
    },
    setAccountLastname: (state: AccountState, action: PayloadAction<string>) => {
      state.user.lastname = action.payload;
    },
    setAccountEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(postSignupDataToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSignupDataToServer.fulfilled, (state, action) => {
      state.isSignup = true;
    });
    builder.addCase(postSignupDataToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(getVerifyEmailToServer.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVerifyEmailToServer.fulfilled, (state, action) => {
      state.verificationEmail = true;
    });
    builder.addCase(getVerifyEmailToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const {
  setAccountId,
  setAccountPassword,
  setAccountReEnterPassword,
  setAccountEmail,
  setAccountFirstname,
  setAccountLastname
} = accountSlice.actions;
export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
