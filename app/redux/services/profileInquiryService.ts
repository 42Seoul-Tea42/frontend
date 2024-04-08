import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '../../utils/axios';

interface ProfileInquiryState {
  user: UserProfileInquirySet;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileInquiryState = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    subPhotos: [],
    interests: [],
    rating: 0,
    sexualPreference: '',
    introduction: '',
    fancy: false,
    distance: 0,
    age: 0,
    gender: '',
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
  return response.data;
});

const profileInquirySlice = createSlice({
  name: 'profileInquirySlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserProfileInquirySet>) => {
      state.user = action.payload;
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = profileInquirySlice.reducer;

export default profileInquirySlice.reducer;
