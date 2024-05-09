'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { Events, createSocketWithOption, registerSocketEvent, unRegisterSocketEvent } from './socket';
import useSocketEventListen from './useSocketEventListen';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket>();
  const socketURL = process.env.NEXT_PUBLIC_SERVER_URL || '';
  useSocketEventListen({ socket: socket });

  useEffect(() => {
    const socketInstance = createSocketWithOption(socketURL);

    socketInstance.on('connect', () => {
      if (socketInstance.connected) {
        setSocket(socketInstance);
        console.log('socket connected');
      }
    });

    socketInstance.connect();

    return () => {
      socketInstance.disconnect;
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
