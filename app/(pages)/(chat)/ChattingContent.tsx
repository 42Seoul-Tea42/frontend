type ChatContentProps = {
  MenuBar: React.ReactNode;
  viewMessage: React.ReactNode;
  sendMessage: React.ReactNode;
};

function ChattingContent({ MenuBar, viewMessage, sendMessage }: ChatContentProps) {
  return (
    <div>
      {MenuBar}
      <div className="border-l border-r">{viewMessage}</div>
      {sendMessage}
    </div>
  );
}

export default ChattingContent;
