'use client';

import { useSearchParams } from 'next/navigation';
import EmailVerificationForm from './EmailVerificationForm';
import { useDispatch } from 'react-redux';

const page: React.FC = () => {
  const searchParams = useSearchParams();
  const verifyToken = searchParams.get('key');
  const dispatch = useDispatch();

  const submitEmailVerificationForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 중복체크

    // 이메일 인증 요청
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <EmailVerificationForm handler={submitEmailVerificationForm} />
    </div>
  );
};

export default page;
