'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getRegisterEmailToServer } from '../redux/slices/loginSlice';

const Auth: React.FC = () => {
  const param = useSearchParams();
  const email = useSelector((state: RootState) => state.accountSlice.user.account.email);
  const emailVerification = useSelector((state: RootState) => state.loginSlice.steps.emailVerification);
  const token = param.get('key');
  const router = useRouter();
  const dispatch = useDispatch();

  // 서치 파라미터가 있는 경우 토큰을 가져와서 로그인 처리
  // 인증이 완료된경우 로그인 화면으로 이동

  // 토큰이 없는 경우 인증메일 보내기 화면 보여주기
  // 인증메일 보내기 버튼

  useEffect(() => {
    if (token) {
      dispatch<any>(getRegisterEmailToServer(token));
    }
  }, []);

  useEffect(() => {
    if (emailVerification) {
      // 구현필요
      router.push('/auth/profile');
    }
  }, [emailVerification]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={() => {}}
        className="w-96 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="ml-5">
          <h5 className="tracking-wide text-3xl mt-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            이메일 인증 단계
          </h5>
          <p className="text-md flex justify-start text-lg"> 이메일에 첨부된 링크를 확인해주세요 </p>
          <p className="text-md flex justify-start text-lg"> {email} </p>
        </div>
      </form>
    </div>
  );
};

export default Auth;
