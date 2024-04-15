type ColorPickerUserCardProps = {
  style: string;
  userCard: React.ReactNode;
};

const ColorPickerUserCard: React.FC<ColorPickerUserCardProps> = ({ style, userCard }) => {
  return <div className={style}>{userCard}</div>;
};

export default ColorPickerUserCard;
