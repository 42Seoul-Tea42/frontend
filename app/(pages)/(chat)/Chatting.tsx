import ChattingRoomList from './components/ChattingRoomList';
import Draggable from 'react-draggable';
import ChatContent from './components/ChattingContent';
import ChattingMenuBar from './components/ChattingMenuBar';
import ViewMessageForm from './components/ViewMessageForm';
import SendMessageField from './components/SendMessageField';

const Chatting: React.FC = () => {
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
