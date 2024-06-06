import { PayloadAction, createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { Fancy } from '../interface/enum';
import { getLogout } from './loginSlice';
import { User } from '../interface';

interface FancyState {
  users: User[];
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

export const patchUnFancy = createAsyncThunk('fancySlice/patchUnFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/unfancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

const changeFancyState = (user: any, targetId: any) => {
  if (user.id !== targetId) {
    return user;
  }
  switch (user.fancy) {
    case Fancy.SEND:
    case Fancy.CONN:
      user.fancy = Fancy.NONE;
      break;
    case Fancy.NONE:
    case Fancy.RECV:
      user.fancy = Fancy.SEND;
      break;
    default:
      break;
  }
  return user;
};

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
    builder.addCase(getFancyUserList.fulfilled, (state, action: PayloadAction<[]>) => {
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
      const updateUsers = state.users.map(user => changeFancyState(user, targetId));
      state.users = updateUsers;
      state.loading = false;
      state.fancyNoti = true;
    });
    builder.addCase(patchFancy.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // 팬시취소
    builder.addCase(patchUnFancy.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(patchUnFancy.fulfilled, (state, action: PayloadAction<any>) => {
      const targetId = action.payload;
      const updateUsers = state.users.map(user => changeFancyState(user, targetId));
      state.users = updateUsers;
      state.loading = false;
    });
    builder.addCase(patchUnFancy.rejected, (state, action: PayloadAction<any>) => {
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

export const { setFancyNoti } = fancySlice.actions;

export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
