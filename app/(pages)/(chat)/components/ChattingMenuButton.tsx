import { HamburgerSVG } from '../../../svg';

type ChattingMenuButtonProps = {
  onClick: () => void;
};

function ChattingMenuButton({ onClick }: ChattingMenuButtonProps) {
  return (
    <button onClick={onClick} className="m-1 w-6 h-6">
      <HamburgerSVG />
    </button>
  );
}

export default ChattingMenuButton;
