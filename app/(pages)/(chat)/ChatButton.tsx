import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MessageSVG } from '../../svg';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  const chatNoti = useSelector((state: RootState) => state.socketEvent.chatNoti);

  return (
    <button
      onClick={onClick}
      className="flex flex-col bg-gray-200 hover:bg-gray-400 text-red-400 items-center justify-center rounded-3xl w-20 h-20 fixed bottom-10 right-10 shadow-md"
    >
      <div className={chatNoti ? 'animate-pulse' : 'hidden'}>
        <span className="bg-green-500 absolute top-0 right-0 w-5 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <MessageSVG />
      <p className="font-bold">Chat</p>
    </button>
  );
};

export default ChatButton;
