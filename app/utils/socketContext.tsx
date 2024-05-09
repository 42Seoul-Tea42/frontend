'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Events, createSocketOption, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setChattingMessage, setChattingNoti } from '../redux/slices/chattingSlice';
import { setFancyNoti } from '../redux/slices/fancySlice';
import { setHistoryNoti } from '../redux/slices/historySlice';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<Socket>();
  const socketURL = process.env.NEXT_PUBLIC_SERVER_URL || '';

  useEffect(() => {
    const socketInstance = createSocketOption(socketURL);

    socketInstance.on('connect', () => {
      if (socketInstance.connected) {
        setSocket(socketInstance);
      }
    });

    socketInstance.connect();
    // socketInstance.emit('send_message', 'hello world');

    return () => {
      socketInstance.disconnect;
    };
  }, []);

  // 소켓 이벤트 등록
  useEffect(() => {
    if (!socket) return;

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
        handler: data => dispatch(setChattingMessage(data))
      }

      // { event: 'read_message', handler: () => {} },

      // 채팅목록 업데이트
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

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
