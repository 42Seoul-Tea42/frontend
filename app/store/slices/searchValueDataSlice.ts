import { createSlice } from '@reduxjs/toolkit';
import Tag from '../../interface/TagType';

interface valueRange {
  min: number;
  max: number;
}

interface searchValueState {
  age: valueRange;
  distanceInKilometers: valueRange;
  tags: Tag[];
  starCount: number;
}

const initialState: searchValueState = {
  age: { min: 18, max: 99 },
  distanceInKilometers: { min: 1, max: 100 },
  tags: [],
  starCount: 1
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setAgae: (state: { age: valueRange }, actions: { payload: valueRange }) => {
      state.age = actions.payload;
    },

    setDistanceInKilometers: (state: { distanceInKilometers: valueRange }, actions: { payload: valueRange }) => {
      state.distanceInKilometers = actions.payload;
    },

    setStarCount: (state: { starCount: number }, actions: { payload: number }) => {
      state.starCount = actions.payload;
    },

    setTags: (state: { tags: Tag[] }, actions: { payload: Tag[] }) => {
      state.tags = actions.payload;
    }
  }
});

export const { setStarCount } = searchPageSlice.actions;

export default searchPageSlice.reducer;
