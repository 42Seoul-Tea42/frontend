'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import LoginPageDetail from './LoginPageDetail';
import { AllSignOptionButton, CreateAccountButton, BlueHyperLink, LoginFormChangeButton } from '@/ui';
import { useEffect } from 'react';
import NaverLoginButton from './NaverLoginButton';
import AppleLoginButton from './AppleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import GoogleLoginButton from './GoogleLoginButton';
import useLoginRedirect from '@/(pages)/hooks/useLoginRedirect';
import { RootState } from '@/redux/store';
import { setIsSignup } from '@/redux/slices/signupSlice';
import { LoginForm } from '@/(pages)/forms';
import { getGoogleLogin, getKaKaoLogin, postLogin, setIdPasswordLoginFormView } from '@/redux/slices/loginSlice';

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  useLoginRedirect();

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    dispatch<any>(postLogin());
  };

  // oauth redirect
  const link = useSelector((state: RootState) => state.loginSlice.link);
  useEffect(() => {
    if (!link) {
      return;
    }
    window.href = link;
  }, [link]);

  return (
    <LoginPageDetail
      title={'Welcome to tea for two!'}
      loginMenu={
        <>
          {/* <GoogleLoginButton onClick={() => dispatch<any>(getGoogleLogin())} />
          <AppleLoginButton onClick={() => alert('아... 애플유저시구나...')} />
          <NaverLoginButton onClick={() => alert('그런기능은 없어용 ~')} /> */}
          <KakaoLoginButton onClick={() => dispatch<any>(getKaKaoLogin())} />
          <h6 className="text-md mb-2 text-gray-600"> or </h6>
          <LoginFormChangeButton
            text="Sign in with Account"
            onClick={() => dispatch(setIdPasswordLoginFormView(true))}
          />
        </>
      }
      loginForm={
        <>
          <AllSignOptionButton onClick={() => dispatch(setIdPasswordLoginFormView(false))} />
          <LoginForm onSubmit={submitLogin} />
        </>
      }
      createAccount={<CreateAccountButton onClick={() => router.push('/auth/signup')} />}
    />
  );
}

export default Login;
