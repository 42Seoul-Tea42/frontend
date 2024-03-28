'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResetPassword from './ResetPassword';
import SettingPassword from './SettingPassword';
import ConfirmEmail from './ConfirmEmail';
import VerifyEmail from './VerifyEmail';

export enum PageType {
  VERIFY_EMAIL = 0,
  RESET_PASSWORD = 1,
  SETTING_PASSWORD = 2,
  CONFIRM_EMAIL = 3
}

const UserPage = () => {
  const [viewPage, setViewPage] = useState<JSX.Element | null>(null);

  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const key = searchParams.get('key');

  const selectPage = (value: number) => {
    switch (value) {
      case PageType.VERIFY_EMAIL:
        setViewPage(<VerifyEmail />);
        break;
      case PageType.RESET_PASSWORD:
        setViewPage(<ResetPassword />);
        break;
      case PageType.SETTING_PASSWORD:
        setViewPage(<SettingPassword />);
        break;
      case PageType.CONFIRM_EMAIL:
        setViewPage(<ConfirmEmail />);
        break;
    }
  };

  useEffect(() => {
    selectPage(parseInt(page ?? ''));
  }, []);

  return <div className="flex items-center justify-center w-full h-screen">{viewPage}</div>;
};

export default UserPage;
