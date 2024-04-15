import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import InputFloatingLabel from '../../UI/InputFloatingLabel';
import { setAccountLoginId } from '../../redux/slices/accountSlice';

const LoginIdInput: React.FC = () => {
  const id = useSelector((state: RootState) => state.accountSlice.user.identity.id);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="id"
      value={id}
      onChange={e => dispatch(setAccountLoginId(e.target.value))}
      text="Login ID"
    />
  );
};

export default LoginIdInput;
