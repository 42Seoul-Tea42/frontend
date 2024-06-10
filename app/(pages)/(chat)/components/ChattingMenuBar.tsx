import { RootState } from '@/redux/store';
import { HamburgerSVG } from '@/svg';
import Image from 'next/image';
import { useSelector } from 'react-redux';
type ChattingMenuBarProps = {
  setIsModalOpen: any;
};

function ChattingMenuBar({ setIsModalOpen }: ChattingMenuBarProps) {
  const users = useSelector((state: RootState) => state.chattingSlice.users);
  const selected = useSelector((state: RootState) => state.chattingSlice.selected);
  return (
    <div className="flex items-center p-4 border rounded-t-xl">
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src={'emoji/1.png'} width={500} height={700} alt="User image" />
        <span className="animate bg-green-500 absolute bottom-0 w-4 h-4 border-2 border-white  rounded-full"></span>
      </div>
      <p className="grow text-xl ml-5 font-semibold text-gray-800 ">{'name'}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="border-2 p-1 rounded-lg flex justify-center items-center hover:bg-gray-200"
      >
        <HamburgerSVG />
      </button>
    </div>
  );
}

export default ChattingMenuBar;
