import { useState, useEffect, useLayoutEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getChattingList } from '@/redux/slices/chattingSlice';

interface ChattingRoomListProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
}

function ChattingRoomList({ isModalOpen, setIsModalOpen }: ChattingRoomListProps) {
  const users = useSelector((state: RootState) => state.chattingSlice.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getChattingList());
  }, []);

  return (
    <>
      <ul className="overflow-hidden border rounded-xl">
        {Array.isArray(users) ? (
          users.map((user, index) => (
            <ChattingRoomListItem key={index} user={user} onClick={() => setIsModalOpen(false)} />
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </>
  );
}

export default ChattingRoomList;
