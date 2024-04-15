import React, { useEffect, useRef, useState } from 'react';
import UserProfileCarousel from './ProfileDetailCarousel';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModalContents from './ProfileModalContents';
import { RootState } from '../../redux/store';

interface ProfileDetailModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  modalVisible: boolean;
}

const ProfileDetailModal: React.FC<ProfileDetailModalProps> = ({ modalRef, modalVisible }) => {
  const userId = useSelector((state: RootState) => state.profileInquirySlice.user);
  const dispatch = useDispatch();

  const blockUser = async () => {
    //  const response = await axiosInstance.post('/user/block', {
    // target_id: int
    //  })
    alert('차단되었습니다.');
  };

  const reportUser = async () => {
    // const response = await axiosInstance.post('/user/report', {
    // target_id: int
    // reason: int (Enum)
    // reason_opt: str
    // });
    alert('신고되었습니다.');
  };

  const getUserProfileDetails = async () => {
    // const response = await axiosInstance.get('/user/profileDetail', {
    // target_id: int
    // });
    // console.log(response.data);
  };

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  return (
    <>
      {modalVisible && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={false}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70"
        >
          <ProfileModalContents
            forwardedRef={modalRef}
            content={<UserProfileCarousel images={['/emoji/1.jpg', '/emoji/16.jpg']} />}
          />
        </div>
      )}
    </>
  );
};

export default ProfileDetailModal;

// - 사진 넘겨서 볼 수 있음 (최대 5개)
// - 성 이름
// - 거리 (나로부터 nkm 떨어짐)
// - rating rating (like수 / view수)
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
