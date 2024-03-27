'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResetPassword from './ResetPassword';
import SettingPassword from './SettingPassword';
import VerifyEmail from './VerifyEmail';

enum PageType {
  NONE = 0,
  RESET_PASSWORD = 1,
  SETTING_PASSWORD = 2,
  VERIFY_EMAIL = 3
}

const UserPage = () => {
  const [viewPage, setViewPage] = useState<JSX.Element | null>(null);

  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const page = searchParams.get('page');

  const selectPage = (value: number) => {
    switch (value) {
      case PageType.NONE:
        setViewPage(null);
        break;
      case PageType.RESET_PASSWORD:
        setViewPage(<ResetPassword />);
        break;
      case PageType.SETTING_PASSWORD:
        setViewPage(<SettingPassword token={key ?? ''} />);
        break;
      case PageType.VERIFY_EMAIL:
        setViewPage(<VerifyEmail token={key ?? ''} />);
        break;
    }
  };

  useEffect(() => {
    console.log(page);
    console.log(key);
    selectPage(parseInt(page ?? ''));
  }, []);

  return <div className="flex items-center justify-center w-full h-screen">{viewPage}</div>;
};

export default UserPage;
