'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { getFancyUserList, setFancyNoti } from '@/redux/slices/fancySlice';
import { MainContentsArea } from '@/UI';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import ProfileDetailModal from '../components/ProfileDetailModal';
import UserCards from '../home/UserCards';

function Fancy() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  // const users = usersInquirySetDummy;

  useEffect(() => {
    dispatch<any>(getFancyUserList(new Date()));

    // 알림 제거용
    dispatch(setFancyNoti(false));
  }, []);

  return (
    <MainContentsArea
      contents={
        <>
          {/* profile inquiry service */}
          <ProfileDetailModalControl profileDetail={<ProfileDetailModal />} />

          {/* suggestion user service */}
          <UserCards users={users} />
        </>
      }
    />
  );
}

export default Fancy;
