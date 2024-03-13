import Image from 'next/image';

export interface ChattingListItemProps {
  name: string;
  distance: string;
  imageSrc: string;
}

const ChattingListItem: React.FC<ChattingListItemProps> = ({ name, distance, imageSrc }) => {
  return (
    <li className="p-3 sm:py-4 border border-t-0 hover:bg-red-100">
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
        <div className="flex min-w-0 items-end">
          <p className="font-medium text-lg text-gray-900 truncate dark:text-white">{name}</p>
          <p className="items-center ml-2 text-sm text-gray-900 dark:text-white">{distance}</p>
        </div>
      </div>
    </li>
  );
};

export default ChattingListItem;
