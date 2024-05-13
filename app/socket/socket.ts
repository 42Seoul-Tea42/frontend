import { Socket } from 'socket.io-client';

/**
 * @property {string} event - 이벤트명
 * @property {boolean} once - 한번만 실행할 이벤트인지 여부
 * @property {function} handler - 이벤트 핸들러
 */
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
        console.log(`[Socket.ONCE] ${event} data: `, data);
        handler(data);
      });
    } else {
      socket.on(event, (data: any) => {
        console.log(`[Socket.ON] ${event} data: `, data);
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
