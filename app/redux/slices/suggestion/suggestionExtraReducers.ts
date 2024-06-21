import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SuggestionState } from './suggestionSlice';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '@/redux/dto/mapper';
import { SearchState } from '../searchSlice';
import _ from 'lodash';
import { sendFancy, sendUnFancy } from './fancyConverter';

// 추천 유저 불러오기 -----------------------------------------------------
export const getSuggestionUsers = createAsyncThunk('suggestionSlice/getSuggestionUsers', async () => {
  const response = await axiosInstance.get('/user/tea');
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const addGetSuggestionUsersCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 히스토리 유저 불러오기 -----------------------------------------------------
export const getHistoryUserList = createAsyncThunk('suggestionSlice/getHistoryUserList', async (time: string) => {
  const response = await axiosInstance.get(`/history/history-list?time=${time}`);
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const addGetHistoryUserListCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 팬시 유저 불러오기 -----------------------------------------------------
export const getFancyUsers = createAsyncThunk('suggestionSlice/getFancyUsers', async (time: string) => {
  const response = await axiosInstance.get(`/history/fancy-list?time=${time}`);
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const addGetFancyUsersCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 방문자 유저 불러오기 -----------------------------------------------------
export const getVisitorUsers = createAsyncThunk('suggestionSlice/getVisitorUsers', async (time: string) => {
  const response = await axiosInstance.get(`/history/visitor-list?time=${time}`);
  const users = response.data.profile_list.map((user: any) => serverToClientMapper(user));
  return users;
});

const addGetVisitorUsersCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 팬시하기 -----------------------------------------------------
export const patchFancy = createAsyncThunk('suggestionSlice/patchFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/fancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

const addPatchFancyCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 팬시취소하기 -----------------------------------------------------
export const patchUnFancy = createAsyncThunk('suggestionSlice/patchUnFancy', async (targetId: number) => {
  const response = await axiosInstance.patch('/history/unfancy', {
    target_id: Number(targetId)
  });
  return targetId;
});

const addPatchUnFancyCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// 검색하기 -----------------------------------------------------
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

const addPostSearchCase = (builder: ActionReducerMapBuilder<SuggestionState>) => {
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
};

// extra reducers 추가 -----------------------------------------------------
export const addSuggestionExtraReducers = (builder: ActionReducerMapBuilder<SuggestionState>) => {
  addGetSuggestionUsersCase(builder);
  addGetHistoryUserListCase(builder);
  addGetVisitorUsersCase(builder);
  addGetFancyUsersCase(builder);
  addPatchUnFancyCase(builder);
  addPostSearchCase(builder);
  addPatchFancyCase(builder);
};
