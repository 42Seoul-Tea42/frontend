import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';

interface SearchParams {
  minAge: number;
  maxAge: number;
  distance: number;
  interests: number[];
  rating: number;
}

interface SearchState {
  users: UserProfileInquirySet[];
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
    rating: 1
  },
  loading: false,
  error: null
};

export const postSearch = createAsyncThunk('homeSlice/postSearch', async (_, { getState }) => {
  const state = getState() as { accountSlice: SearchState };
  const { searchParams } = state.accountSlice;

  const response = await axiosInstance.post('/user/search', {
    min_age: searchParams.minAge,
    max_age: searchParams.maxAge,
    distance: searchParams.distance,
    tags: searchParams.interests,
    fame: searchParams.rating
  });
  return response.data;
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
    toggleSearchParamsInterests: (state, action: PayloadAction<number>) => {
      if (state.searchParams.interests.includes(action.payload)) {
        state.searchParams.interests = state.searchParams.interests.filter(interest => interest !== action.payload);
      } else {
        state.searchParams.interests = [...state.searchParams.interests, action.payload];
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
      state.users = [...state.users, ...action.payload.profiles];
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
  toggleSearchParamsInterests,
  setSearchParamsDistance,
  setSearchParamsMaxAge,
  setSearchParamsMinAge,
  setSearchParamsRating,
  initSearchParams
} = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
