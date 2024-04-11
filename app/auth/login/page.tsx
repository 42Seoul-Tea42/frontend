'use client';
import { useEffect, useState } from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';
import KakaoLoginButton from './components/KakaoLoginButton';
import EmailLoginButton from './components/EmailLoginButton';
import CreateAccountButton from './components/CreateAccountButton';
import EmailLoginForm from './components/EmailLoginForm';
import { useRouter } from 'next/navigation';
import { setAccountId, setAccountPassword } from '../../redux/slices/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import AllSignOptionButton from './components/AllSignOptionButton';
import { RootState } from '../../redux/store';
import { postLoginToServer } from '../../redux/slices/loginSlice';

const LoginPage: React.FC = () => {
  const [emailFormView, setEmailFormView] = useState(false);
  const authSteps = useSelector((state: RootState) => state.loginSlice.steps);
  const isLogin = useSelector((state: RootState) => state.loginSlice.isLogin);
  const router = useRouter();
  const dispatch = useDispatch();

  const toggleLoginView = () => {
    setEmailFormView(!emailFormView);
  };

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    dispatch<any>(postLoginToServer());
  };

  useEffect(() => {
    if (authSteps.emailVerification === false) {
      router.push('/auth');
    } else if (authSteps.profileCreation === false) {
      router.push('/auth/profile');
    } else if (authSteps.emojiSelection === false) {
      router.push('/auth/emoji');
    } else {
      router.push('/home');
    }
  }, [isLogin]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-end ml-5 mr-5 mt-4">
          <h5 className="tracking-wide text-3xl mt-5 ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            Welcome to tea for two!
          </h5>
        </div>
        {!emailFormView ? (
          <>
            <div className="flex flex-col items-center justify-center min-h-80 gap-2">
              <GoogleLoginButton />
              <KakaoLoginButton />
              <h6 className="text-md mb-2 text-gray-600"> or </h6>
              <EmailLoginButton onClick={toggleLoginView} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 mb-10">
              <AllSignOptionButton onClick={toggleLoginView} />
              <EmailLoginForm
                setId={e => dispatch(setAccountId(e.target.value))}
                setPassword={e => dispatch(setAccountPassword(e.target.value))}
                lostPassword={() => router.push('/auth')}
                onSubmit={submitLogin}
              />
            </div>
          </>
        )}
        <div className="mb-5">
          <CreateAccountButton onClick={() => router.push('/auth/signup')} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
