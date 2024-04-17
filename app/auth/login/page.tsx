'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountLoginId, setAccountPassword } from '../../redux/slices/accountSlice';
import { postGoogleLoginToServer, postKakaoLoginToServer, postLoginToServer } from '../../redux/slices/loginSlice';
import { AllSignOptionButton, CreateAccountButton, GoogleLoginButton, HyperBlueLink, KakaoLoginButton } from '../../UI';
import { LoginForm } from '../../(pages)/forms';
import LoginPageDetail from './LoginPageDetail';

const LoginPage: React.FC = () => {
  const authSteps = useSelector((state: RootState) => state.loginSlice.steps);
  const isLogin = useSelector((state: RootState) => state.loginSlice.isLogin);

  const router = useRouter();
  const dispatch = useDispatch();

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    dispatch<any>(postLoginToServer());

    // for testing router.push('/home');
    router.push('home');
  };

  useEffect(() => {
    if (isLogin === false) return;
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
    <LoginPageDetail
      title={'Welcome to tea for two!'}
      loginMenu={
        <>
          <GoogleLoginButton onClick={() => dispatch<any>(postGoogleLoginToServer())} />
          <KakaoLoginButton onClick={() => dispatch<any>(postKakaoLoginToServer())} />
          <h6 className="text-md mb-2 text-gray-600"> or </h6>
        </>
      }
      loginForm={
        <>
          <LoginForm
            setId={e => dispatch(setAccountLoginId(e.target.value))}
            setPassword={e => dispatch(setAccountPassword(e.target.value))}
            lostPassword={<HyperBlueLink text={'Lost Password?'} onClick={() => {}} />}
            onSubmit={submitLogin}
          />
        </>
      }
      createAccount={<CreateAccountButton onClick={() => router.push('/auth/signup')} />}
    />
  );
};

export default LoginPage;
