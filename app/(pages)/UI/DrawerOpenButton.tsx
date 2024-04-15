type SearchParameterDrawerButtonProps = {
  onClick: () => void;
  shape: JSX.Element;
};

const DrawerOpenButton: React.FC<SearchParameterDrawerButtonProps> = ({ onClick, shape }) => {
  return (
    <button
      className="fixed top-14 w-full h-12 flex justify-center items-center text-gray-400 hover:bg-gray-100 font-medium px-5 py-2.5 mb-2"
      type="button"
      onClick={onClick}
    >
      {shape}
    </button>
  );
};

export default DrawerOpenButton;
