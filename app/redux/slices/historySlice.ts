import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface HistoryState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
  notification: boolean;
}

const initialState: HistoryState = {
  users: [],
  loading: false,
  error: null,
  notification: false
};

/**
 * @param {Date} time - Infinite scroll element alignment point
 */
export const getHistoryUserList = createAsyncThunk('historySlice/getHistoryUserList', async (time: Date) => {
  const response = await axiosInstance.get(`/history/history-list?time=${time.toISOString()}`);
  return response.data;
});

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    setHistoryNotification: (state: { notification: boolean }, action: { payload: boolean }) => {
      state.notification = action.payload;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<HistoryState>) => {
    builder.addCase(getHistoryUserList.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getHistoryUserList.fulfilled, (state, action: PayloadAction<any[]>) => {
      if (action.payload.length > 0) {
        state.users = [...state.users, ...action.payload];
      }
    });
    builder.addCase(getHistoryUserList.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setHistoryNotification } = historySlice.actions;
export const extraReducers = historySlice.reducer;

export default historySlice.reducer;
