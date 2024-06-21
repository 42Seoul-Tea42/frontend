import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ChattingState } from './chattingSlice';
import axiosInstance from '@/api/axios';
import { serverToClientMapper } from '../../dto/mapper';

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

// extra reducers 추가 -----------------------------------------------------
export const addChattingExtraReducers = (builder: ActionReducerMapBuilder<ChattingState>) => {
  addGetChattingListCase(builder);
  addGetChattingMessagesCase(builder);
};
