'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { RootState } from '../redux/store';
import { getRegisterEmail, getResendEmail } from '../redux/slices/loginSlice';
import CardForm from '../(pages)/forms/CardForm';
import { SubmitButton } from '../UI';
import useLoginRouting from '../(pages)/hooks/useLoginRouting';

function Auth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}

function AuthContent() {
  // const emailVerification = useSelector((state: RootState) => state.loginSlice.steps.emailVerification);
  const isResendEmail = useSelector((state: RootState) => state.loginSlice.isResendEmail);
  const params = useSearchParams();
  const dispatch = useDispatch();
  const token = params.get('key');
  useLoginRouting({ isLogin: true });

  // 컴포넌트 마운트 시에 이메일 자동인증
  useEffect(() => {
    if (token) {
      dispatch<any>(getRegisterEmail(token));
    }
  }, []);

  // 이메일 재전송
  useEffect(() => {
    if (isResendEmail) {
      alert('이메일을 다시 보냈습니다. 확인해주세요.');
    }
  }, [isResendEmail]);

  return (
    <CardForm
      onSubmit={() => dispatch<any>(getResendEmail())}
      subject="이메일 인증 단계"
      inputs={<p> 이메일에 첨부된 링크를 확인해 주세요.</p>}
      button={<SubmitButton text="이메일 다시 받기" />}
    />
  );
}

export default Auth;
