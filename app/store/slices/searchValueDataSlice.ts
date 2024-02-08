import { createSlice } from '@reduxjs/toolkit';
import Tag from '../../interface/TagType';

interface valueRange {
  min: number;
  max: number;
}

interface searchValueState {
  age: valueRange;
  distance: number;
  tags: Tag[];
  fame: number;
}

const initialState: searchValueState = {
  age: { min: 18, max: 99 },
  distance: 10,
  tags: [],
  fame: 1
};

const searchPageSlice = createSlice({
  name: 'searchPageSlice',
  initialState,
  reducers: {
    setAgae: (state: { age: valueRange }, actions: { payload: valueRange }) => {
      state.age = actions.payload;
    },

    setDistance: (state: { distance: number }, actions: { payload: number }) => {
      state.distance = actions.payload;
    },

    setStarCount: (state: { fame: number }, actions: { payload: number }) => {
      state.fame = actions.payload;
    },

    setTags: (state: { tags: Tag[] }, actions: { payload: Tag[] }) => {
      state.tags = actions.payload;
    }
  }
});

export const { setStarCount } = searchPageSlice.actions;

export default searchPageSlice.reducer;
