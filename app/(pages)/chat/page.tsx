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
    const ws = new WebSocket(SERVER_URL || '');

    ws.onopen = () => {};

    ws.onclose = () => {};

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="mx-auto md:grid md:grid-cols-2 m-40 gap-20">
        <div className="mb-10">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={`flex w-full items-center justify-between p-5 font-medium ${
                  isOpen ? 'rounded-t-xl' : 'rounded-xl'
                } rtl:text-right text-gray-500 border border-gray-200 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={toggleAccordion}
              >
                <span>채팅리스트</span>
                <DirectionSVG direction={isOpen ? 'top' : 'down'} />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${isOpen ? '' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <ChattingList />
            </div>
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
