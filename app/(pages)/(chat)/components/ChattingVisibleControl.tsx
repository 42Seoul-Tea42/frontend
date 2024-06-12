import { useDispatch } from 'react-redux';
import ChatButton from './ChatButton';
import { setChattingNoti } from '@/redux/slices/chattingSlice';
import { useCloseOnOutsideClick } from '@/(pages)/hooks';

type ChatVisibleControlProps = {
  props: JSX.Element;
};

function ChattingVisibleControl({ props }: ChatVisibleControlProps) {
  const dispatch = useDispatch();
  const [dragRef, isFloatingChattingVisible, setIsFloatingChattingVisible] = useCloseOnOutsideClick({
    initialState: true
  });

  const onClick = () => {
    dispatch(setChattingNoti(false));
    setIsFloatingChattingVisible(!isFloatingChattingVisible);
  };

  return (
    <div ref={dragRef} className="fixed right-10 bottom-36 z-50">
      {/* 채팅 보이게 하기 컨트롤*/}
      <div className={isFloatingChattingVisible ? '' : 'hidden'}>{props}</div>
      <ChatButton isOpen={isFloatingChattingVisible} onClick={onClick} />
    </div>
  );
}

export default ChattingVisibleControl;
