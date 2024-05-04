import { useState, useEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getChattingList } from '../../../redux/slices/chattingSlice';
interface ChattingRoomListProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChattingRoomList({ isModalOpen, setIsModalOpen }: ChattingRoomListProps) {
  const [users, setUsers] = useState<any[]>([]);
  // const users = useSelector((state: RootState) => state.chattingSlice.users);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers([
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        picture: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        picture: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        picture: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        picture: '/emoji/1.jpg'
      }
    ]);
  }, []);

  useEffect(() => {
    dispatch<any>(getChattingList());
  }, []);

  return (
    <>
      <ul className="overflow-hidden border rounded-xl">
        {users.map((user, index) => (
          <ChattingRoomListItem key={index} user={user} />
        ))}
      </ul>
    </>
  );
}

export default ChattingRoomList;
