import { Socket, io } from 'socket.io-client';
import { SERVER_URL } from '../../global';

export const createSocket = (): Socket => {
  const serverUrl = SERVER_URL || '';
  const accessToken = localStorage.getItem('access_token');

  return io(serverUrl, {
    withCredentials: false,
    autoConnect: false, // 첫 연결시 커넥션
    transports: ['websocket', 'polling'],
    closeOnBeforeunload: true,
    reconnection: false, // 오류시 재연결
    query: {
      token: accessToken
    }
  });
};
