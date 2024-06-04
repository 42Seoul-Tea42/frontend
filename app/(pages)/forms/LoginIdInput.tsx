import { InputFloatingLabel } from '@/UI';
import { setAccountLoginId } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

interface LoginIdInputProps {
  extended?: () => void;
  addJSX?: JSX.Element;
}

function LoginIdInput({ extended, addJSX }: LoginIdInputProps) {
  const loginId = useSelector((state: RootState) => state.accountSlice.user.loginId);
  const dispatch = useDispatch();
  return (
    <div>
      <InputFloatingLabel
        type="text"
        value={loginId}
        onChange={e => {
          dispatch(setAccountLoginId(e.target.value));
          // 다른 로직 확장용 (id 중복체크 등)
          extended && extended();
        }}
        text="Login ID"
        autoComplete="username"
      />
      {addJSX}
    </div>
  );
}

export default LoginIdInput;
