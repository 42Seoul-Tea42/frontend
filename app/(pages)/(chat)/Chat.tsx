'use client';

import { useEffect, useState } from 'react';
import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';
import ChattingRoomList from './components/ChattingRoomList';
import Draggable from 'react-draggable';
import { HamburgerSVG } from '../../svg/HomeNavBarSVG';
import Image from 'next/image';
const Chat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    // const ws = new WebSocket(SERVER_URL || '');
    // ws.onopen = () => {};
    // ws.onclose = () => {};
    // return () => {
    //   ws.close();
    // };
  }, []);

  return (
    <div className="fixed right-10 bottom-36 z-50">
      <Draggable>
        <div className="items-center max-w-96 bg-white rounded-xl shadow-lg">
          <div className="flex items-center p-4 border rounded-t-xl">
            <div className="relative">
              <Image
                className="w-10 h-10 rounded-full"
                src={'/장원영.jpeg'}
                width={500}
                height={700}
                alt="User image"
              />
              <span className="bg-green-500 absolute bottom-0 w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <p className="grow text-xl ml-5 font-semibold text-gray-800 dark:text-white">
              {'name'}
            </p>
            <button onClick={() => setIsModalOpen(true)} className="m-1 w-6 h-6">
              <HamburgerSVG />
            </button>
          </div>
          <div className="border-l border-r">
            <ViewMessageForm />
          </div>
          <SendMessageForm />
          <ChattingRoomList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      </Draggable>
    </div>
  );
};

export default Chat;
