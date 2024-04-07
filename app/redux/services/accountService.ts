import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAccountSet } from '../interface';

interface AccountState {
  user: UserAccountSet;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    accessToken: '',
    refreshToken: '',
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
  loading: false,
  error: null
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await axiosInstance('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.json();
});

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {},
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

export const extraReducers = accountSlice.reducer;

export default accountSlice.reducer;
