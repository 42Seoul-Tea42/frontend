type DrawerItemProps = {
  items: { title: string; content: React.ReactNode }[];
};

const DrawerItem: React.FC<DrawerItemProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="p-4 border border-gray-200">
          <h3 className="text-lg mb-5 font-medium text-gray-800">{item.title}</h3>
          {item.content}
        </div>
      ))}
    </>
  );
};

export default DrawerItem;
