import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';

interface SuggestionState {
  users: UserProfileInquirySet[];
  loading: boolean;
  error: string | null;
}

const initialState: SuggestionState = {
  users: [],
  loading: false,
  error: null
};

export const getSuggestionUsers = createAsyncThunk('suggestionSlice/getSuggestionUsers', async () => {
  const response = await axiosInstance.get('/tea');
  return response.data;
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSuggestionUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSuggestionUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if (action.payload.length > 0) {
        state.users = [...state.users, ...action.payload];
      }
    });
    builder.addCase(getSuggestionUsers.rejected, state => {
      state.loading = false;
      state.error = 'error';
    });

    // 로그아웃
    builder.addCase(getLogout.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogout.fulfilled, () => initialState);
    builder.addCase(getLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
