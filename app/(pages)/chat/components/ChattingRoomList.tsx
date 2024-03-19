import { useState, useEffect } from 'react';
import ChattingRoomListItem, { ChattingRoomListItemProps } from './ChattingRoomListItem';
import DirectionSVG from '../../../svg/DirectionSVG';
import React from 'react';

const ChattingRoomList = () => {
  const [users, setUsers] = useState<ChattingRoomListItemProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = React.createRef<HTMLDivElement>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    // fetch('your_api_endpoint')
    //   .then(response => response.json())
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
      <div className="flex w-full justify-center">
        <button
          className="fixed top-14 w-full h-12 flex justify-center items-center text-gray-400 hover:bg-gray-100 font-medium px-5 py-2.5 mb-2"
          type="button"
          onClick={openModal}
        >
          <DirectionSVG direction="down" size="6" />
        </button>
      </div>
      {isModalOpen && (
        <div
          tabIndex={-1}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
            <ul className="rounded-xl overflow-hidden border-b">
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
