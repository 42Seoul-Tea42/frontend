import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum AgeLimit {
  MIN = 18,
  MAX = 100
}

interface SearchValueState {
  minAge: number;
  maxAge: number;
  distance: number;
  tags: number[];
  fame: number;
}

const initialState: SearchValueState = {
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
    setMinAge: (state: { minAge: number }, actions: PayloadAction<number>) => {
      state.minAge = actions.payload;
    },

    setMaxAge: (state: { maxAge: number }, actions: PayloadAction<number>) => {
      state.maxAge = actions.payload;
    },

    setDistance: (state: { distance: number }, actions: PayloadAction<number>) => {
      state.distance = actions.payload;
    },

    setStarCount: (state: { fame: number }, actions: PayloadAction<number>) => {
      state.fame = actions.payload;
    }
  }
});

export const { setMinAge, setMaxAge, setDistance, setStarCount } = searchPageSlice.actions;

export default searchPageSlice.reducer;
