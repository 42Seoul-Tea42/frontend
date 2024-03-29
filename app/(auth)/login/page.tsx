'use client';
import { useState } from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';
import KakaoLoginButton from './components/KakaoLoginButton';
import EmailLoginButton from './components/EmailLoginButton';
import CreateAccountButton from './components/CreateAccountButton';
import DirectionSVG from '../../svg/DirectionSVG';
import EmailLoginForm from './components/EmailLoginForm';

const LoginPage: React.FC = () => {
  const [emailFormView, setEmailFormView] = useState(false);

  const toggleLoginView = () => {
    setEmailFormView(!emailFormView);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-end ml-5 mr-5 mt-5">
          <h5 className="tracking-wide text-3xl ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            Welcome to tea for two!
          </h5>
        </div>
        {!emailFormView ? (
          <>
            <div className="flex flex-col items-center justify-center min-h-80 gap-2">
              <GoogleLoginButton />
              <KakaoLoginButton />
              <h6 className="text-md mb-2 text-gray-600"> or </h6>
              <EmailLoginButton handle={toggleLoginView} />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={toggleLoginView}
              className="absolute top-1/2 left-5 w-4 h-4 hover:text-gray-400"
            >
              <DirectionSVG direction="left" size="5" />
            </button>
            <div className="mt-10 mb-10">
              <EmailLoginForm />
            </div>
          </>
        )}
        <div className="mb-5">
          <CreateAccountButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
