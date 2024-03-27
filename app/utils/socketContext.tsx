import { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Events, createSocketOption, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { SERVER_URL } from '../../global';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  newFancy,
  newHistory,
  newMatch,
  readMessage,
  sendMessage,
  unMatch,
  updateDistance,
  updateStatus
} from './socketEventHandler';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
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
      { event: 'new_match', handler: newMatch },
      { event: 'new_fancy', handler: newFancy },
      { event: 'new_history', handler: newHistory },
      { event: 'send_message', handler: sendMessage },
      { event: 'read_message', handler: readMessage },
      { event: 'update_distance', handler: updateDistance },
      { event: 'update_status', handler: updateStatus },
      { event: 'unmatch', handler: unMatch },
      { event: 'unregister', handler: unRegister }
    ];

    registerSocketEvent(socket, events);

    return () => {
      unRegisterSocketEvent(socket, events);
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
function unRegister(data: any): void {
  throw new Error('Function not implemented.');
}
