'use client';
import Image from 'next/image';
import HeartSVG from '../../svg/HeartSVG';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import FancyButton from './components/FancyButton';
import UserDetailsModal from '../components/UserDetailsModal';
import { useState } from 'react';

const Fancy = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
    <div className="flex flex-wrap justify-center h-screen">
      <div className="mx-auto m-60">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Draggable>
              <div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  key={index}
                  className="relative w-48 h-48 rounded-t-lg border border-b-0 hover:brightness-50 hover:shadow"
                >
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={`/emoji/${image.src}`}
                    alt={`Preview ${image.alt}`}
                    className="rounded-lg object-cover"
                    draggable="false"
                  />
                </button>
                <div className="w-48 h-12 rounded-b-lg border p-1 pl-2">
                  <div className="flex items-end gap-4">
                    <p className="font-semibold text-2xl text-gray-700">name</p>
                    <p className="font-normal text-gray-700">3km</p>
                    <FancyButton targetId={1} />
                  </div>
                </div>
              </div>
            </Draggable>
          ))}
        </div>
        <UserDetailsModal targetId={1} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default Fancy;
