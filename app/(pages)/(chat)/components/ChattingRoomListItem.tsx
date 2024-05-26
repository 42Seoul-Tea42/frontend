import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { getChattingMessages } from '../../../redux/slices/chattingSlice';

export interface ChattingRoomListItemProps {
  user: any;
}

function ChattingRoomListItem({ user }: ChattingRoomListItemProps) {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        dispatch<any>(getChattingMessages({ targetId: user.id, time: new Date().toString() }));
      }}
      className="flex items-end p-4 gap-2 border-b hover:brightness-50 bg-white"
    >
      <Image className="w-8 h-8 rounded-full" src={user.picture} width={100} height={100} alt={`${user.name} image`} />
      <div className="flex items-end">
        <p className="font-medium text-lg text-gray-900 truncate ">{user.name}</p>
        <p className="items-end ml-2 text-sm text-gray-900 ">{user.distance}</p>
      </div>
    </li>
  );
}

export default ChattingRoomListItem;
