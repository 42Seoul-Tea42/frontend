'use client';

interface HomeNavBarButtonProps {
  router: any;
  path: string;
  buttonName: string;
  icon?: JSX.Element;
}

const HomeNavBarButton: React.FC<HomeNavBarButtonProps> = ({ router, path, buttonName, icon }) => {
  const pushPathPage = (path: string) => {
    router.push(`/home/${path}`);
  };

  return (
    <div className="text-gray-500 hover:text-red-400">
      <button type="button" onClick={() => pushPathPage(path)} className="flex gap-2">
        {icon}
        <h2>{buttonName}</h2>
      </button>
    </div>
  );
};

export default HomeNavBarButton;
