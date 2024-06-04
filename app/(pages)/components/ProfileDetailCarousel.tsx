import React, { useState } from 'react';
import Image from 'next/image';
import { CarouselControlButton, CarouselPaginationButton } from '@/UI';

interface UserProfileCarouselProps {
  images: string[];
}

const ProfileDetailCarousel: React.FC<UserProfileCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSlideTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto w-96 h-96 border shadow-sm overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'} absolute w-full h-full`}
          >
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={image}
              className="object-cover w-full h-full"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
        <CarouselControlButton onClick={prevSlide} direction="left" position="start-0" />
        <CarouselControlButton onClick={nextSlide} direction="right" position="end-0" />
      </div>
      <div className="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <div key={index}>
            <CarouselPaginationButton
              key={index}
              index={index}
              activeIndex={activeIndex}
              onClick={() => handleSlideTo(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetailCarousel;
