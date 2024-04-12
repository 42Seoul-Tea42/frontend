import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserPublicSet } from '../interface';
import axiosInstance from '../../utils/axios';

interface SearchParams {
  age: number;
  distance: number;
  interests: number[];
  fame: number;
}

interface SearchState {
  users: UserPublicSet[];
  searchParams: SearchParams;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  users: [],
  searchParams: {
    age: 0,
    distance: 0,
    interests: [],
    fame: 0
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
    toggleInterests: (state, action: PayloadAction<number>) => {
      if (state.searchParams.interests.includes(action.payload)) {
        state.searchParams.interests = state.searchParams.interests.filter(
          interest => interest !== action.payload
        );
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
    // builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserPublicSet[]>) => {
    //   state.users = [...state.users, ...action.payload];
    // });
    // builder.addCase(asyncUpdate.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message ?? null;
    // });
  }
});

export const { toggleInterests } = fancySlice.actions;
export const extraReducers = fancySlice.reducer;

export default fancySlice.reducer;
