import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../api/axios';

interface HistoryState {
  users: UserPublicSet[];
  loading: boolean;
  error: string | null;
  historyNoti: boolean;
}

const initialState: HistoryState = {
  users: [],
  loading: false,
  error: null,
  historyNoti: false
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
    setHistoryNoti: (state: { historyNoti: boolean }, action: { payload: boolean }) => {
      state.historyNoti = action.payload;
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

export const { setHistoryNoti } = historySlice.actions;
export const extraReducers = historySlice.reducer;

export default historySlice.reducer;
