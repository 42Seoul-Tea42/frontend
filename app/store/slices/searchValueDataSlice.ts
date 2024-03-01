import { createSlice } from '@reduxjs/toolkit';

export interface ageRange {
  min: number;
  max: number;
}

interface searchValueState {
  age: ageRange;
  distance: number;
  tags: number[];
  fame: number;
}

const initialState: searchValueState = {
  age: { min: 0, max: 0 },
  distance: 10,
  tags: [],
  fame: 1
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setAge: (state: { age: ageRange }, actions: { payload: ageRange }) => {
      state.age = actions.payload;
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

export const { setAge, setDistance, setStarCount, setTags } = searchPageSlice.actions;

export default searchPageSlice.reducer;
