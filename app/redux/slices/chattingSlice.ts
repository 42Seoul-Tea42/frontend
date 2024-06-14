import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../dto/mapper';
import _ from 'lodash';

interface ChattingState {
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

export const getChattingList = createAsyncThunk('chattingSlice/getChattingList', async () => {
  const response = await axiosInstance.get('/chat/list');
  return response.data.chat_list.map((chat: any) => serverToClientMapper(chat));
});

export const getChattingMessages = createAsyncThunk(
  'chattingSlice/getChattingMessages',
  async ({ targetId, time }: { targetId: string; time: string }) => {
    const response = await axiosInstance.get(`/chat/msg?target_id=${targetId}&time=${time}`);
    const messages = response.data.msg_list.map((msg: any) => serverToClientMapper(msg));
    return messages.reverse();
  }
);

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
    }
  },

  // 채팅방 목록 가져오기
  extraReducers: builder => {
    builder.addCase(getChattingList.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getChattingList.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    });
    builder.addCase(getChattingList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 채팅 메세지 가져오기
    builder.addCase(getChattingMessages.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getChattingMessages.fulfilled, (state, action: PayloadAction<[]>) => {
      state.messages = [...action.payload, ...state.messages];
    });
    builder.addCase(getChattingMessages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const {
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
