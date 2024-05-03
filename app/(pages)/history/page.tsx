'use client';
import { useDispatch } from 'react-redux';
import { usersInquirySetDummy } from '../../UserDummy';
import { useEffect, useState } from 'react';
import { MainContentsArea, ProfileDetailModalControl } from '../../UI';
import ProfileDetailModal from '../components/ProfileDetailModal';
import UserCards from '../home/UserCards';
import { getHistoryUserList } from '../../redux/slices/historySlice';

function History() {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;

  useEffect(() => {
    dispatch<any>(getHistoryUserList(new Date()));
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

export default History;
