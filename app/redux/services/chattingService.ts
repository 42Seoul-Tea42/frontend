import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserChattingSet } from '../interface';

interface ChattingState {
  users: UserChattingSet[];
  loading: boolean;
  error: string | null;
}

const initialState: ChattingState = {
  users: [],
  loading: false,
  error: null
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  const response = await fetch('https://api.example.com/data', {
    method: 'POST'
    // body: JSON.stringify();
  });
  return response.json();
});

const chattingSlice = createSlice({
  name: 'chattingSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
      state.users = [...state.users, ...action.payload];
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = chattingSlice.reducer;

export default chattingSlice.reducer;
