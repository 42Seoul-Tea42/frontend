'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import CardForm from '@/(pages)/forms/CardForm';
import { Route } from '@/redux/enum';
import { getResendEmail, getVerifyEmail } from '@/redux/slices/login/loginExtraReducers';

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

  return (
    <CardForm
      onSubmit={() => dispatch<any>(getResendEmail())}
      subject="이메일 인증을 진행하는 중입니다."
      inputs={<></>}
      button={
        <button
          name="skeleton"
          onClick={() => router.push(Route.LOGIN)}
          className="w-8 h-10 border-4 border-blue-300 rounded-full animate-spin"
        >
          로그인 하러가기
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
