import FancyButton from '../fancy/components';
import Image from 'next/image';

type SuggestionCardProps = {
  imgSrc: string;
  alt: string;
  name: string;
  distance: number;
  fancyTargetId: string;
};

const SuggestionCard: React.FC<SuggestionCardProps> = ({ imgSrc, alt, name, distance, fancyTargetId }) => {
  return (
    <div className="shadow-xl p-2 rounded-xl bg-yellow-300 w-[210px]">
      <button type="button" className="relative w-48 h-48 rounded-t-xl">
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
      <div className="w-48 h-12 bg-white rounded-b-lg border-2 p-1 pl-2">
        <div className="flex items-end gap-4">
          <p className="font-semibold text-2xl text-gray-700">{name}</p>
          <p className="font-normal text-gray-700">{distance}km</p>
          <FancyButton targetId={fancyTargetId} />
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
