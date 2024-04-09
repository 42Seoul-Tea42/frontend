'use client';

import { useSearchParams } from 'next/navigation';
import EmailVerificationForm from './EmailVerificationForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { postCheckDuplicateEmailToServer } from '../../redux/services/authentificationService';

const page: React.FC = () => {
  const searchParams = useSearchParams();
  const verifyToken = searchParams.get('key');
  const dispatch = useDispatch();

  useEffect(() => {
    // 이메일 진행이 완료됐으면 메인으로 이동
  }, []);

  const submitEmailVerificationForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 이메일 인증 요청
    // dispatch<any>();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <EmailVerificationForm handler={submitEmailVerificationForm} />
    </div>
  );
};

export default page;
