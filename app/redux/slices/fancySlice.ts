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

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {
    setFancyNotification: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchFancyUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFancyUsers.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload];
    });
    builder.addCase(fetchFancyUsers.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setFancyNotification } = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
