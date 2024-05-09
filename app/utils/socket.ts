import { Socket, io } from 'socket.io-client';

export const createSocketOption = (socketURL: string): Socket => {
  const socketOptions = {
    withCredentials: false,
    autoConnect: false,
    transports: ['websocket', 'polling'],
    closeOnBeforeunload: true,
    reconnection: false
  };

  return io(socketURL, socketOptions);
};

export interface Events {
  event: string;
  once?: boolean;
  handler: (data: any) => void;
}

// 이벤트에 디버깅용 옵저빙 패턴 추가
export const registerSocketEvent = (socket: Socket, events: Events[]): void => {
  events.map(({ event, once, handler }) => {
    if (once) {
      socket.once(event, (data: any) => {
        console.table(`[Socket.ONCE] ${event} data: `, data);
        handler(data);
      });
    } else {
      socket.on(event, (data: any) => {
        console.table(`[Socket.ON] ${event} data: `, data);
        handler(data);
      });
    }
  });
};

export const unRegisterSocketEvent = (socket: Socket, events: Events[]): void => {
  events.map(({ event }): void => {
    socket.off(event);
  });
};
