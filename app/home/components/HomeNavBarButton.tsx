'use client';

interface HomeNavBarButtonProps {
  router: any;
  path: string;
  buttonName: string;
  icon: JSX.Element;
}

const HomeNavBarButton: React.FC<HomeNavBarButtonProps> = ({ router, path, buttonName, icon }) => {
  const pushPathPage = (path: string) => {
    router.push(`/home/${path}`);
  };

  return (
    <button type="button" onClick={() => pushPathPage(path)} className="flex gap-2">
      {/* 아이콘 들어가는 위치 */}
      {icon}
      <h2>{buttonName}</h2>
    </button>
  );
};

export default HomeNavBarButton;
