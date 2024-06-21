'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import { getFancyUsers, setFancyNoti } from '@/redux/slices/suggestion/suggestionSlice';
import { MainContentsArea, ProfileDetailModalContents } from '@/ui';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import UserCards from '../home/UserCards';
import { timeConverter } from '@/utils/timeConverter';

function Fancy() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.suggestionSlice.users);

  useEffect(() => {
    dispatch<any>(getFancyUsers(timeConverter({ time: 'now' })));

    // 알림 제거용
    dispatch(setFancyNoti(false));
  }, []);

  return (
    <MainContentsArea
      contents={
        <>
          {/* profile inquiry service */}
          <ProfileDetailModalControl profileDetail={<ProfileDetailModalContents />} />
          {/* suggestion user service */}
          <UserCards users={users} />
        </>
      }
    />
  );
}

export default Fancy;
