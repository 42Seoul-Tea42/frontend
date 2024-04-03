import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserFancy } from './interface';

interface HomeSliceState {
  homeList: UserFancy[];
}

const initialState: HomeSliceState = {
  homeList: []
};

export const asyncUpdate = createAsyncThunk('homeSlice/asyncUpdate', async () => {
  //   const response = await fetch('https://api.example.com/data', {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   });
  //   return response.json();
  return [
    {
      picture: 'hihji',
      name: 'hihi',
      age: 3,
      distance: 3,
      gender: 'hihi',
      fancy: true
    }
  ];
});

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncUpdate.fulfilled, (state, action: PayloadAction<UserFancy[]>) => {
      // asyncUpdate 액션의 payload에 해당하는 데이터를 배열에 추가합니다.
      state.homeList = [...state.homeList, ...action.payload];
    });
  }
});

export const {} = homeSlice.actions;

export const extraReducers = homeSlice.reducer;

export default homeSlice.reducer;
