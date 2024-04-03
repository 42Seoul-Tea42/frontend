import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import suggestProfileSlice from './slices/suggestProfileSlice';
import userDataSlice from './slices/userDataSlice';
import socketEventSlice from './slices/socketEventSlice';
import profileServiceSlice from './slices/profileServiceSlice';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import homeSlice from './thunks/homeSlice';

// Import the Tuple type from the 'redux' package

type AppActions = any;

const store = configureStore({
  reducer: {
    searchParam: searchPageSlice,
    signup: signupSlice,
    suggestProfile: suggestProfileSlice,
    userData: userDataSlice,
    socketEvent: socketEventSlice,
    profileService: profileServiceSlice,
    home: homeSlice
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false, // dev: false, prod: true
      immutableCheck: false // dev: false, prod: true
    });

    // 추가적인 미들웨어를 배열로 연결
    middlewares.push(logger); // 예시로 Redux Logger 미들웨어를 추가
    middlewares.push(thunk);

    return middlewares;
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
