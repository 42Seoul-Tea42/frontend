'use client';

import { useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem';

const ViewMessageForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(true);

  useEffect(() => {
    // 더미 데이터 생성
    const dummyMessages = Array.from({ length: 10 }, (_, index) => `Message ${index + 1}`);
    setMessages(dummyMessages);
  }, []);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 이전 메시지를 불러오는 함수
  const loadPreviousMessages = () => {
    if (containerRef.current?.scrollTop === 0 && hasMoreMessages) {
    }
    // 여기서 이전 메시지를 불러올 수 있는 함수를 호출하여 messages 상태를 업데이트합니다.
    // 예시: fetchPreviousMessages();
    // 이전 메시지를 불러오는 API 요청이 성공하면 새로운 메시지를 기존 메시지 앞에 추가합니다.
    // 기존 메시지를 유지하면서 새로운 메시지를 추가하는 방식으로 구현합니다.
    // 새로운 메시지가 없는 경우 hasMoreMessages를 false로 설정하여 더 이상 메시지를 불러오지 않습니다.
  };

  return (
    <div
      className="max-h-[400px] min-w-96 overflow-hidden hover:overflow-y-scroll"
      ref={containerRef}
      onScroll={loadPreviousMessages}
    >
      {messages.map((message, index) => (
        <div key={index}>
          <MessageItem message={message} time="1010" me={false} />
        </div>
      ))}
      {!hasMoreMessages && (
        <div className="text-center text-gray-500 mt-2">더 이상 메시지가 없습니다.</div>
      )}
    </div>
  );
};

export default ViewMessageForm;
