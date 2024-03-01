import { createSlice } from '@reduxjs/toolkit';

enum ageLimit {
  Min = 18,
  Max = 100
}

interface searchValueState {
  minAge: number;
  maxAge: number;
  distance: number;
  tags: number[];
  fame: number;
}

const initialState: searchValueState = {
  minAge: 20,
  maxAge: 40,
  distance: 10,
  tags: [],
  fame: 1
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setMinAge: (state: { minAge: number; maxAge: number }, actions: { payload: number }) => {
      // if (actions.payload > state.maxAge) return;
      if (actions.payload < ageLimit.Min) return;
      state.minAge = actions.payload;
    },
    setMaxAge: (state: { minAge: number; maxAge: number }, actions: { payload: number }) => {
      // if (actions.payload < state.minAge) return;
      if (actions.payload > ageLimit.Max) return;
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
