import { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Events, createSocketOption, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { SERVER_URL } from '../../global';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setChatNoti, setFancyNoti, setHistoryNoti } from '../redux/slices/socketEventSlice';

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
  const accessToken = useSelector((state: RootState) => state.userData.accessToken);
  const serverUrl = SERVER_URL || '';

  useEffect(() => {
    const socketInstance = createSocketOption(serverUrl, accessToken);

    socketInstance.on('connect', () => {
      if (socketInstance.connected) setSocket(socketInstance);
    });

    socketInstance.connect();

    return () => {
      socketInstance.disconnect;
    };
  }, []);

  // 소켓 이벤트 등록
  useEffect(() => {
    if (!socket) return;

    const events: Events[] = [
      {
        event: 'new_match',
        handler: () => {
          dispatch(setChatNoti(true));
        }
      },
      {
        event: 'new_fancy',
        handler: () => {
          dispatch(setFancyNoti(true));
        }
      },
      {
        event: 'new_history',
        handler: () => {
          dispatch(setHistoryNoti(true));
        }
      },
      { event: 'send_message', handler: () => {} },
      { event: 'read_message', handler: () => {} },
      { event: 'update_distance', handler: () => {} },
      { event: 'update_status', handler: () => {} },
      { event: 'unmatch', handler: () => {} },
      { event: 'unregister', handler: () => {} }
    ];

    registerSocketEvent(socket, events);

    return () => {
      unRegisterSocketEvent(socket, events);
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
