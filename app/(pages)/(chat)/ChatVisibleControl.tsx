import { useDispatch } from 'react-redux';
import { useCloseOnOutsideClick } from '../hooks';
import ChatButton from './components/ChatButton';
import { setChatNoti } from '../../redux/oldslices/socketEventSlice';

type ChatVisibleControlProps = {
  props: JSX.Element;
};

function ChatVisibleControl({ props }: ChatVisibleControlProps) {
  const [dragRef, isFloatingChatVisible, setIsFloatingChatVisible] = useCloseOnOutsideClick();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setChatNoti(false));
    setIsFloatingChatVisible(!isFloatingChatVisible);
  };

  return (
    <div ref={dragRef} className="fixed right-10 bottom-36 z-50">
      <div className={isFloatingChatVisible ? '' : 'hidden'}>{props}</div>
      <ChatButton onClick={onClick} />
    </div>
  );
}

export default ChatVisibleControl;
