import React, { useEffect, useState } from 'react';
import UserProfileCarousel from './UserProfileCarousel';
import UserDetailsList from './UserDetailList';

interface UserDetailsButtonProps {
  targetId: number;
}

const UserDetailsButton: React.FC<UserDetailsButtonProps> = ({ targetId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = React.createRef<HTMLDivElement>();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const UserDetails = [
    { label: '이름', value: '이름' },
    { label: '성별', value: '성별' },
    { label: '명성', value: '명성' },
    { label: '거리', value: '거리' },
    { label: '접속', value: '접속' },
    { label: '취향', value: '취향' },
    { label: '태그', value: '태그' },
    { label: '자기소개', value: '자기소개' }
  ];

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex w-full mx-auto max-w-sm justify-end bg-white shadow-lg border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        유저 세부 정보 보기
      </button>
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={false}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
            <div className="md:grid md:grid-cols-2 gap-4">
              <UserProfileCarousel images={['/emoji/1.jpg', '/emoji/16.jpg']} />
              <div>
                <UserDetailsList userDetails={UserDetails} />
                <div className="flex justify-center mt-4">
                  <p
                    onClick={toggleModal}
                    className="mr-2 text-gray-800 hover:text-blue-600 hover:underline"
                  >
                    차단
                  </p>
                  <p className="text-gray-600"> / </p>
                  <p
                    onClick={toggleModal}
                    className="ml-2 text-gray-800 hover:text-blue-600 hover:underline"
                  >
                    신고
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsButton;

// - 사진 넘겨서 볼 수 있음 (최대 5개)
// - 성 이름
// - 거리 (나로부터 nkm 떨어짐)
// - fame rating (like수 / view수)
// - 온라인 여부 혹은 last online time
// - 성별
// - 취향
// - tags
// - 자기소개(글)

// - (link) report
//         - (옵션1) 사람이 아닌 것 같아요. -> 자동 block 처리
//         - (옵션2) 이상한 사람이에요. -> 자동 block 처리
// - (link) block
//         - block한 유저는 fancy 및 connected 자동 취소되고 앞으로 noti 및 제안 받지 않아요 (검색도 안됨
