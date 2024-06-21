'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import LoginPageDetail from './LoginPageDetail';
import { AllSignOptionButton, CreateAccountButton, LoginFormChangeButton } from '@/ui';
import KakaoLoginButton from './KakaoLoginButton';
import { LoginForm } from '@/(pages)/forms';
import { postLogin, setIdPasswordLoginFormView, setLoginLink } from '@/redux/slices/loginSlice';
import { v4 as uuidv4 } from 'uuid';
import useLoginRedirect from '@/(pages)/hooks/useLoginRedirect';
import { Route } from '@/redux/enum';

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  useLoginRedirect();

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    dispatch<any>(postLogin());
  };

  const generateToken = () => {
    return uuidv4();
  };

  const redirectKaKaoAuth = () => {
    dispatch(
      setLoginLink(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
          process.env.NEXT_PUBLIC_KAKAO_API_KEY
        }&redirect_uri=${
          process.env.NEXT_PUBLIC_DOMAIN ?? '' + process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI ?? ''
        }&state=${generateToken()}`
      )
    );
  };

  return (
    <LoginPageDetail
      title={'Welcome to tea for two!'}
      loginMenu={
        <>
          {/* <GoogleLoginButton onClick={() => dispatch<any>(getGoogleLogin())} />
          <AppleLoginButton onClick={() => alert('아... 애플유저시구나...')} />
          <NaverLoginButton onClick={() => alert('그런기능은 없어용 ~')} /> */}
          {/* <KakaoLoginButton onClick={() => dispatch<any>(getKaKaoLogin())} /> */}
          <KakaoLoginButton onClick={redirectKaKaoAuth} />
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
      createAccount={<CreateAccountButton onClick={() => router.push(Route.SIGNUP)} />}
    />
  );
}

export default Login;
