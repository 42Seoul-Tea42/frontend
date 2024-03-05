import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    user: userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
