import { getChattingMessages, setChattingListModal, setChattingUser } from '@/redux/slices/chattingSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

export interface ChattingRoomListItemProps {
  user: any;
}

function ChattingRoomListItem({ user }: ChattingRoomListItemProps) {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        dispatch<any>(
          getChattingMessages({
            targetId: user.id,
            time: new Date().toISOString().replace('T', ' ').replace('Z', '') + '000' + '%2B0000'
          })
        );
        dispatch(setChattingUser(user));
        dispatch(setChattingListModal(false));
      }}
      className="flex items-end p-4 gap-2 border-b hover:brightness-50 bg-white"
    >
      <Image className="w-8 h-8 rounded-full" src={user.picture} width={100} height={100} alt={`${user.name} image`} />
      <div className="flex items-center">
        <p className="font-medium text-lg text-gray-900 truncate ">{user.lastname + user.firstname}</p>
        <p className="items-end ml-2 text-sm text-gray-900 ">{user.distance}km</p>
      </div>
    </li>
  );
}

export default ChattingRoomListItem;
