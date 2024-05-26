interface MessageItemProps {
  time: string;
  message: string;
  me: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ time, message, me }) => {
  const justify = me ? 'justify-end' : 'justify-start';

  return (
    <div className={`${justify} flex items-start space-x-2 p-2`}>
      <div className="flex flex-col w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-normal text-gray-500">{time}</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900">{message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
