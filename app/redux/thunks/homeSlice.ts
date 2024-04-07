import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserFancy } from './interface';

interface HomeSliceState {
  homeList: UserFancy[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeSliceState = {
  homeList: [],
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

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncUpdate.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserFancy[]>) => {
      state.homeList = [...state.homeList, ...action.payload];
    });
    builder.addCase(asyncUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const extraReducers = homeSlice.reducer;

export default homeSlice.reducer;
