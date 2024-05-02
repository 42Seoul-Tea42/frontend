import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '../../utils/axios';

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
      state.users = [...state.users, ...action.payload];
    });
    builder.addCase(getSuggestionUsers.rejected, state => {
      state.loading = false;
      state.error = 'error';
    });
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
