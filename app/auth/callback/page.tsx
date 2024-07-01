'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import CardForm from '@/(pages)/forms/CardForm';
import { Route } from '@/redux/enum';
import { getResendEmail, getVerifyEmail, postLogin } from '@/redux/slices/login/loginExtraReducers';
import { RootState } from '@/redux/store';

function CallBackAuth() {
  const params = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = params.get('key');

  // 컴포넌트 마운트 시에 이메일 자동인증
  useEffect(() => {
    if (token) {
      dispatch<any>(getVerifyEmail(token));
    }
  }, []);

  const emailCheck = useSelector((state: RootState) => state.loginSlice.steps.emailCheck);
  useEffect(() => {
    if (emailCheck) {
      router.push(Route.LOGIN); 
    }
  }, [emailCheck]);

  const error = useSelector((state: RootState) => state.loginSlice.error);

  return (
    <CardForm
      onSubmit={() => dispatch<any>(getResendEmail())}
      subject="이메일 인증을 진행하는 중입니다."
      inputs={<p className="text-red-500">{error}</p>}
      button={
        <button
          name="skeleton"
          type="button"
          onClick={() => router.push(Route.LOGIN)}
          className="w-relative hover:brightness-75 h-10 p-2 border border-green-300 bg-green-300 rounded-full"
        >
          <span className="flex font-bold text-gray-700"> 로그인 하러가기</span>
        </button>
      }
    />
  );
}

function CallBack() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallBackAuth />
    </Suspense>
  );
}

export default CallBack;
