import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface suggestionState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
}

const initialState: suggestionState = {
  users: [],
  loading: false,
  error: null
};

export const fetchSuggestionUsers = createAsyncThunk('suggestionSlice/fetchSuggestionUsers', async () => {
  const response = await axiosInstance('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.json();
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSuggestionUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSuggestionUsers.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
      state.users = [...state.users, ...action.payload];
    });
    builder.addCase(fetchSuggestionUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
