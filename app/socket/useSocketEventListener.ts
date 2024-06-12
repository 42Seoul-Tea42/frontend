import { useEffect } from 'react';
import { Events, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { Socket } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { setChattingMessage, setChattingNoti } from '../redux/slices/chattingSlice';
import { setFancyNoti } from '../redux/slices/fancySlice';
import { setHistoryNoti } from '../redux/slices/historySlice';
import { RootState } from '@/redux/store';

type useSocketEventListenerProps = {
  socket: Socket | undefined;
};

function useSocketEventListener({ socket }: useSocketEventListenerProps) {
  const dispatch = useDispatch();
  const myId = useSelector((state: RootState) => state.accountSlice.user.id);
  const targetId = useSelector((state: RootState) => state.chattingSlice.currentUser.id);

  useEffect(() => {
    if (!socket) return;

    // 소켓 이벤트 등록
    const events: Events[] = [
      // 알림기능 관련
      {
        event: 'new_match',
        handler: () => dispatch(setChattingNoti(true))
      },
      {
        event: 'new_fancy',
        handler: () => dispatch(setFancyNoti(true))
      },
      {
        event: 'new_history',
        handler: () => dispatch(setHistoryNoti(true))
      },

      // 채팅 관련
      {
        event: 'send_message',
        handler: data => {
          const sender = data.senderId;
          if (sender === myId || sender === targetId) {
            dispatch(setChattingMessage(data));
          }
        }
      }

      // { event: 'read_message', handler: () => {} },

      // 채팅목록, 연결 상태 업데이트
      // { event: 'update_distance', handler: () => {} },
      // { event: 'update_status', handler: () => {} },
      // { event: 'unmatch', handler: () => {} },
      // { event: 'unregister', handler: () => {} }
    ];

    registerSocketEvent(socket, events);

    return () => {
      unRegisterSocketEvent(socket, events);
    };
  }, [socket]);
}

export default useSocketEventListener;