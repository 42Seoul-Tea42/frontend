import { useEffect } from 'react';
import { Events, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { Socket } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, setChattingMessage, setChattingNoti, setExitUser } from '../redux/slices/chattingSlice';
import { setNewFancy, setUnFancy, setFancyNoti } from '../redux/slices/suggestionSlice';
import { setHistoryNoti } from '../redux/slices/suggestionSlice';
import { RootState } from '@/redux/store';
import { setUserStatus } from '@/redux/slices/profileInquirySlice';

type useSocketEventListenerProps = {
  socket: Socket | undefined;
};

function useSocketEventListener({ socket }: useSocketEventListenerProps) {
  const dispatch = useDispatch();
  const myId = useSelector((state: RootState) => state.accountSlice.user.id);
  const chattingId = useSelector((state: RootState) => state.chattingSlice.currentUser.id);
  const inquiryId = useSelector((state: RootState) => state.profileInquirySlice.user.id);

  useEffect(() => {
    if (!socket) return;

    // 소켓 이벤트 등록
    const events: Events[] = [
      {
        event: 'new_match',
        handler: () => {
          dispatch(setChattingNoti(true));
        }
      },
      {
        event: 'unmatch',
        handler: data => {
          dispatch(setChattingNoti(true));
          dispatch(setExitUser(true));
        }
      },
      {
        event: 'new_fancy',
        handler: data => {
          dispatch(setFancyNoti(true));
          dispatch(setNewFancy(data.target_id));
        }
      },
      {
        event: 'unfancy',
        handler: data => {
          dispatch(setUnFancy(data.target_id));
        }
      },
      {
        event: 'new_history',
        handler: () => dispatch(setHistoryNoti(true))
      },
      {
        event: 'send_message',
        handler: data => {
          const sender = data.senderId;
          if (sender === myId || sender === chattingId) {
            dispatch(setChattingMessage(data));
          }
        }
      },
      {
        event: 'update_status',
        handler: data => {
          if (data.target_id === inquiryId) {
            dispatch(setUserStatus(data.status));
          }
          if (data.target_id === chattingId) {
            //
          }
        }
      }

      // { event: 'read_message', handler: () => {} },

      // 채팅목록, 연결 상태 업데이트
      // { event: 'update_distance', handler: () => {} },
      // { event: 'update_status', handler: () => {} },
      // { event: 'unregister', handler: () => {} }
    ];

    registerSocketEvent(socket, events);

    return () => {
      unRegisterSocketEvent(socket, events);
    };
  }, [socket]);
}

export default useSocketEventListener;
