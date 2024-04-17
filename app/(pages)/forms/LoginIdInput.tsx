import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import InputFloatingLabel from '../../UI/InputFloatingLabel';
import { setAccountLoginId } from '../../redux/slices/accountSlice';

const LoginIdInput: React.FC = () => {
  const loginId = useSelector((state: RootState) => state.accountSlice.user.identity.loginId);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="text"
      value={loginId}
      onChange={e => dispatch(setAccountLoginId(e.target.value))}
      text="Login ID"
      autoComplete="username"
    />
  );
};

export default LoginIdInput;
