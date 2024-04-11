'use client';
import { useState } from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';
import KakaoLoginButton from './components/KakaoLoginButton';
import EmailLoginButton from './components/EmailLoginButton';
import CreateAccountButton from './components/CreateAccountButton';
import EmailLoginForm from './components/EmailLoginForm';
import { DirectionSVG } from '../../svg';

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
            <div className="mt-10 mb-10">
              <button
                onClick={toggleLoginView}
                className="absolute flex top-1 left-1 w-4 h-4 text-blue-700 hover:underline"
              >
                <div className="flex items-start">
                  <div className="mt-1 mr-1">
                    <DirectionSVG direction="left" size="3" />
                  </div>
                  <p className="text-light text-sm whitespace-nowrap size-0"> all sign option</p>
                </div>
              </button>
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
