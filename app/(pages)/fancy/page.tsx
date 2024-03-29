'use client';

import FancyHistory from './components/FancyHistory';

const page: React.FC = () => {
  return (
    <FancyHistory
      color1="bg-pink-300"
      color1Description="나를 팬시한 유저"
      color2="bg-blue-300"
      color2Description="집 가고 싶다...ㅓ"
    />
  );
};

export default page;
