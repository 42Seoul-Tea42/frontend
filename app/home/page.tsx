'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import CarouselButton from './components/CarouselButton';

const Home: React.FC = () => {
  // const clickImage = () => {
  // 상세데이터 가져오기
  // };

  // const changeNextImgage = () => {
  // 다음사람 이미지 가져오기
  // };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full h-screen">
        <div className="mx-auto mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
              <Image src="/조유리.webp" alt="face" width={500} height={500} priority={true} />
            </div>
            {/* <CarouselButton direction="left" position="start-0" />
              <CarouselButton direction="right" position="end-0" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
