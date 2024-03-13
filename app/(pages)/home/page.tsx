'use client';

import { useEffect, useState } from 'react';
import UserDetailsBar from '../components/UserDetailsBar';
import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  const [isTimePulse, setIsTimePulse] = useState<boolean>(false);

  useEffect(() => {
    setIsTimePulse(true);
    setTimeout(() => {
      setIsTimePulse(false);
    }, 4000);
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col mt-40 items-center">
        {isTimePulse ? (
          <p className="animate-pulse text-gray-800 flex text-2xl font-semibold mb-10">
            오늘의 추천 티를 확인해보세요
          </p>
        ) : (
          <p className="text-gray-600 flex text-2xl font-semibold mb-10">
            스와이프하여 추천 티를 확인해보세요
          </p>
        )}
        <div className="border rounded-xl border-gray-200">
          <ImageConverter />
          <UserDetailsBar targetId={1} name="이름" distance={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
