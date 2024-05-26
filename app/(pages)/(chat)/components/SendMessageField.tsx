import { useSocket } from '../../../socket/socketContext';
import { DirectionSVG } from '../../../svg';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSendMessage } from '../../../redux/slices/chattingSlice';

enum SendMessage {
  MAX_LENGTH = 500
}

const SendMessageField = () => {
  const message = useSelector((state: RootState) => state.chattingSlice.sendMessage);
  const dispatch = useDispatch();

  const socket = useSocket();
  const handleClick = () => {
    socket?.emit('send_message', message);
  };

  return (
    <div>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-3 rounded-b-xl border bg-gray-50 ">
        <textarea
          id="chat"
          value={message}
          onChange={e => dispatch(setSendMessage(e.target.value))}
          rows={2}
          maxLength={SendMessage.MAX_LENGTH}
          placeholder={`Your message... (.../${SendMessage.MAX_LENGTH})`}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-400 focus:border-green-400 "
          style={{ resize: 'none' }}
        ></textarea>
        <button
          type="button"
          className="flex justify-center p-2 text-green-600 rounded-full cursor-pointer hover:bg-green-100 "
          onClick={handleClick}
        >
          <DirectionSVG direction="right" size="4" />
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </div>
  );
};

export default SendMessageField;
