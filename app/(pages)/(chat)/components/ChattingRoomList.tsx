import { useState, useEffect, useLayoutEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getChattingList } from '@/redux/slices/chattingSlice';
import { usersInquirySetDummy } from '@/UserDummy';

function ChattingRoomList() {
  // const users = useSelector((state: RootState) => state.chattingSlice.users);
  const visible = useSelector((state: RootState) => state.chattingSlice.chattingListModal);
  const users = usersInquirySetDummy;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getChattingList());
  }, []);

  return (
    <div className={visible ? '' : 'hidden'}>
      <ul className="absolute w-96 h-full overflow-hidden border rounded-xl bg-green-50">
        {Array.isArray(users) ? (
          users.map((user, index) => <ChattingRoomListItem key={index} user={user} />)
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </div>
  );
}

export default ChattingRoomList;
