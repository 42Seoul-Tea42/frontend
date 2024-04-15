import { Key } from 'react';
import { ImageSkeletonSVG } from '../svg';

interface CardsSkeletonProps {
  style: string;
}

const CardsSkeleton: React.FC<CardsSkeletonProps> = ({ style }) => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index: Key) => (
        <div key={index}>
          <div className={`${style} rounded-xl`}>
            <div className="shadow-xl p-2 w-[210px] opacity-80">
              <div className="relative w-48 h-48 animate-pulse">
                <ImageSkeletonSVG />
              </div>
              <div className="w-48 h-12 animate-pulse bg-gray-200 rounded-lg border-2 p-1 pl-2"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardsSkeleton;
