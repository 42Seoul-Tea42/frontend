import Cup from '@/Cup';
import { RootState } from '@/redux/store';
import { MessageSVG } from '@/svg';
import { useSelector } from 'react-redux';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onClick }) => {
  const chatNoti = useSelector((state: RootState) => state.chattingSlice.chattingNoti);

  return (
    <button
      onClick={onClick}
      className="flex flex-col bg-gray-200 hover:bg-gray-400 text-green-400 border border-gray-300 items-center justify-center rounded-3xl w-24 h-24 fixed bottom-10 right-10 shadow-md"
    >
      <div className={chatNoti ? 'animate-pulse' : 'hidden'}>
        <span className="bg-red-500 animate-bounce absolute top-0 right-0 w-4 h-4 border-2 border-white rounded-full"></span>
      </div>
      <Cup style="rounded-full w-24 h-12" backgroundColor="#e5e7eb" />
      <p className="font-bold text-shadow">Chat</p>
    </button>
  );
};

export default ChatButton;
