'use client';

import { useEffect } from 'react';
import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';
import ChattingRoomList from './components/ChattingRoomList';

const Chat: React.FC = () => {
  useEffect(() => {
    // const ws = new WebSocket(SERVER_URL || '');
    // ws.onopen = () => {};
    // ws.onclose = () => {};
    // return () => {
    //   ws.close();
    // };
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="mx-auto m-60 gap-20">
        <div className="items-center">
          <ViewMessageForm />
          <SendMessageForm />
        </div>
        <ChattingRoomList />
      </div>
    </div>
  );
};

export default Chat;
