import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './oldslices/searchParamSlice';
import suggestProfileSlice from './oldslices/suggestProfileSlice';
import userDataSlice from './oldslices/userDataSlice';

import logger from 'redux-logger';
import socketEventSlice from './oldslices/socketEventSlice';
import historySlice from './slices/historySlice';
import fancySlice from './slices/fancySlice';
import suggestionSlice from './slices/suggestionSlice';
import accountSlice from './slices/accountSlice';
import signupSlice from './slices/signupSlice';

type AppActions = any;

const store = configureStore({
  reducer: {
    // legacy
    searchParam: searchPageSlice,
    suggestProfile: suggestProfileSlice,
    userData: userDataSlice,
    socketEvent: socketEventSlice,

    //new
    historySlice: historySlice,
    fancySlice: fancySlice,
    suggestionSlice: suggestionSlice,
    accountSlice: accountSlice,
    signupSlice: signupSlice
  },
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: boolean; // dev: false, prod: true
      immutableCheck: boolean; // dev: false, prod: true
    }) => any
  ) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false, // dev: false, prod: true
      immutableCheck: false // dev: false, prod: true
    });

    // 추가적인 미들웨어를 배열로 연결
    middlewares.push(logger); // 예시로 Redux Logger 미들웨어를 추가

    return middlewares;
  }
});

export type RootState = ReturnType<typeof store.getState>;
