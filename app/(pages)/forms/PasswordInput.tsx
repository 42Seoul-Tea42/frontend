import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountPassword, setAccountReEnterPassword } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const PasswordInput: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const dispatch = useDispatch();

  return (
    <div>
      <InputFloatingLabel
        type="password"
        value={password}
        onChange={e => dispatch(setAccountPassword(e.target.value))}
        text="New Password"
      />
      <InputFloatingLabel
        type="password"
        value={reEnterPassword}
        onChange={e => dispatch(setAccountReEnterPassword(e.target.value))}
        text="Re-Enter Password"
      />
    </div>
  );
};

export default PasswordInput;
