import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface SearchState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  users: [],
  loading: false,
  error: null
};

// export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
//   const response = await axiosInstance('https://api.example.com/data', {
//     method: 'POST'
//     // body: JSON.stringify();
//   });
//   return response.data;
// });

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(asyncUpdate.pending, state => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
    //   state.users = [...state.users, ...action.payload];
    // });
    // builder.addCase(asyncUpdate.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? null;
    // });
  }
});

export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
