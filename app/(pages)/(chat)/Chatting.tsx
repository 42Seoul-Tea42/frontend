'use client';

import ChattingRoomList from './components/ChattingRoomList';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import ChatContent from './components/ChattingContent';
import ChattingMenuBar from './components/ChattingMenuBar';
import ViewMessageForm from './components/ViewMessageForm';
import SendMessageField from './components/SendMessageField';
import { RootState } from '@/redux/store';

const Chatting: React.FC = () => {
  const users = useSelector((state: RootState) => state.chattingSlice.users);
  const dispatch = useDispatch();

  return (
    // draggable 안쪽 사용자정의 컴포넌트 인식못함 <div>로 감싸줄 것
    <Draggable>
      <div className="items-center max-w-96 bg-white rounded-xl shadow-lg">
        <ChattingRoomList />
        <ChatContent
          MenuBar={<ChattingMenuBar />}
          viewMessage={<ViewMessageForm />}
          sendMessage={<SendMessageField />}
        />
      </div>
    </Draggable>
  );
};

export default Chatting;
