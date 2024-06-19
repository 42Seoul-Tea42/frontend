import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../dto/mapper';
import _ from 'lodash';

interface SearchParams {
  minAge: number;
  maxAge: number;
  distance: number;
  interests: number[];
  rating: number;
}

export interface SearchState {
  searchParams: SearchParams;
  loading: boolean;
  error: string | null;
}

export const initialState: SearchState = {
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
const searchSlice = createSlice({
  name: 'searchSlice',
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
  }
});

export const {
  setSearchParamsInterests,
  setSearchParamsDistance,
  setSearchParamsMaxAge,
  setSearchParamsMinAge,
  setSearchParamsRating,
  initSearchParams
} = searchSlice.actions;
export const extraReducers = searchSlice.reducer;

export default searchSlice.reducer;
