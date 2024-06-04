import { RootState } from '@/redux/store';
import { MessageSVG } from '@/svg';
import { useSelector } from 'react-redux';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  const chatNoti = useSelector((state: RootState) => state.chattingSlice.chattingNoti);

  return (
    <button
      onClick={onClick}
      className="flex flex-col bg-gray-200 hover:bg-gray-400 text-green-400 border border-gray-300 items-center justify-center rounded-3xl w-20 h-20 fixed bottom-10 right-10 shadow-md"
    >
      <div className={chatNoti ? 'animate-pulse' : 'hidden'}>
        <span className="bg-green-500 absolute top-0 right-0 w-5 h-5 border-2 border-white rounded-full"></span>
      </div>
      <MessageSVG />
      <p className="font-bold">Chat</p>
    </button>
  );
};

export default ChatButton;
