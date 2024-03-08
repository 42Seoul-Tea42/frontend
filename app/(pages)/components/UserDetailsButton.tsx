import React from 'react';

interface UserDetailsButtonProps {
  targetId: number;
}

const UserDetailsButton: React.FC<UserDetailsButtonProps> = ({ targetId }) => {
  const handleClick = () => {
    // 추후 컨트롤을 위한 인자로 받은 targetId를 이용하여 해당 유저의 세부 정보를 얻을 수 있습니다.
    // 추후에 이 정보를 사용하는 로직을 추가할 수 있습니다.
  };

  return <button onClick={handleClick}>유저 세부 정보 보기</button>;
};

export default UserDetailsButton;
