import Image from 'next/image';
import { HamburgerSVG } from '../../../svg';
type ChattingMenuBarProps = {
  menuOpen: React.ReactNode;
};

function ChattingMenuBar({ menuOpen }: ChattingMenuBarProps) {
  return (
    <div className="flex items-center p-4 border rounded-t-xl">
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src={'/emoji/1.jpeg'} width={500} height={700} alt="User image" />
        <span className="animate bg-green-500 absolute bottom-0 w-4 h-4 border-2 border-white  rounded-full"></span>
      </div>
      <p className="grow text-xl ml-5 font-semibold text-gray-800 ">{'name'}</p>
      {menuOpen}
    </div>
  );
}

export default ChattingMenuBar;
