import { configureStore } from '@reduxjs/toolkit';
import searchPageSlice from './slices/searchParamSlice';
import signupSlice from './slices/signupSlice';
import suggestProfileSlice from './slices/suggestProfileSlice';
import userDataSlice from './slices/userDataSlice';
import socketEventSlice from './slices/socketEventSlice';
import profileServiceSlice from './slices/profileServiceSlice';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import historyService from './services/historyService';
import suggestionService from './services/suggestionService';
import fancyService from './services/fancyService';
import accountService from './services/accountService';

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
    historyService: historyService,
    fancyService: fancyService,
    suggestionService: suggestionService,
    accountService: accountService
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
    middlewares.push(thunk);

    return middlewares;
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
