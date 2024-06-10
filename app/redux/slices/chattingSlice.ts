import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/api/axios';
import { getLogout } from './loginSlice';
import { serverToClientMapper } from '../dto/mapper';

interface ChattingState {
  users: [];
  messages: [];
  selected: number;
  sendMessage: string;
  chattingNoti: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ChattingState = {
  users: [],
  messages: [],
  selected: 0,
  sendMessage: '',
  chattingNoti: false,
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
    return response.data;
  }
);

const chattingSlice = createSlice({
  name: 'chattingSlice',
  initialState,
  reducers: {
    setChattingMessage: (state, action) => {
      // 보고 있는 유저의 아이디인지 체크해서 메세지를 추가
      console.log('받은 메세지', action.payload);
    },
    setChattingNoti: (state, action) => {
      state.chattingNoti = action.payload;
    },
    setSendMessage: (state, action) => {
      state.sendMessage = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
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
      state.messages = action.payload;
    });
    builder.addCase(getChattingMessages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    // 로그아웃
    builder.addCase(getLogout.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLogout.fulfilled, () => initialState);
    builder.addCase(getLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  }
});

export const { setSelected, setChattingMessage, setChattingNoti, setSendMessage } = chattingSlice.actions;
export const extraReducers = chattingSlice.reducer;

export default chattingSlice.reducer;
