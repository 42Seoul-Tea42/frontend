'use client';

import ChattingList from './components/ChattingList';
import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';

const Chat = () => {
  return (
    <div className="grid grid-cols-2">
      <ChattingList />
      <div className="gird grid-rows-2">
        <ViewMessageForm />
        <SendMessageForm />
      </div>
    </div>
  );
};

export default Chat;
