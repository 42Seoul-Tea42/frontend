import { useEffect } from 'react';
import ChattingRoomListItem from './ChattingRoomListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getChattingList } from '@/redux/slices/chattingSlice';

function ChattingRoomList() {
  const users = useSelector((state: RootState) => state.chattingSlice.users);
  const visible = useSelector((state: RootState) => state.chattingSlice.chattingListModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getChattingList());
  }, []);

  return (
    <>
      {visible && (
        <>
          <ul className="absolute w-full h-full overflow-hidden border rounded-xl bg-green-50">
            <p className="p-1"> 채팅방 목록 </p>
            {users.map((user, index) => (
              <ChattingRoomListItem key={index} user={user} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ChattingRoomList;
