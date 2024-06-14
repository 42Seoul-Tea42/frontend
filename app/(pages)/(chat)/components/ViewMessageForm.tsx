'use client';

import { use, useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getChattingMessages, setScrollDirection } from '@/redux/slices/chattingSlice';

const ViewMessageForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: RootState) => state.chattingSlice.messages);
  const currentUser = useSelector((state: RootState) => state.chattingSlice.currentUser);
  const dispatch = useDispatch();

  const scrollDirection = useSelector((state: RootState) => state.chattingSlice.scrollDirection);
  useEffect(() => {
    const scrollToBottom = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };
    if (scrollDirection === 'down') {
      scrollToBottom();
    }
  }, [messages]);

  const loadPreviousMessages = () => {
    if (messages.length === 0) return;
    if (containerRef.current?.scrollTop === 0) {
      const standardTime = messages[0].time;
      console.log('standardTime', standardTime);
      dispatch<any>(
        getChattingMessages({
          targetId: currentUser.id,
          time: standardTime.slice(0, -5) + '%2B0900'
        })
      );
      dispatch(setScrollDirection('up'));
    }
  };

  return (
    <div
      className="max-h-[400px] min-w-96 min-h-96 overflow-hidden hover:overflow-y-scroll"
      ref={containerRef}
      onScroll={loadPreviousMessages}
    >
      {messages.map((message, index) => (
        <div key={index} className={message.message.length ? '' : 'hidden'}>
          <MessageItem message={message} />
        </div>
      ))}
    </div>
  );
};

export default ViewMessageForm;
