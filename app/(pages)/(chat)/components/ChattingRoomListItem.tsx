import Image from 'next/image';

export interface ChattingRoomListItemProps {
  name: string;
  distance: string;
  imageSrc: string;
}

function ChattingRoomListItem({ name, distance, imageSrc }: ChattingRoomListItemProps) {
  return (
    <li className="flex items-end p-4 gap-2 border-b hover:brightness-50 bg-white">
      <Image className="w-8 h-8 rounded-full" src={imageSrc} width={100} height={100} alt={`${name} image`} />
      <div className="flex items-end">
        <p className="font-medium text-lg text-gray-900 truncate dark:text-white">{name}</p>
        <p className="items-end ml-2 text-sm text-gray-900 dark:text-white">{distance}</p>
      </div>
    </li>
  );
}

export default ChattingRoomListItem;
