import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

interface ChattingState {
  users: [];
  loading: boolean;
  error: string | null;
}

const initialState: ChattingState = {
  users: [],
  loading: false,
  error: null
};

export const getChattingList = createAsyncThunk('chattingSlice/getChattingList', async () => {
  const response = await axiosInstance.get('/chat/list');
  return response.data;
});

const chattingSlice = createSlice({
  name: 'chattingSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getChattingList.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getChattingList.fulfilled, (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    });
    builder.addCase(getChattingList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = chattingSlice.reducer;

export default chattingSlice.reducer;
