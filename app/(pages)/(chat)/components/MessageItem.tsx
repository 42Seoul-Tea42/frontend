interface MessageItemProps {
  message: any;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const myId = Number(localStorage.getItem('id'));
  const justify = message.senderId === myId ? 'justify-end' : 'justify-start';

  const formatTime = (time: string) => {
    const timeLength = 16;
    return time.substring(5, timeLength).replace('T', ' ');
  };

  return (
    <div className={`${justify} flex items-start space-x-2 p-2`}>
      <div className="flex flex-col w-full max-w-[300px] leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-normal text-gray-500">{message.time ? formatTime(message.time) : ''}</span>
        </div>
        <p className="whitespace-pre text-sm font-normal py-2.5 text-gray-900">{message.message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
