'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { RootState } from '../../redux/store';
import { getRegisterEmail, getResendEmail } from '../../redux/slices/loginSlice';
import { CardForm, SubmitButton } from '../../UI';

function CallBack() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallBackAuth />
    </Suspense>
  );
}

function CallBackAuth() {
  const params = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = params.get('key');

  // 컴포넌트 마운트 시에 이메일 자동인증
  useEffect(() => {
    if (token) {
      dispatch<any>(getRegisterEmail(token));
    }
  }, []);

  // 이메일 재전송
  useEffect(() => {
    //todo: 이메일 재전송 검증 완료시 조건문 추가필요
    alert('검증이 완료되었습니다.');
  }, []);

  return (
    <CardForm
      onSubmit={() => dispatch<any>(getResendEmail())}
      subject="이메일 검증을 진행하는 중입니다."
      inputs={<></>}
      button={<SubmitButton text="로그인 하러하기" onClick={() => router.push('/auth/login')} />}
    />
  );
}

export default CallBack;
