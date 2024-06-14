'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProfileDetailModal from '../components/ProfileDetailModal';
import UserCards from '../home/UserCards';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import { getHistoryUserList, setHistoryNoti } from '@/redux/slices/suggestionSlice';
import { RootState } from '@/redux/store';
import { MainContentsArea, ProfileDetailModalContents } from '@/ui';
import { timeConverter } from '@/utils/timeConverter';

function History() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  // const users = usersInquirySetDummy;

  useEffect(() => {
    dispatch<any>(getHistoryUserList(timeConverter({ time: 'now' })));

    //알림 제거용
    dispatch(setHistoryNoti(false));
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

export default History;
