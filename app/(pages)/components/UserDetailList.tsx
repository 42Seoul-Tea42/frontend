import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const UserDetailsList: React.FC = () => {
  const currentUserIndex = useSelector((state: RootState) => state.userProfile.currentUserIndex);
  const user = useSelector((state: RootState) => state.userProfile.profiles[currentUserIndex]);

  return <div className="grid grid-cols-2 gap-y-3 mt-5 md:gap-x-4"></div>;
};

export default UserDetailsList;
