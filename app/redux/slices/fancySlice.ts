import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface FancyState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
  notification: boolean;
}

const initialState: FancyState = {
  users: [],
  loading: false,
  error: null,
  notification: false
};

/**
 * @param {Date} time - Infinite scroll element alignment point
 */
export const getFancyUserList = createAsyncThunk('fancySlice/getFancyUserList', async (time: Date) => {
  const response = await axiosInstance.get(`/history/fancy-list?time=${time.toISOString()}`);
  return response.data;
});

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {
    setFancyNotification: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getFancyUserList.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFancyUserList.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
      state.loading = false;
      if (action.payload.length > 0) {
        state.users = [...state.users, ...action.payload];
      }
    });
    builder.addCase(getFancyUserList.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setFancyNotification } = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
