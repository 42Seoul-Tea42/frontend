import { PayloadAction } from '@reduxjs/toolkit';
import { AccountState } from './accountSlice';
import _ from 'lodash';

interface UpdateLikeListProps {
  state: AccountState;
  action: PayloadAction<number>;
  property: string;
  oppositeType: string;
  maxItems?: number;
}

export function updateLikeList({ state, action, property, oppositeType, maxItems }: UpdateLikeListProps) {
  const currentList = state.user[property];

  const oppositeList = state.user[oppositeType];

  // 백엔드 요청: 4개까지만 고르게 해주세요.
  // 개수제한 로직 : maxItems가 넘고 & 아직 선택되지 않은 항목이면 리턴
  if (maxItems && currentList.length >= maxItems && !currentList.includes(action.payload)) {
    return;
  }

  // 반대 목록에 있는 경우 리턴
  if (oppositeList.includes(action.payload)) {
    return;
  }

  // 이모티콘 추가 및 삭제
  if (currentList.includes(action.payload)) {
    state.user[property] = _.without(currentList, action.payload);
  } else {
    state.user[property] = _.concat(currentList, action.payload);
  }
}
