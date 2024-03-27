import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SocketEvent {
  chatNoti: boolean;
  fancyNoti: boolean;
  historyNoti: boolean;
}

const initialState = {
  chatNoti: false,
  fancyNoti: false,
  historyNoti: false
};

const socketEventSlice = createSlice({
  name: 'socketEventSlice',
  initialState,
  reducers: {
    setChatNoti: (state: SocketEvent, action: PayloadAction<boolean>) => {
      state.chatNoti = action.payload;
    },
    setFancyNoti: (state: SocketEvent, action: PayloadAction<boolean>) => {
      state.chatNoti = action.payload;
    },
    setHistoryNoti: (state: SocketEvent, action: PayloadAction<boolean>) => {
      state.chatNoti = action.payload;
    }
  }
});

export const { setChatNoti, setFancyNoti, setHistoryNoti } = socketEventSlice.actions;

export default socketEventSlice.reducer;
