'use client';

import { useEffect, useRef, useState } from 'react';
import SendMessageForm from './components/SendMessageForm';
import ViewMessageForm from './components/ViewMessageForm';
import ChattingRoomList from './components/ChattingRoomList';
import Draggable from 'react-draggable';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useSocket } from '../../utils/socketContext';
import { HamburgerSVG } from '../../svg';

const Chat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const chatSocket = useSocket();

  // 채팅목록 가져오기
  useEffect(() => {
    // webSocket.onopen = () => {};
    // webSocket.onmessage = (event) => {};
    // webSocket.onerror = (error) => {};
    // webSocket.onclose = () => {};
    // return () => {
    //   webSocket.close();
    // };
  }, []);

  return (
    <Draggable>
      <div className="items-center max-w-96 bg-white rounded-xl shadow-lg">
        <div className="flex items-center p-4 border rounded-t-xl">
          <div className="relative">
            <Image className="w-10 h-10 rounded-full" src={'/장원영.jpeg'} width={500} height={700} alt="User image" />
            <span className="animate bg-green-500 absolute bottom-0 w-4 h-4 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <p className="grow text-xl ml-5 font-semibold text-gray-800 dark:text-white">{'name'}</p>
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
  );
};

export default Chat;
