import { InputFloatingLabel } from '@/UI';
import { setAccountPassword } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const PasswordInput: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountSlice.password);
  const dispatch = useDispatch();

  return (
    <div>
      <InputFloatingLabel
        type="password"
        value={password}
        onChange={e => dispatch(setAccountPassword(e.target.value))}
        text="New-Password"
        autoComplete="new-password"
      />
    </div>
  );
};

export default PasswordInput;
