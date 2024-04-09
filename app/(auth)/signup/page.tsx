'use client';

import SignupForm from './components/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import { postSignupDataToServer } from '../../redux/services/accountService';
import { RootState } from '../../redux/store';

const Signup: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountService.user.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountService.reEnterPassword);
  const isEmailDuplicateChecked = useSelector((state: RootState) => state.accountService.isEmailDuplicateChecked);

  const dispatch = useDispatch();

  const validatePasswordMatch = () => password === reEnterPassword;

  const submitSignupForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    /** 이메일 중복체크 검사 */
    if (!isEmailDuplicateChecked) {
      alert('이메일 중복체크를 검사해주세요.');
      return;
    }

    /** 비밀번호 유효성 검사 */
    if (!validatePasswordMatch()) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    dispatch<any>(postSignupDataToServer());
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <SignupForm handler={submitSignupForm} />
      </div>
    </div>
  );
};

export default Signup;
