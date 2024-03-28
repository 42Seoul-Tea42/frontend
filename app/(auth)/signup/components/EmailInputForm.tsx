import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setEmail } from '../../../redux/slices/signupSlice';
import axiosInstance from '../../../utils/axios';

// 이메일 존재여부 중복체크
// 이메일 신규/재등록 메일 요청
const EmailInputForm: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.signup.email);

  const dispatchSignupEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const checkDuplicateEmail = async () => {
    try {
      await axiosInstance.get('/user/checkEmail');
    } catch (error) {
      throw new Error('중복된 이메일입니다.');
    }
  };

  const registerVeirfyEmail = async () => {
    try {
      const response = await axiosInstance.post('/user/changeEmail', { email: email });
      if (response && response.status === 200) {
        alert('이메일을 확인해주세요.');
      }
    } catch (error) {
      throw new Error('이메일 전송 실패했습니다. 다시 시도해주세요.');
    }
  };

  const verify = async () => {
    try {
      await checkDuplicateEmail();
      await registerVeirfyEmail();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative flex z-0 w-full group mb-5 mt-5 gap-4">
      <input
        type="email"
        value={email}
        onChange={dispatchSignupEmail}
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
        placeholder=" "
      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        name@company.com
      </label>
      <button
        type="button"
        className="text-white max-w-24 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={verify}
      >
        인증하기
      </button>
    </div>
  );
};

export default EmailInputForm;
