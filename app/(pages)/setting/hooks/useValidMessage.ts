'use client';

import { validatePassword } from '@/auth/signup/hooks/useValidationCheck';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePasswordValidMessage = () => {
  // 비밀번호 유효성 검사, 에러메시지 표시
  const password = useSelector((state: RootState) => state.accountSlice.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage(validatePassword(password, reEnterPassword));
  }, [password, reEnterPassword]);

  return errorMessage;
};

export default usePasswordValidMessage;
