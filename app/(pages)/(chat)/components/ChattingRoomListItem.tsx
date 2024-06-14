import {
  clearMessages,
  getChattingMessages,
  setChattingListModal,
  setChattingUser,
  setScrollDirection
} from '@/redux/slices/chattingSlice';
import { RootState } from '@/redux/store';
import { timeConverter } from '@/utils/timeConverter';
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
            time: timeConverter({ time: 'now' })
          })
        );
        dispatch(clearMessages());
        dispatch(setChattingUser(user));
        dispatch(setChattingListModal(false));
        dispatch(setScrollDirection('down'));
      }}
      className="flex items-end p-4 gap-2 border-b hover:brightness-75 bg-green-200"
    >
      <Image className="w-8 h-8 rounded-full" src={user.picture} width={100} height={100} alt={`${user.name} image`} />
      <div className="flex items-center">
        <p className="font-medium text-lg text-gray-900 truncate ">{user.firstname}</p>{' '}
        <p className="items-end ml-2 text-sm text-gray-900 ">{user.distance}km</p>
      </div>
    </li>
  );
}

export default ChattingRoomListItem;
