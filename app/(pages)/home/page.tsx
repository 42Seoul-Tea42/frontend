'use client';
import { useEffect, useState } from 'react';
import ImageConverter from './components/ImageConverter';
import HeartSVG from '../../svg/HeartSVG';
import UserDetailsModal from '../components/UserDetailsModal';

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
          <div
            id="user-distance-fancy"
            className="flex p-3 w-full mx-auto max-w-sm justify-between items-center border-t rounded-b-xl bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-end">
              <p className="font-semibold text-3xl text-gray-700">옴팡이</p>
              <p className="font-normal text-gray-700 ml-2">3km</p>
              <button onClick={() => {}} className="ml-2">
                <HeartSVG color="pink" />
              </button>
            </div>
            <UserDetailsModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
