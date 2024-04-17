import { useState } from 'react';
import { AllSignOptionButton, LoginFormChangeButton } from '../../UI';

type LoginPageDetailProps = {
  title: string;
  loginMenu: JSX.Element;
  loginForm: JSX.Element;
  createAccount: JSX.Element;
};

function LoginPageDetail({ title, loginMenu, loginForm, createAccount }: LoginPageProps) {
  const [idPasswordFormView, setIdPasswordFormView] = useState(false);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-end ml-5 mr-5 mt-4">
          <h5 className="tracking-wide text-3xl mt-5 ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            {title}
          </h5>
        </div>
        {!idPasswordFormView ? (
          <div className="flex flex-col items-center justify-center min-h-80 gap-2">
            {loginMenu}
            <LoginFormChangeButton onClick={() => setIdPasswordFormView(true)} />
          </div>
        ) : (
          <div className="mt-10 mb-10">
            <AllSignOptionButton onClick={() => setIdPasswordFormView(false)} />
            {loginForm}
          </div>
        )}
        <div className="mb-5">{createAccount}</div>
      </div>
    </div>
  );
}

export default LoginPageDetail;
