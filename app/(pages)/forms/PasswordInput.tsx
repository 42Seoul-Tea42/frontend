import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountPassword, setAccountReEnterPassword } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const PasswordInput: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const dispatch = useDispatch();

  return (
    <div>
      <InputFloatingLabel
        type="password"
        value={password}
        onChange={e => dispatch(setAccountPassword(e.target.value))}
        text="New Password"
        autoComplete="new-password"
      />
    </div>
  );
};

export default PasswordInput;
