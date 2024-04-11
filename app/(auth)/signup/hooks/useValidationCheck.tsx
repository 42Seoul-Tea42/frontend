import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useValidationCheck = () => {
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const reEnterPassword = useSelector((state: RootState) => state.signupSlice.validation.reEnterPassword);
  const isIdDuplicateChecked = useSelector((state: RootState) => state.signupSlice.validation.isIdDuplicateChecked);
  const isEmailDuplicateChecked = useSelector(
    (state: RootState) => state.signupSlice.validation.isEmailDuplicateChecked
  );

  const isPasswordMatching = () => password === reEnterPassword;

  const checkEmailDuplicate = () => isEmailDuplicateChecked;

  const checkIdDuplicate = () => isIdDuplicateChecked;

  const checkPasswordLength = () => password.length >= 8;

  const showAlertsForValidation = () => {
    if (!isPasswordMatching()) {
      alert('비밀번호가 일치하지 않습니다.');
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

    if (!checkPasswordLength()) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      return false;
    }

    return true;
  };
  /** 입력값의 유효성 검사 */
  // 빈 값
  // 이상한 문자 & 길이

  /** 아이디 중복체크 검사 */
  // if (isIdDuplicateChecked) {
  //  alert('아이디 중복체크를 완료해주세요.');
  //  return;
  // }

  return showAlertsForValidation;
};
