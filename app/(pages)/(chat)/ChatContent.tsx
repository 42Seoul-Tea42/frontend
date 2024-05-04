type ChatContentProps = {
  chatMenuBar: React.ReactNode;
  viewMessage: React.ReactNode;
  sendMessage: React.ReactNode;
};

function ChatContent({ chatMenuBar, viewMessage, sendMessage }: ChatContentProps) {
  return (
    <div>
      {chatMenuBar}
      <div className="border-l border-r">{viewMessage}</div>
      {sendMessage}
    </div>
  );
}

export default ChatContent;
