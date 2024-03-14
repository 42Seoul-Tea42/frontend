import Image from 'next/image';

export interface ChattingRoomListItemProps {
  name: string;
  distance: string;
  imageSrc: string;
}

const ChattingRoomListItem: React.FC<ChattingRoomListItemProps> = ({
  name,
  distance,
  imageSrc
}) => {
  return (
    <li className="p-2 border border-t-0 bg-white hover:bg-red-100">
      <div className="flex items-end p-2 gap-2">
        <Image
          className="w-8 h-8 rounded-full"
          src={imageSrc}
          width={100}
          height={100}
          alt={`${name} image`}
        />
        <div className="flex items-end">
          <p className="font-medium text-lg text-gray-900 truncate dark:text-white">{name}</p>
          <p className="items-end ml-2 text-sm text-gray-900 dark:text-white">{distance}</p>
        </div>
      </div>
    </li>
  );
};

export default ChattingRoomListItem;
