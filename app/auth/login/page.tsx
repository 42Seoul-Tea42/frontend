'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EmailLoginForm from './components/EmailLoginForm';
import GoogleLoginButton from './components/GoogleLoginButton';
import KakaoLoginButton from './components/KakaoLoginButton';
import EmailLoginButton from './components/EmailLoginButton';
import CreateAccountButton from './components/CreateAccountButton';
import ToggleEmailFormButton from './components/ToggleEmailFormButton';

const LoginPage: React.FC = () => {
  const emailFormView = useSelector(
    (state: RootState) => state.loginViewer.email
  );

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="max-w-md w-2/5 h-2/6 min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-end gap-3">
          {emailFormView && (
            <div className="left-0">
              <ToggleEmailFormButton />
            </div>
          )}
          <h5 className="text-3xl font-semibold text-gray-900 dark:text-white flex-grow">
            Welcome to tea for two!
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center min-h-80 gap-2">
          {!emailFormView ? (
            <>
              <GoogleLoginButton />
              <KakaoLoginButton />
              <h6 className="text-md mb-2 text-gray-600"> or </h6>
              <EmailLoginButton />
            </>
          ) : (
            <>
              <EmailLoginForm />
            </>
          )}
        </div>
        <CreateAccountButton />
      </div>
    </div>
  );
};

export default LoginPage;
