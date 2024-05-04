'use client';

import { useEffect, useRef, useState } from 'react';
import ChattingRoomList from './components/ChattingRoomList';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { useSocket } from '../../utils/socketContext';
import ChatContent from './components/ChattingContent';
import { useCloseOnOutsideClick } from '../hooks';
import ChattingMenuBar from './components/ChattingMenuBar';
import ViewMessageForm from './components/ViewMessageForm';
import SendMessageForm from './components/SendMessageForm';
import ChattingMenuButton from './components/ChattingMenuButton';

const Chatting: React.FC = () => {
  const [modalRef, isModalOpen, setIsModalOpen] = useCloseOnOutsideClick({ initialState: false });
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
    // draggable 안쪽 사용자정의 컴포넌트 인식못함 <div>로 감싸줄 것
    <Draggable>
      <div className="items-center max-w-96 bg-white rounded-xl shadow-lg">
        <ChatContent
          MenuBar={
            <ChattingMenuBar
              menuOpen={
                <ChattingMenuButton
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                  }}
                />
              }
            />
          }
          viewMessage={<ViewMessageForm />}
          sendMessage={<SendMessageForm />}
        />
        {isModalOpen && (
          <div
            tabIndex={-1}
            className="fixed top-0 left-0 w-full h-full flex items-start justify-center rounded-xl bg-gray-800 bg-opacity-50"
          >
            <div ref={modalRef} className="bg-white w-full rounded-xl">
              <ChattingRoomList isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Chatting;
