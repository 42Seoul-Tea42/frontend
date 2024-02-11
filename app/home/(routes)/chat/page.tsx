'use client';

import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';

const Chat = () => {
  return (
    <>
      <ViewMessageForm />
      <SendMessageForm />
    </>
  );
};

export default Chat;
