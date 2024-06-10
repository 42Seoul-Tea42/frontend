import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';
import { serverToClientMapper } from '../dto/mapper';
import { add, concat, remove } from 'lodash';
import _ from 'lodash';

interface SearchParams {
  minAge: number;
  maxAge: number;
  distance: number;
  interests: number[];
  rating: number;
}

interface SearchState {
  users: any[];
  searchParams: SearchParams;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  users: [],
  searchParams: {
    minAge: 1,
    maxAge: 100,
    distance: 100,
    interests: [],
    rating: 0
  },
  loading: false,
  error: null
};

export const postSearch = createAsyncThunk('homeSlice/postSearch', async (_, { getState }) => {
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

const fancySlice = createSlice({
  name: 'fancySlice',
  initialState,
  reducers: {
    setSearchParamsMinAge: (state, actions: PayloadAction<number>) => {
      state.searchParams.minAge = actions.payload;
    },
    setSearchParamsMaxAge: (state, actions: PayloadAction<number>) => {
      state.searchParams.maxAge = actions.payload;
    },
    setSearchParamsDistance: (state, actions: PayloadAction<number>) => {
      state.searchParams.distance = actions.payload;
    },
    setSearchParamsRating: (state, actions: PayloadAction<number>) => {
      state.searchParams.rating = actions.payload;
    },
    setSearchParamsInterests: (state, action: PayloadAction<number>) => {
      const interests = state.searchParams.interests;
      if (interests?.includes(action.payload)) {
        state.searchParams.interests = _.without(interests, action.payload);
      } else {
        state.searchParams.interests = _.concat(interests, action.payload);
      }
    },
    initSearchParams: state => {
      state.searchParams = initialState.searchParams;
    }
  },
  extraReducers: builder => {
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

export const {
  setSearchParamsInterests,
  setSearchParamsDistance,
  setSearchParamsMaxAge,
  setSearchParamsMinAge,
  setSearchParamsRating,
  initSearchParams
} = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
