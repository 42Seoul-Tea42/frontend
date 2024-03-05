import Image from 'next/image';

export interface ChattingListItemProps {
  name: string;
  distance: string;
  imageSrc: string;
}

const ChattingListItem: React.FC<ChattingListItemProps> = ({ name, distance, imageSrc }) => {
  return (
    <li className="p-3 sm:py-4 border hover:bg-red-100">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <Image
            className="w-8 h-8 rounded-full"
            src={imageSrc}
            width={100}
            height={100}
            alt={`${name} image`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">{}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {distance}
        </div>
      </div>
    </li>
  );
};

export default ChattingListItem;
