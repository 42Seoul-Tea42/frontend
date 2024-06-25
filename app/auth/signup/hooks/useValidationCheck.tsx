import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const validatePassword = (password: string, reEnterPassword: string) => {
  if (password.length < 8) return '비밀번호는 8자 이상이어야 합니다.';
  if (!/[A-Z]/.test(password)) return '비밀번호는 최소한 하나의 대문자를 포함해야 합니다.';
  if (!/[a-z]/.test(password)) return '비밀번호는 최소한 하나의 소문자를 포함해야 합니다.';
  if (!/\d/.test(password)) return '비밀번호는 최소한 하나의 숫자를 포함해야 합니다.';
  if (password.includes(' ')) return '비밀번호에 공백이 포함되어 있습니다.';
  if (password !== reEnterPassword) return '재 입력한 비밀번호가 일치하지 않습니다.';
  return '';
};

export const useValidationCheck = () => {
  const loginId = useSelector((state: RootState) => state.accountSlice.user.loginId);
  const password = useSelector((state: RootState) => state.accountSlice.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const idDupCheck = useSelector((state: RootState) => state.signupSlice.validation.isIdDuplicateChecked);
  const emailDupCheck = useSelector((state: RootState) => state.signupSlice.validation.isEmailDuplicateChecked);
  const email = useSelector((state: RootState) => state.accountSlice.user.email);
  const firstname = useSelector((state: RootState) => state.accountSlice.user.firstname);
  const lastname = useSelector((state: RootState) => state.accountSlice.user.lastname);

  const [validate, setValidate] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateEmail = () => (email.length < 1 ? '이메일을 입력해주세요.' : '');

  const validateUserName = () => {
    if (firstname.length < 1) return '이름을 입력해주세요.';
    if (lastname.length < 1) return '성을 입력해주세요.';
    return '';
  };

  const validateLoginId = () => {
    if (loginId.includes(' ')) return '아이디에 공백이 포함되어 있습니다.';
    if (loginId.length < 5) return '아이디는 5자 이상이어야 합니다.';
    return '';
  };

  const validateIdDupCheck = () => (!idDupCheck ? '아이디 중복체크를 완료해주세요.' : '');

  const validateEmailDupCheck = () => (!emailDupCheck ? '이메일 중복체크를 완료해주세요.' : '');

  useEffect(() => {
    const validations = [
      { check: validateEmail, errorMsg: validateEmail() },
      { check: validateEmailDupCheck, errorMsg: validateEmailDupCheck() },
      { check: validateUserName, errorMsg: validateUserName() },
      { check: validateLoginId, errorMsg: validateLoginId() },
      { check: validateIdDupCheck, errorMsg: validateIdDupCheck() },
      { check: validatePassword, errorMsg: validatePassword(password, reEnterPassword) }
    ];

    const findError = validations.find(validation => validation.errorMsg !== '');
    if (findError) {
      setErrorMessage(findError.errorMsg);
      setValidate(false);
    } else {
      setErrorMessage('회원가입을 진행해주세요');
      setValidate(true);
    }
  }, [loginId, password, reEnterPassword, idDupCheck, emailDupCheck, email, firstname, lastname]);

  return [validate, errorMessage] as const;
};
