import { setChattingListModal } from '@/redux/slices/chattingSlice';
import { RootState } from '@/redux/store';
import { HamburgerSVG } from '@/svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
function ChattingMenuBar() {
  const currentUser = useSelector((state: RootState) => state.chattingSlice.currentUser);
  const dispatch = useDispatch();
  return (
    <div className="flex items-end p-4 border rounded-t-xl">
      <Image className="w-10 h-10 rounded-xl" src={currentUser.picture} width={500} height={700} alt="User image" />{' '}
      <span className="animate bg-green-500 w-4 h-4 border-2 border-white rounded-full"></span>
      <p className="grow text-xl ml-2 font-semibold text-gray-800 ">{currentUser.firstname}</p>
      <button
        onClick={() => dispatch(setChattingListModal(true))}
        className="border-2 p-1 rounded-lg flex justify-center items-center hover:bg-gray-200"
      >
        <HamburgerSVG />
      </button>
    </div>
  );
}

export default ChattingMenuBar;
