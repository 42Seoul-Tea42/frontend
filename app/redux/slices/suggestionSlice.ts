import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../dto/mapper';
import { Fancy, Gender } from '../enum';
import _ from 'lodash';
import { recvFancy, recvUnFancy, sendFancy, sendUnFancy } from './fancyConverter';

interface SuggestionState {
  users: any[];
  historyNoti: boolean;
  fancyNoti: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: SuggestionState = {
  users: [
    {
      id: '1',
      firstname: '재준',
      lastname: '김',
      interests: [1, 2, 3],
      hateInterests: [4, 5],
      rating: 3,
      sexualPreference: Gender.MALE,
      introduction: '',
      fancy: Fancy.NONE,
      distance: 10,
      age: 25,
      gender: '',
      picture: '/emoji/3.jpg',
      pictures: ['/emoji/3.jpg'],
      emoji: [1, 2, 3],
      hateEmoji: [4, 5, 6]
    }
  ],
  historyNoti: false,
  fancyNoti: false,
  loading: false,
  error: null
};

export const getSuggestionUsers = createAsyncThunk('suggestionSlice/getSuggestionUsers', async () => {
  const response = await axiosInstance.get('/user/tea');
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

export const getHistoryUserList = createAsyncThunk('suggestionSlice/getHistoryUserList', async (time: string) => {
  const response = await axiosInstance.get(`/history/history-list?time=${time}`);
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

export const getFancyUsers = createAsyncThunk('suggestionSlice/getFancyUsers', async (time: string) => {
  const response = await axiosInstance.get(`/history/fancy-list?time=${time}`);
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

export const patchFancy = createAsyncThunk('suggestionSlice/patchFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/fancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

export const patchUnFancy = createAsyncThunk('suggestionSlice/patchUnFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/unfancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {
    setHistoryNoti: (state: { historyNoti: boolean }, action: { payload: boolean }) => {
      state.historyNoti = action.payload;
    },
    setFancyNoti: (state, action: PayloadAction<boolean>) => {
      state.fancyNoti = action.payload;
    },
    setNewFancy: (state, action: PayloadAction<number>) => {
      const targetId = action.payload;
      const user = _.find(state.users, { id: targetId });
      user.fancy = recvFancy(user.fancy);

      state.loading = false;
    },
    setUnFancy: (state, action: PayloadAction<number>) => {
      const targetId = action.payload;
      const user = _.find(state.users, { id: targetId });
      user.fancy = recvUnFancy(user.fancy);
    }
  },
  extraReducers: builder => {
    // 추천 유저리스트 가져오기
    builder.addCase(getSuggestionUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSuggestionUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getSuggestionUsers.rejected, state => {
      state.loading = false;
      state.error = 'error';
    });

    // 히스토리 유저리스트 가져오기
    builder.addCase(getHistoryUserList.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getHistoryUserList.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getHistoryUserList.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // 팬시받은 유저목록 가져오기
    builder.addCase(getFancyUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFancyUsers.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getFancyUsers.rejected, (state, action: PayloadAction<any>) => {
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
      const user = _.find(state.users, { id: targetId });
      user.fancy = sendFancy(user.fancy);
      state.loading = false;
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
      const user = _.find(state.users, { id: targetId });
      user.fancy = sendUnFancy(user.fancy);
      state.loading = false;
    });
    builder.addCase(patchUnFancy.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { setNewFancy, setUnFancy, setFancyNoti, setHistoryNoti } = suggestionSlice.actions;
export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
