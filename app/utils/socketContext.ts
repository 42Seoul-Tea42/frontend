import { createContext, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { createSocket } from './socket';

// SocketContext 생성
const socketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const usesocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export const socketProvider = () => {
  useEffect(() => {
    const socket = createSocket();
    socket.connect();
  }, []);

  useEffect(() => {});
};
