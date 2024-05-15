'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountLoginId, setAccountPassword } from '../../redux/slices/accountSlice';
import { LoginForm } from '../../(pages)/forms';
import LoginPageDetail from './LoginPageDetail';
import { getGoogleLogin, getKaKaoLogin, postLogin, setIdPasswordLoginFormView } from '../../redux/slices/loginSlice';
import {
  AllSignOptionButton,
  CreateAccountButton,
  GoogleLoginButton,
  BlueHyperLink,
  KakaoLoginButton,
  LoginFormChangeButton
} from '../../UI';
import { useEffect } from 'react';
import { setIsSignup } from '../../redux/slices/signupSlice';
import useLoginSteps from '../../(pages)/hooks/useLoginSteps';

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  useLoginSteps({ trigger: isLogin });

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    dispatch<any>(postLogin());
  };

  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  useEffect(() => {
    if (isSignup) {
      alert('회원가입이 완료되었습니다. 이메일을 인증해주세요.');
      dispatch(setIsSignup(false));
    }
  }, [isSignup]);

  const error = useSelector((state: RootState) => state.loginSlice.error);
  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  return (
    <LoginPageDetail
      title={'Welcome to tea for two!'}
      loginMenu={
        <>
          <GoogleLoginButton onClick={() => dispatch<any>(getGoogleLogin())} />
          <KakaoLoginButton onClick={() => dispatch<any>(getKaKaoLogin())} />
          <h6 className="text-md mb-2 text-gray-600"> or </h6>
          <LoginFormChangeButton text="Sign with Account" onClick={() => dispatch(setIdPasswordLoginFormView(true))} />
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
