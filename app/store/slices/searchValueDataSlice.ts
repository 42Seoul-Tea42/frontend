// src/store/slice.ts

import { createSlice } from '@reduxjs/toolkit';

interface searchValueState {
  starCount: number;
}

const initialState: searchValueState = {
  starCount: 3
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setStarCount: (state: { starCount: number }, actions: { payload: number }) => {
      state.starCount = actions.payload;
    }
  }
});

export const { setStarCount } = searchPageSlice.actions;

export default searchPageSlice.reducer;
