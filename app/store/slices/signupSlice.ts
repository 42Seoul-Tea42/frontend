import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  selectedTags: number[];
}

const initialState: UserState = {
  selectedTags: []
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    addSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = [...state.selectedTags, action.payload];
      console.table(state.selectedTags);
    },
    removeSelectedTags: (state: { selectedTags: number[] }, action: { payload: number }) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
    }
  }
});
export const { addSelectedTags, removeSelectedTags } = UserSlice.actions;

export default UserSlice.reducer;
