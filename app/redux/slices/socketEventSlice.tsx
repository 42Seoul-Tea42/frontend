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
      console.log(state.chatNoti);
    },
    setFancyNoti: (state: SocketEvent, action: PayloadAction<boolean>) => {
      state.fancyNoti = action.payload;
      console.log(state.fancyNoti);
    },
    setHistoryNoti: (state: SocketEvent, action: PayloadAction<boolean>) => {
      state.historyNoti = action.payload;
      console.log(state.historyNoti);
    }
  }
});

export const { setChatNoti, setFancyNoti, setHistoryNoti } = socketEventSlice.actions;

export default socketEventSlice.reducer;
