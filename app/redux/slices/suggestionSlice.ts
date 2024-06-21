import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../dto/mapper';
import { Fancy, Gender } from '../enum';
import _ from 'lodash';
import { recvFancy, recvUnFancy, sendFancy, sendUnFancy } from './fancyConverter';
import { SearchState } from './searchSlice';

interface SuggestionState {
  users: any[];
  visitorNoti: boolean;
  fancyNoti: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: SuggestionState = {
  users: [],
  visitorNoti: false,
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

export const getVisitorUsers = createAsyncThunk('suggestionSlice/getVisitorUsers', async (time: string) => {
  const response = await axiosInstance.get(`/history/visitor-list?time=${time}`);
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

export const postSearch = createAsyncThunk('suggestionSlice/postSearch', async (_, { getState }) => {
  const state = getState() as { searchSlice: SearchState };
  const { searchParams } = state.searchSlice;

  const response = await axiosInstance.post('/user/search', {
    min_age: searchParams.minAge,
    max_age: searchParams.maxAge,
    distance: searchParams.distance,
    tags: searchParams.interests,
    fame: searchParams.rating
  });

  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {
    setVisitorNoti: (state: { visitorNoti: boolean }, action: { payload: boolean }) => {
      state.visitorNoti = action.payload;
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
    },
    initUser: state => {
      state.users = [];
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

    // 방문자 유저리스트 가져오기
    builder.addCase(getVisitorUsers.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVisitorUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getVisitorUsers.rejected, (state, action: PayloadAction<any>) => {
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

    // 검색하기
    builder.addCase(postSearch.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSearch.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    });
    builder.addCase(postSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { initUser, setNewFancy, setUnFancy, setFancyNoti, setVisitorNoti } = suggestionSlice.actions;
export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
