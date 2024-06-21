import { useEffect } from 'react';
import { Events, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { Socket } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChattingMessage,
  setChattingNoti,
  setExitUser,
  setUserStatus
} from '../redux/slices/chatting/chattingSlice';
import { setNewFancy, setUnFancy, setFancyNoti } from '../redux/slices/suggestion/suggestionSlice';
import { setVisitorNoti } from '../redux/slices/suggestion/suggestionSlice';
import { RootState } from '@/redux/store';

type useSocketEventListenerProps = {
  socket: Socket | undefined;
};

function useSocketEventListener({ socket }: useSocketEventListenerProps) {
  const dispatch = useDispatch();
  const myId = useSelector((state: RootState) => state.accountSlice.user.id);
  const chattingId = useSelector((state: RootState) => state.chattingSlice.currentUser.id);

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
        event: 'new_visitor',
        handler: () => dispatch(setVisitorNoti(true))
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
          dispatch(
            setUserStatus({
              status: data.status,
              targetId: data.target_id
            })
          );
        }
      }

      // { event: 'read_message', handler: () => {} },

      // 채팅목록, 연결 상태 업데이트
      // { event: 'update_distance', handler: () => {} },
      // { event: 'unregister', handler: () => {} }
    ];

    registerSocketEvent(socket, events);

    return () => {
      unRegisterSocketEvent(socket, events);
    };
  }, [socket]);
}

export default useSocketEventListener;
