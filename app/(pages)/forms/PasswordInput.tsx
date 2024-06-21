import { InputFloatingLabel } from '@/ui';
import { setAccountPassword } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { InputLimitLength } from '@/redux/enum';

const PasswordInput: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountSlice.password);
  const dispatch = useDispatch();

  return (
    <div>
      <InputFloatingLabel
        type="password"
        value={password}
        onChange={e => dispatch(setAccountPassword(e.target.value))}
        text="Password"
        autoComplete="new-password"
        maxLength={InputLimitLength.PASSWORD}
      />
    </div>
  );
};

export default PasswordInput;
