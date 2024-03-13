'use client';

import { useEffect, useState } from 'react';
import ChattingList from './components/ChattingList';
import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';
import DirectionSVG from '../../svg/DirectionSVG';
import { SERVER_URL } from '../../../global';

const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleAccordion = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

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
      <div className="mx-auto md:grid md:grid-cols-2 m-40 gap-20">
        <div className="mb-10">
          <button
            type="button"
            className={`flex w-full items-center justify-between p-5 font-medium text-gray-600 hover:bg-gray-100 gap-3 border ${
              isOpen ? 'rounded-t-xl' : 'rounded-xl'
            } `}
            onClick={toggleAccordion}
          >
            <span>채팅리스트</span>
            <DirectionSVG direction={isOpen ? 'top' : 'down'} />
          </button>
          <div
            className={`${isOpen ? '' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <ChattingList />
          </div>
        </div>
        <div className="items-center">
          <ViewMessageForm />
          <SendMessageForm />
        </div>
      </div>
    </div>
  );
};

export default Chat;
