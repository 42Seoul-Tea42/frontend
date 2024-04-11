import { useSelector } from 'react-redux';

export const useValidationCheck = () => {
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const isEmailDuplicateChecked = useSelector((state: RootState) => state.accountSlice.isEmailDuplicateChecked);

  const isPasswordMatching = () => password === reEnterPassword;

  const checkEmailDuplicate = () => isEmailDuplicateChecked;

  const showAlertsForValidation = () => {
    if (!isPasswordMatching()) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    if (!checkEmailDuplicate()) {
      alert('이메일 중복체크를 완료해주세요.');
      return false;
    }

    // 여기에 추가적인 입력값의 유효성 검사 로직을 추가할 수 있습니다.

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
