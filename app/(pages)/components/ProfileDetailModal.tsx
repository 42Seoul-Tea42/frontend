'use client';

import React, { useEffect } from 'react';
import UserProfileCarousel from './ProfileDetailCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { BlueHyperLink, ProfileDetailModalContents } from '@/ui';
import { blockUser, reportUser } from '@/redux/slices/profileInquirySlice';
import { usersInquirySetDummy } from '@/UserDummy';
import { RootState } from '@/redux/store';

const ProfileDetailModal: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profileInquirySlice.user);

  return (
    <ProfileDetailModalContents
      carousel={<UserProfileCarousel images={user.pictures} />}
      items={[
        { title: '이름', content: `${user.firstname} ${user.lastname}` },
        { title: '거리', content: user.distance },
        { title: '좋아요', content: user.fancy },
        { title: '성별', content: user.gender },
        { title: '등급', content: user.rating },
        { title: '관심사', content: user.interests },
        { title: '마지막 접속시간', content: user.lastOnline }
      ]}
      introduciotn={{ title: '자기소개', content: user.introduction }}
      block={<BlueHyperLink text={'차단'} onClick={() => dispatch<any>(blockUser(user.id.toString()))} />}
      report={<BlueHyperLink text={'신고'} onClick={() => dispatch<any>(reportUser(user.id.toString()))} />}
    />
  );
};

export default ProfileDetailModal;
