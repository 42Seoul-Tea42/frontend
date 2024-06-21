'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { getKaKaoLogin } from '@/redux/slices/login/loginSlice';
import CardForm from '@/(pages)/forms/CardForm';
import useLoginRedirect from '@/(pages)/hooks/useLoginRedirect';
import { Route } from '@/redux/enum';

function KakaoPage() {
  const params = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  useLoginRedirect();

  // 컴포넌트 마운트 시에 이메일 자동인증
  useEffect(() => {
    const code = params.get('code');
    const state = params.get('state');
    if (!code || !state) {
      return;
    }
    dispatch<any>(getKaKaoLogin({ state: state, code: code }));
  }, []);

  return (
    <CardForm
      onSubmit={() => {}}
      subject="카카오 로그인 중입니다."
      inputs={<></>}
      button={
        <button
          name="skeleton"
          onClick={() => router.push(Route.LOGIN)}
          className="w-8 h-10 border-4 border-blue-300 rounded-full"
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
      <KakaoPage />
    </Suspense>
  );
}

export default CallBack;
