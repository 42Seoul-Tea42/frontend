import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';
import { UserListDTO } from '../dto/mapper';

interface HistoryState {
  users: UserListDTO[];
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

export const getHistoryUserList = createAsyncThunk('historySlice/getHistoryUserList', async (time: Date) => {
  const response = await axiosInstance.get(`/history/history-list?time=${time.toISOString()}`);
  const users = response.data.profiles.map((user: UserListDTO) => new UserListDTO(user));
  return users;
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
    builder.addCase(getHistoryUserList.fulfilled, (state, action: PayloadAction<UserListDTO[]>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getHistoryUserList.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // 로그아웃
    builder.addCase(getLogout.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogout.fulfilled, () => initialState);
    builder.addCase(getLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setHistoryNoti } = historySlice.actions;
export const extraReducers = historySlice.reducer;

export default historySlice.reducer;
