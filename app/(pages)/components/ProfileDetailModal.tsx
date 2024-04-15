'use client';

import React, { useEffect, useRef, useState } from 'react';
import UserProfileCarousel from './ProfileDetailCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { usersInquirySetDummy } from '../../UserDummy';
import { ProfileDetailModalContents } from '../../UI';

const ProfileDetailModal: React.FC = () => {
  const userId = useSelector((state: RootState) => state.profileInquirySlice.selectedUserId);
  // const user = useSelector((state: RootState) => state.profileInquirySlice.user);
  const user = usersInquirySetDummy[0];
  const dispatch = useDispatch();

  const blockUser = async () => {
    alert('차단되었습니다.');
  };

  const reportUser = async () => {
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
      block={
        <p onClick={() => {}} className="hover:text-blue-600 hover:underline">
          차단
        </p>
      }
      report={
        <p onClick={() => {}} className="hover:text-blue-600 hover:underline">
          신고
        </p>
      }
    />
  );
};

export default ProfileDetailModal;
