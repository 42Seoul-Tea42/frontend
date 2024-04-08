import { useState, useEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import React from 'react';
interface ChattingRoomListProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChattingRoomList: React.FC<ChattingRoomListProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [users, setUsers] = useState<ChattingRoomListItemProps[]>([]);
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

    // 서버에서 데이터를 가져오는 API 요청 수행
    // axiosInstance('your_api_endpoint')
    //   .then(response => {})
    //   .then(data => setUsers(data))
    //   .catch(error => console.error('Error fetching data:', error));
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
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-gray-800 bg-opacity-50"
        >
          <div ref={modalRef} className="bg-white w-full rounded-lg">
            <ul className="overflow-hidden border">
              {users.map((user, index) => (
                <ChattingRoomListItem key={index} {...user} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ChattingRoomList;
