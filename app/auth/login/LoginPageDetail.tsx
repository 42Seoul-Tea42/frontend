import LoadingSpinner from '@/(pages)/components/LoadingSpinner';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type LoginPageDetailProps = {
  title: string;
  loginMenu: JSX.Element;
  loginForm: JSX.Element;
  createAccount: JSX.Element;
};

function LoginPageDetail({ title, loginMenu, loginForm, createAccount }: LoginPageDetailProps) {
  const idPasswordFormView = useSelector((state: RootState) => state.loginSlice.idPasswordLoginFormView);
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-green-50">
        <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <div className="flex items-end ml-5 mr-5 mt-4">
            <h5 className="tracking-wide text-3xl mt-5 ml-5 min-w-80 font-semibold text-gray-900 flex-grow">{title}</h5>
          </div>
          {!idPasswordFormView ? (
            <div className="flex flex-col items-center justify-center min-h-80 gap-2">{loginMenu}</div>
          ) : (
            <div className="mt-10 mb-5">{loginForm}</div>
          )}
          <div className="mb-5">{createAccount}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageDetail;
