import { HamburgerSVG } from '../../../svg';

type ChattingMenuButtonProps = {
  onClick: () => void;
};

function ChattingMenuButton({ onClick }: ChattingMenuButtonProps) {
  return (
    <button onClick={onClick} className="border-2 p-1 rounded-lg flex justify-center items-center hover:bg-gray-200">
      <HamburgerSVG />
    </button>
  );
}

export default ChattingMenuButton;
