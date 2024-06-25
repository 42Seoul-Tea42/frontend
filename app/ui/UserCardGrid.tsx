type UserCardGridProps = {
  items: JSX.Element;
};
const UserCardGrid: React.FC<UserCardGridProps> = ({ items }) => {
  return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-10">{items}</div>;
};

export default UserCardGrid;
