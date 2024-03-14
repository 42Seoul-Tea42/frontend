import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UserProfileCarousel from './UserProfileCarousel';
import UserDetailsList from './UserDetailList';
import DirectionSVG from '../../svg/DirectionSVG';

const UserDetailsBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = React.createRef<HTMLDivElement>();
  const currentUserIndex = useSelector((state: RootState) => state.userProfile.currentUserIndex);
  const user = useSelector((state: RootState) => state.userProfile.profiles[currentUserIndex]);

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

  return (
    <div className="flex p-3 w-full mx-auto max-w-sm justify-between items-center border-t rounded-b-xl bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-end">
        <p className="font-semibold text-3xl text-gray-700">{user?.firstname}</p>
        <p className="font-normal text-gray-700 ml-2">{user?.distance}km</p>
      </div>
      <button onClick={toggleModal} className="flex border">
        <p>자세히 보기</p>
        <DirectionSVG direction="down" />
      </button>
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={false}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
            <div className="md:grid md:grid-cols-2 items-center gap-4">
              <UserProfileCarousel images={['/emoji/1.jpg', '/emoji/16.jpg']} />
              <div>
                <UserDetailsList />
                <div className="flex justify-center text-gray-400 mt-10">
                  <p onClick={toggleModal} className="hover:text-blue-600 hover:underline">
                    차단
                  </p>
                  <p className="ml-2 mr-2"> / </p>
                  <p onClick={toggleModal} className="hover:text-blue-600 hover:underline">
                    신고
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsBar;

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
