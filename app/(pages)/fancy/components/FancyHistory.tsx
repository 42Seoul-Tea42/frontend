'use client';
import Image from 'next/image';
import { useState } from 'react';
import FancyButton from './FancyButton';
import UserDetailsModal from '../../components/UserDetailsModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface FancyHistoryProps {
  color1: string;
  color2: string;
  color1Description: string;
  color2Description: string;
}

const FancyHistory: React.FC<FancyHistoryProps> = Data => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const profiles = useSelector((state: RootState) => state.profileService.profiles);
  // 여기에 이미지 데이터를 정의합니다.

  const images = [
    { src: '1.jpg', alt: '1' },
    { src: '2.jpg', alt: '2' },
    { src: '3.jpg', alt: '3' },
    { src: '4.jpg', alt: '4' },
    { src: '5.jpg', alt: '5' },
    { src: '6.jpg', alt: '6' }
  ];

  return (
    <div className="flex flex-wrap justify-center min-h-screen h-relative">
      <div className="mx-auto m-20">
        <div className="flex flex-col m-10">
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">{Data.color1Description}</p>
            <span
              className={`${Data.color1} w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full`}
            ></span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">{Data.color2Description}</p>
            <span
              className={`${Data.color2} w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full`}
            ></span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <div className="shadow-xl p-2 rounded-xl bg-yellow-300 w-[210px]">
              <button
                type="button"
                onClick={() => setIsModalOpen(!isModalOpen)}
                key={index}
                className="relative w-48 h-48 rounded-t-xl"
              >
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/emoji/${image.src}`}
                  alt={`Preview ${image.alt}`}
                  className="rounded-t-lg object-cover hover:brightness-75"
                  draggable="false"
                />
              </button>
              <div className="w-48 h-12 bg-white rounded-b-lg border-2 p-1 pl-2">
                <div className="flex items-end gap-4">
                  <p className="font-semibold text-2xl text-gray-700">name</p>
                  <p className="font-normal text-gray-700">3km</p>
                  <FancyButton targetId={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <UserDetailsModal targetId={1} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default FancyHistory;
