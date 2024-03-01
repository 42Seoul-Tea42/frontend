import { createSlice } from '@reduxjs/toolkit';

interface searchValueState {
  minAge: number;
  maxAge: number;
  distance: number;
  tags: number[];
  fame: number;
}

const initialState: searchValueState = {
  minAge: 18,
  maxAge: 100,
  distance: 10,
  tags: [],
  fame: 1
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setMinAge: (state: { minAge: number }, actions: { payload: number }) => {
      state.minAge = actions.payload;
    },
    setMaxAge: (state: { maxAge: number }, actions: { payload: number }) => {
      state.maxAge = actions.payload;
    },

    setDistance: (state: { distance: number }, actions: { payload: number }) => {
      state.distance = actions.payload;
    },

    setStarCount: (state: { fame: number }, actions: { payload: number }) => {
      state.fame = actions.payload;
    },

    setTags: (state: { tags: number[] }, actions: { payload: number[] }) => {
      state.tags = actions.payload;
    }
  }
});

export const { setMinAge, setMaxAge, setDistance, setStarCount, setTags } = searchPageSlice.actions;

export default searchPageSlice.reducer;
