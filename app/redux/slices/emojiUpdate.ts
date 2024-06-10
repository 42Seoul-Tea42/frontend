import { PayloadAction } from '@reduxjs/toolkit';
import { AccountState } from './accountSlice';

export type EmojiType = 'emoji' | 'hateEmoji';

interface UpdateEmojiListProps {
  state: AccountState;
  action: PayloadAction<number>;
  type: EmojiType;
}

export function updateEmojiList({ state, action, type }: UpdateEmojiListProps) {
  const currentList = state.user[type];

  const oppositeType = type === 'emoji' ? 'hateEmoji' : 'emoji';
  const oppositeList = state.user[oppositeType];

  // 백엔드 요청: 4개까지만 고르게 해주세요. 4개 이상 && 새로운 이모티콘 추가 시 리턴
  if (currentList.length >= 4 && !currentList.includes(action.payload)) {
    return;
  }

  // 반대 목록에 있는 경우 리턴
  if (oppositeList.includes(action.payload)) {
    return;
  }

  // 이모티콘 추가 및 삭제
  if (currentList.includes(action.payload)) {
    state.user[type] = currentList.filter((item: number) => item !== action.payload);
  } else {
    state.user[type] = [...currentList, action.payload];
  }
}
