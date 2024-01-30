'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EmailLoginForm from './EmailLoginForm';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import EmailLoginButton from './EmailLoginButton';

const LoginPage: React.FC = () => {
  const emailFormView = useSelector((state: RootState) => state.loginViewer.email);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Welcome to tea for two !</h5>
        {!emailFormView ? (
          <>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <EmailLoginButton />
          </>
        ) : (
          <EmailLoginForm />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
