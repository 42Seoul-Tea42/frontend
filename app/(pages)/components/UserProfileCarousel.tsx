import React, { useState } from 'react';
import Image from 'next/image';
import DirectionSVG from '../../svg/DirectionSVG';

interface UserProfileCarouselProps {
  images: string[];
}

const UserProfileCarousel: React.FC<UserProfileCarouselProps> = ({ images }) => {
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
            className={`duration-700 ease-in-out ${
              index === activeIndex ? 'block' : 'hidden'
            } absolute w-full h-full`}
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
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <DirectionSVG direction="left" size="8" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <DirectionSVG direction="right" size="8" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default UserProfileCarousel;
