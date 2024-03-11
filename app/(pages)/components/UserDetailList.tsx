import React from 'react';

interface UserDetails {
  label: string;
  value: string;
}

interface UserDetailsListProps {
  userDetails: UserDetails[];
}

const UserDetailsList: React.FC<UserDetailsListProps> = ({ userDetails }) => {
  return (
    <div className="grid grid-cols-2 gap-y-3 mt-5 md:gap-x-4">
      {userDetails.map((userDetail, index) => (
        <div key={index} className="mx-auto flex flex-col">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{userDetail.label}</dt>
          <dd className="text-lg font-semibold">{userDetail.value}</dd>
        </div>
      ))}
    </div>
  );
};

export default UserDetailsList;
