'use client';
import { useEffect, useState } from 'react';
import ImageConverter from './components/ImageConverter';
import HeartSVG from '../../svg/HeartSVG';
import UserDetailsModal from '../components/UserDetailsModal';
import axiosInstance from '../../utils/axios';
import FancyButton from '../fancy/components/FancyButton';
import DirectionSVG from '../../svg/DirectionSVG';
import { useCookies } from 'react-cookie';

const Home: React.FC = () => {
  const [isTimePulse, setIsTimePulse] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const homeMessageAnimation = () => {
    setIsTimePulse(true);
    setTimeout(() => {
      setIsTimePulse(false);
    }, 4000);
  };

  useEffect(() => {
    homeMessageAnimation();
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
              <p className="font-normal text-gray-700 ml-2 mr-2">3km</p>
              <FancyButton targetId={1} />
            </div>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="flex border items-center gap-2"
            >
              <p>자세히 보기</p>
              <DirectionSVG direction="down" size="4" />
            </button>
            <UserDetailsModal
              targetId={1}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
