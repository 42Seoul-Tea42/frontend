import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface AccountState {
  user: UserAccountSet;
  reEnterPassword: string;
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
    /** authentification */
    accessToken: '',
    refreshToken: '',
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

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    setAccountId: (state, action: PayloadAction<string>) => {
      state.user.id = action.payload;
    },
    setAccountPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    setAccountReEnterPassword: (state, action: PayloadAction<string>) => {
      state.reEnterPassword = action.payload;
    },
    setAccountFirstname: (state, action: PayloadAction<string>) => {
      state.user.firstname = action.payload;
    },
    setAccountLastname: (state, action: PayloadAction<string>) => {
      state.user.lastname = action.payload;
    },
    setAccountEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserAccountSet>) => {
      state.user = action.payload;
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
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
