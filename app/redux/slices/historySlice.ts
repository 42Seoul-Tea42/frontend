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
export const fetchHistoryUsers = createAsyncThunk('historySlice/fetchHistoryUsers', async (time: Date) => {
  const response = await axiosInstance.get(`/history?breakpoint=${time.toISOString()}`);
  const users = response.data.map((user: any) => ({
    id: user.identity.id,
    firstname: user.name,
    lastname: user.last_name,
    fancy: user.fancy,
    distance: user.another.distance,
    age: user.birthday,
    gender: user.gender
  }));
  users.forEach(async (user: any) => {
    const photo = await axiosInstance.post('/user/getPicture', {
      target_id: user.identity.id
    });
    users.mainPhoto = photo.data;
  });
  return users;
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
    builder.addCase(fetchHistoryUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchHistoryUsers.fulfilled,
      (state: { users: UserPublicSet[] }, action: PayloadAction<UserPublicSet[]>) => {
        state.users = [...state.users, ...action.payload];
      }
    );
    builder.addCase(fetchHistoryUsers.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setHistoryNotification } = historySlice.actions;
export const extraReducers = historySlice.reducer;

export default historySlice.reducer;
