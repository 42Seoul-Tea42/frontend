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
export const fetchFancyUsers = createAsyncThunk('fancySlice/fetchFancyUsers', async (time: Date) => {
  const response = await axiosInstance.get(`/history/checkFancy?breakpoint=${time.toISOString()}`);
  const users = response.data.map((user: any) => ({
    id: user.id,
    firstname: user.name,
    lastname: user.last_name,
    fancy: user.fancy,
    distance: user.distance,
    age: user.birthday,
    gender: user.gender
  }));
  users.forEach(async (user: any) => {
    const photo = await axiosInstance.post('/user/getPicture', {
      target_id: user.id
    });
    users.mainPhoto = photo.data;
  });
  return users;
});

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {
    setFancyNotification: (state: { notification: boolean }, action: { payload: boolean }) => {
      state.notification = action.payload;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<FancyState>) => {
    builder.addCase(fetchFancyUsers.pending, (state: { loading: boolean; error: null }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchFancyUsers.fulfilled,
      (state: { users: UserPublicSet[] }, action: { payload: PayloadAction<UserPublicSet[]> }) => {
        state.users = [...state.users, ...action.payload];
      }
    );
    builder.addCase(
      fetchFancyUsers.rejected,
      (state: { loading: boolean; error: any }, action: { error: { message: null } }) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      }
    );
  }
});

export const { setFancyNotification } = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
