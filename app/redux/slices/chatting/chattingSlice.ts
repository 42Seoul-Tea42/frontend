import { createSlice } from '@reduxjs/toolkit';
import { serverToClientMapper } from '../../dto/mapper';
import _ from 'lodash';
import { addChattingExtraReducers } from './chattingExtraReducers';

export interface ChattingState {
  users: [];
  currentUser: any;
  messages: any[];
  sendMessage: string;
  chattingNoti: boolean;
  chattingListModal: boolean;
  scrollDirection: 'up' | 'down';
  exitUser: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: ChattingState = {
  users: [],
  currentUser: {},
  messages: [],
  scrollDirection: 'down',
  sendMessage: '',
  chattingListModal: true,
  chattingNoti: false,
  exitUser: false,
  loading: false,
  error: null
};

const chattingSlice = createSlice({
  name: 'chattingSlice',
  initialState,
  reducers: {
    setChattingMessage: (state, action) => {
      const data = serverToClientMapper(action.payload);
      state.messages = [...state.messages, data];
    },
    setChattingNoti: (state, action) => {
      state.chattingNoti = action.payload;
    },
    setSendMessage: (state, action) => {
      state.sendMessage = action.payload;
    },
    setChattingListModal: (state, action) => {
      state.chattingListModal = action.payload;
    },
    setChattingUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setScrollDirection: (state, action) => {
      state.scrollDirection = action.payload;
    },
    clearMessages: state => {
      state.messages = [];
    },
    setExitUser: (state, action) => {
      state.exitUser = action.payload;
    },
    setUserStatus: (state, action) => {
      if (action.payload.targetId === state.currentUser.id) {
        console.log('success update');
        state.currentUser.status = action.payload.status;
      } else {
        console.log('failed update');
      }
    }
  },

  extraReducers: builder => {
    addChattingExtraReducers(builder);
  }
});

export const {
  setUserStatus,
  setScrollDirection,
  setChattingUser,
  setChattingMessage,
  setChattingNoti,
  setSendMessage,
  setChattingListModal,
  clearMessages,
  setExitUser
} = chattingSlice.actions;
export const extraReducers = chattingSlice.reducer;

export default chattingSlice.reducer;
