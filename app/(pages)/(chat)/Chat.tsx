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
import ChatContent from './ChatContent';

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
        <ChatContent setIsModalOpen={setIsModalOpen} />
        <ChattingRoomList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Draggable>
  );
};

export default Chat;
