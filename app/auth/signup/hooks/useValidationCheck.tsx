import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useValidationCheck = () => {
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const validation = useSelector((state: RootState) => state.signupSlice.validation);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);

  // client exception
  const checkPasswordMatching = () => user.account.password === reEnterPassword;
  const checkSpace = (input: string) => input.includes(' ');

  const checkPasswordRegex = () => {
    // 영문 대, 소문자 숫자 포함 8자 이상
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(user.account.password);
  };

  // server state
  const checkEmailDuplicate = () => validation.isEmailDuplicateChecked;
  const checkIdDuplicate = () => validation.isIdDuplicateChecked;

  const checkInputSpace = () => {
    if (
      checkSpace(user.identity.loginId) ||
      checkSpace(user.identity.firstname) ||
      checkSpace(user.identity.lastname) ||
      checkSpace(user.account.email) ||
      checkSpace(user.account.password)
    ) {
      return false;
    }
    return true;
  };

  const showAlertsForValidation = () => {
    if (!checkInputSpace()) {
      alert('공백은 입력할 수 없습니다.');
      return false;
    }

    if (!checkPasswordMatching()) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    if (!checkPasswordRegex()) {
      alert('비밀번호는 영문 대소문자와 숫자를 포함해야 합니다.');
      return false;
    }

    if (!checkEmailDuplicate()) {
      alert('이메일 중복체크를 완료해주세요.');
      return false;
    }

    if (!checkIdDuplicate()) {
      alert('아이디 중복체크를 완료해주세요.');
      return false;
    }

    return true;
  };

  return showAlertsForValidation;
};
