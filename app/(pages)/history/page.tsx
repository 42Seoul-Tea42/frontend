'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import UserCards from '../home/UserCards';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import { setVisitorNoti } from '@/redux/slices/suggestion/suggestionSlice';
import { RootState } from '@/redux/store';
import { MainContentsArea, ProfileDetailModalContents } from '@/ui';
import { timeConverter } from '@/utils/timeConverter';
import { getHistoryUserList } from '@/redux/slices/suggestion/suggestionExtraReducers';

function History() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  // const users = usersInquirySetDummy;

  useEffect(() => {
    dispatch<any>(getHistoryUserList(timeConverter({ time: 'now' })));

    //알림 제거용
    dispatch(setVisitorNoti(false));
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
