import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ChattingState, setChattingMessage } from './chattingSlice';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../../dto/mapper';
import { AccountState } from '../account/accountSlice';

// 채팅 목록 가져오기 -----------------------------------------------------
export const getChattingList = createAsyncThunk('chattingSlice/getChattingList', async () => {
  const response = await axiosInstance.get('/chat/list');
  return response.data.chat_list.map((chat: any) => serverToClientMapper(chat));
});

const addGetChattingListCase = (builder: ActionReducerMapBuilder<ChattingState>) => {
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
};

// 채팅 메시지 가져오기 -----------------------------------------------------
export const getChattingMessages = createAsyncThunk(
  'chattingSlice/getChattingMessages',
  async ({ targetId, time }: { targetId: string; time: string }) => {
    const response = await axiosInstance.get(`/chat/msg?target_id=${targetId}&time=${time}`);
    const messages = response.data.msg_list.map((msg: any) => serverToClientMapper(msg));
    return messages.reverse();
  }
);

const addGetChattingMessagesCase = (builder: ActionReducerMapBuilder<ChattingState>) => {
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
};

// 채팅 수신시에 메세지 업데이트 (내 id를 참조해야하는데 갖고올 곳이 없어서 만듦)-----------------------------------------------------
export const appendChattingMessage = createAsyncThunk('chattingSlice/appendChattingMessage', async (data: any, { getState }) => {
  try {
    const accountState = getState() as { accountSlice: AccountState };
    const chattingState = getState() as { chattingSlice: ChattingState };
    if (accountState.accountSlice.user.id === data.sender_id 
      || chattingState.chattingSlice.currentUser.id === data.sender_id) {
      return serverToClientMapper(data);
    }
  } catch (error: any) {
    return Promise.reject(error);
  }
});

const addAppendChattingMessageCase = (builder: ActionReducerMapBuilder<ChattingState>) => {
  builder.addCase(appendChattingMessage.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(appendChattingMessage.fulfilled, (state, action: PayloadAction<any>) => {
    state.loading = false;
    if (action.payload) {
      state.messages = [...state.messages, action.payload];
    }
  });
  builder.addCase(appendChattingMessage.rejected, (state, action) => {
    state.loading = false;
    console.log('action.error', action.error.message ?? null);
  });
}

// extra reducers 추가 -----------------------------------------------------
export const addChattingExtraReducers = (builder: ActionReducerMapBuilder<ChattingState>) => {
  addGetChattingListCase(builder);
  addGetChattingMessagesCase(builder);
  addAppendChattingMessageCase(builder);
};
