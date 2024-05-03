import { useState, useEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
interface ChattingRoomListProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChattingRoomList({ isModalOpen, setIsModalOpen }: ChattingRoomListProps) {
  const [users, setUsers] = useState<ChattingRoomListItemProps[]>([]);
  // const users = useSelector((state: RootState) => state.chattingSlice.users);
  const modalRef = React.createRef<HTMLDivElement>();

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    setUsers([
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      }
    ]);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div
          tabIndex={-1}
          className="fixed top-0 left-0 w-full h-full flex items-start justify-center rounded-xl bg-gray-800 bg-opacity-50"
        >
          <div ref={modalRef} className="bg-white w-full rounded-xl">
            <ul className="overflow-hidden border rounded-xl">
              {users.map((user, index) => (
                <div onClick={() => {}}>
                  <ChattingRoomListItem
                    key={index}
                    name={user.name}
                    distance={user.distance}
                    imageSrc={user.imageSrc}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ChattingRoomList;
