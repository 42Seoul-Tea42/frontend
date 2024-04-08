import { ImageSkeletonSVG } from '../../svg';

interface SkeletonProps {
  cssColor: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ cssColor }) => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div className={`${cssColor} rounded-xl`}>
          <div key={index} className="shadow-xl p-2 w-[210px] opacity-80">
            <div className="relative w-48 h-48 animate-pulse">
              <ImageSkeletonSVG />
            </div>
            <div className="w-48 h-12 animate-pulse bg-gray-200 rounded-lg border-2 p-1 pl-2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
