'use client';

interface HomeNavBarButtonProps {
  buttonName: string;
  icon?: JSX.Element;
  iconStyle?: string;
  handleClick?: () => void;
}

const HomeNavBarButton: React.FC<HomeNavBarButtonProps> = ({ buttonName, icon, iconStyle, handleClick }) => {
  return (
    <div className="text-gray-500 hover:text-red-400">
      <button type="button" onClick={handleClick} className="flex gap-2">
        <div className={iconStyle}>{icon}</div>
        <h2>{buttonName}</h2>
      </button>
    </div>
  );
};

export default HomeNavBarButton;
