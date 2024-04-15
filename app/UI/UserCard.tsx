import FancyButton from '../(pages)/fancy/components';
import Image from 'next/image';
type UserCardProps = {
  imgSrc: string;
  alt: string;
  age: number;
  name: string;
  distance: number;
  fancyTargetId: string;
  onClick: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ imgSrc, alt, age, name, distance, fancyTargetId, onClick }) => {
  return (
    <div className="shadow-xl rounded-xl border-4 border-gray-300 w-[200px]">
      <button type="button" onClick={onClick} className="relative w-48 h-48 rounded-t-xl">
        <Image
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={imgSrc}
          alt={`Preview ${alt}`}
          className="rounded-t-lg object-cover hover:brightness-75"
          draggable="false"
        />
      </button>
      <div className="w-48 h-12 bg-white rounded-b-lg border-t-2 p-1 pl-2">
        <div className="flex items-end gap-2">
          <p className="font-semibold text-2xl text-gray-700">{name}</p>
          <p className="mr-2 font-md text-xl text-gray-500">{age}</p>
          <p className="font-thin text-base text-gray-900">{distance}km</p>
          <FancyButton targetId={fancyTargetId} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
