import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';
import { serverToClientMapper } from '../dto/mapper';

interface SuggestionState {
  users: [];
  loading: boolean;
  error: string | null;
}

export const initialState: SuggestionState = {
  users: [],
  loading: false,
  error: null
};

export const getSuggestionUsers = createAsyncThunk('suggestionSlice/getSuggestionUsers', async () => {
  const response = await axiosInstance.get('/user/tea');
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // 추천 유저리스트 가져오기
    builder.addCase(getSuggestionUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSuggestionUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getSuggestionUsers.rejected, state => {
      state.loading = false;
      state.error = 'error';
    });
  }
});

export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
