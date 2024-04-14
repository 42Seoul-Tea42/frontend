import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfileInquirySet } from '../interface';
import axiosInstance from '../../utils/axios';

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
    minAge: 0,
    maxAge: 100,
    distance: 100,
    interests: [],
    rating: 1
  },
  loading: false,
  error: null
};

// export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
//   const response = await axiosInstance('https://api.example.com/data', {
//     method: 'POST'
//     // body: JSON.stringify();
//   });
//   return response.data;
// });

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
    }
  },
  extraReducers: builder => {
    // builder.addCase(asyncUpdate.pending, state => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserProfileInquirySet[]>) => {
    //   state.users = [...state.users, ...action.payload];
    // });
    // builder.addCase(asyncUpdate.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? null;
    // });
  }
});

export const {
  toggleSearchParamsInterests,
  setSearchParamsDistance,
  setSearchParamsMaxAge,
  setSearchParamsMinAge,
  setSearchParamsRating
} = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
