'use client';

import React, { useEffect } from 'react';
import UserProfileCarousel from './ProfileDetailCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { usersInquirySetDummy } from '../../UserDummy';
import { BlueHyperLink, ProfileDetailModalContents } from '../../UI';
import { blockUser, getProfileDetail, reportUser } from '../../redux/slices/profileInquirySlice';

const ProfileDetailModal: React.FC = () => {
  const userId = useSelector((state: RootState) => state.profileInquirySlice.selectedUserId);
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.profileInquirySlice.user);

  // 받아온 유저 데이터로 변경하기
  const user = usersInquirySetDummy[1];

  // 서버에서 아이디기반으로 데이터 요청하는 코드로 변경하기
  useEffect(() => {
    dispatch<any>(getProfileDetail('1'));
  }, []);

  return (
    <ProfileDetailModalContents
      carousel={<UserProfileCarousel images={['/emoji/1.jpg', '/emoji/16.jpg']} />}
      items={[
        { title: '이름', content: user.identity.lastname + user.identity.firstname || 'test' },
        { title: '거리', content: user.another.distance || 'test' },
        { title: '좋아요', content: user.another.fancy || 'test' },
        { title: '성별', content: user.ageGender.gender || 'test' },
        { title: '등급', content: user.profile.rating || 'test' },
        { title: '관심사', content: user.profile.interests || 'test' }
      ]}
      introduciotn={{ title: '자기소개', content: user.profile.introduction || 'test' }}
      block={<BlueHyperLink text={'차단'} onClick={() => dispatch<any>(blockUser(user.identity.id))} />}
      report={<BlueHyperLink text={'신고'} onClick={() => dispatch<any>(reportUser(user.identity.id))} />}
    />
  );
};

export default ProfileDetailModal;
