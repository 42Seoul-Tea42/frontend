import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { recvFancy, recvUnFancy, sendFancy, sendUnFancy } from './fancyConverter';
import { addSuggestionExtraReducers } from './suggestionExtraReducers';

export interface SuggestionState {
  users: any[];
  visitorNoti: boolean;
  fancyNoti: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: SuggestionState = {
  users: [],
  visitorNoti: false,
  fancyNoti: false,
  loading: false,
  error: null
};

const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState,
  reducers: {
    setVisitorNoti: (state: { visitorNoti: boolean }, action: { payload: boolean }) => {
      state.visitorNoti = action.payload;
    },
    setFancyNoti: (state, action: PayloadAction<boolean>) => {
      state.fancyNoti = action.payload;
    },
    setNewFancy: (state, action: PayloadAction<number>) => {
      const targetId = action.payload;
      const user = _.find(state.users, { id: targetId });
      user.fancy = recvFancy(user.fancy);

      state.loading = false;
    },
    setUnFancy: (state, action: PayloadAction<number>) => {
      const targetId = action.payload;
      const user = _.find(state.users, { id: targetId });
      user.fancy = recvUnFancy(user.fancy);
    },
    initUser: state => {
      state.users = [];
    }
  },
  extraReducers: builder => {
    addSuggestionExtraReducers(builder);
  }
});

export const { initUser, setNewFancy, setUnFancy, setFancyNoti, setVisitorNoti } = suggestionSlice.actions;
export const extraReducers = suggestionSlice.reducer;

export default suggestionSlice.reducer;
