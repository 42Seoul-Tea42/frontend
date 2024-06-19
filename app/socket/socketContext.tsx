'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import useSocketEventListener from './useSocketEventListener';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket>();
  useSocketEventListener({ socket: socket });

  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  // handle connect/disconnect
  useEffect(() => {
    const id = localStorage.getItem('id');

    const socketInstance = io(domain ?? '', {
      withCredentials: false,
      autoConnect: true,
      transports: ['websocket', 'polling'],
      closeOnBeforeunload: true,
      reconnection: true,
      auth: {
        id: id
      }
    });

    socketInstance.on('connect', () => {
      setSocket(socketInstance);
      console.log('🚀 socket connected');
    });

    socketInstance.on('disconnect', () => {
      setSocket(undefined);
      console.log('🛠 socket disconnected');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
