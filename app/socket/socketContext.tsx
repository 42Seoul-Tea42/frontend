'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import useSocketEventListen from './useSocketEventListen';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket>();
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || '';
  useSocketEventListen({ socket: socket });

  // handle connect/disconnect
  useEffect(() => {
    const socketInstance = io(serverURL, {
      withCredentials: false,
      autoConnect: false,
      transports: ['websocket', 'polling'],
      closeOnBeforeunload: true,
      reconnection: true
    });

    socketInstance.on('connect', () => {
      setSocket(socketInstance);
      console.log('socket connected');
    });

    socketInstance.on('disconnect', () => {
      setSocket(undefined);
      console.log('socket disconnected');
    });

    socketInstance.connect();

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
