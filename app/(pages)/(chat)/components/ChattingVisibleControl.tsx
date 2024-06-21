'use client';

import { useDispatch, useSelector } from 'react-redux';
import ChatButton from './ChatButton';
import {
  getChattingList,
  setChattingListModal,
  setChattingNoti,
  setExitUser
} from '@/redux/slices/chatting/chattingSlice';
import { useCloseOnOutsideClick } from '@/(pages)/hooks';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';

type ChatVisibleControlProps = {
  props: JSX.Element;
};

function ChattingVisibleControl({ props }: ChatVisibleControlProps) {
  const dispatch = useDispatch();
  const [dragRef, isFloatingChattingVisible, setIsFloatingChattingVisible] = useCloseOnOutsideClick({
    initialState: false
  });

  const toggleModal = () => {
    // 알림 확인
    dispatch(setChattingNoti(false));
    // 항상 채팅 리스트 보여주기
    dispatch(setChattingListModal(true));
    // 모달 보이기 / 숨기기
    setIsFloatingChattingVisible(!isFloatingChattingVisible);
    // 채팅 리스트 가져오기
    dispatch<any>(getChattingList());
  };

  const exitUser = useSelector((state: RootState) => state.chattingSlice.exitUser);
  useEffect(() => {
    if (exitUser) {
      setIsFloatingChattingVisible(false);
      dispatch(setChattingListModal(false));
      dispatch(setExitUser(false));
    }
  }, [exitUser]);

  return (
    <div ref={dragRef} className="fixed right-10 bottom-36 z-50">
      {/* 채팅 보이게 하기 컨트롤*/}
      <div className={isFloatingChattingVisible ? '' : 'hidden'}>{props}</div>
      <ChatButton isOpen={isFloatingChattingVisible} onClick={toggleModal} />
    </div>
  );
}

export default ChattingVisibleControl;
