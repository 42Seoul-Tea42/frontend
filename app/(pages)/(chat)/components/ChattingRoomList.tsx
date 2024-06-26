import { useEffect } from 'react';
import ChattingRoomListItem from './ChattingRoomListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function ChattingRoomList() {
  const users = useSelector((state: RootState) => state.chattingSlice.users);
  const visible = useSelector((state: RootState) => state.chattingSlice.chattingListModal);

  return (
    <>
      {visible && (
        <ul className="absolute w-full h-full overflow-hidden border rounded-xl bg-green-50">
          <div className="flex p-1 text-teal-700">
            <p> 채팅방 </p>
            <p className={users.length ? 'hidden' : ''}>이 없습니다.</p>
          </div>
          {users.map((user, index) => (
            <ChattingRoomListItem key={index} user={user} />
          ))}
        </ul>
      )}
    </>
  );
}

export default ChattingRoomList;
