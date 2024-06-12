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
    <div className={visible ? '' : 'hidden'}>
      <ul className="absolute w-96 h-full overflow-hidden border rounded-xl bg-green-50">
        {users.map((user, index) => (
          <ChattingRoomListItem key={index} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default ChattingRoomList;
