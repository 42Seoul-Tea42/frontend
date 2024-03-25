import { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Events, createSocketOption, registerSocketEvent, unRegisterSocketEvent } from './socket';
import { SERVER_URL } from '../../global';
import { getCookie } from './cookie';

// SocketContext 생성
const SocketContext = createContext<Socket | undefined>(undefined);

// 커스텀 훅 정의
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ children }: { children: React.ReactNode}) => {
  const [socket, setSocket] = useState<Socket>();
  
  useEffect(() => {
    const accessToken = getCookie('access_token')
    if (!accessToken) return;
    const serverUrl = SERVER_URL;
    if (!serverUrl) return ;

    const socketInstance = createSocketOption(serverUrl, accessToken);

    socketInstance.on('connect', () => {
      if (socketInstance.connected)
        setSocket(socketInstance); 
    })

    socketInstance.connect();

    return () => {
      socketInstance.disconnect
    }
  }, []);

  useEffect(() => {
    if (!socket) return;

   const events: Events[] = [
    {
      event: 'test',
      handler: () => {}
    }, 
   ]  

    registerSocketEvent(socket, events);

   return () => {
      unRegisterSocketEvent(socket, events);
   }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
