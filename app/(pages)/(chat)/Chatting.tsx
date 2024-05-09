'use client';

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
import ChattingRoomListVisibleControl from './components/ChattingRoomListVisibleControl';

const Chatting: React.FC = () => {
  const [modalRef, isModalOpen, setIsModalOpen] = useCloseOnOutsideClick({ initialState: false });
  const dispatch = useDispatch();
  const chatSocket = useSocket();

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
        <ChattingRoomListVisibleControl
          props={<ChattingRoomList isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
          modalRef={modalRef}
        />
      </div>
    </Draggable>
  );
};

export default Chatting;
