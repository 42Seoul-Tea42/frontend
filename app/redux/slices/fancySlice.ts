import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../api/axios';
import { Fancy } from '../interface/enum';

interface FancyState {
  users: UserPublicSet[];
  fancyNoti: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: FancyState = {
  users: [],
  fancyNoti: false,
  loading: false,
  error: null
};

/**
 * @param {Date} time - Infinite scroll element alignment point
 */
export const getFancyUserList = createAsyncThunk('fancySlice/getFancyUserList', async (time: Date) => {
  const response = await axiosInstance.get(`/history/fancy-list?time=${time.toISOString()}`);
  return response.data;
});

export const patchFancy = createAsyncThunk('fancySlice/patchFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/fancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {
    setFancyNoti: (state, action: PayloadAction<boolean>) => {
      state.fancyNoti = action.payload;
    }
  },
  extraReducers: builder => {
    // 팬시받은 유저목록 가져오기
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

    // 팬시하기
    builder.addCase(patchFancy.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(patchFancy.fulfilled, (state, action: PayloadAction<any>) => {
      const targetId = action.payload;
      const updateUsers = state.users.map(user => {
        if (user.identity.id !== targetId) {
          return user;
        }

        switch (user.another.fancy) {
          case Fancy.SEND:
          case Fancy.CONN:
            user.another.fancy = Fancy.NONE;
            break;
          case Fancy.NONE:
          case Fancy.RECV:
            user.another.fancy = Fancy.SEND;
            break;
          default:
            break;
        }
        return user;
      });

      state.users = updateUsers;
      state.loading = false;
      state.fancyNoti = true;
    });
    builder.addCase(patchFancy.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setFancyNoti } = fancySlice.actions;

export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
