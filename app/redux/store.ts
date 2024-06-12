import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
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
    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger); // Redux Logger 미들웨어를 추가
    }

    return middlewares;
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
