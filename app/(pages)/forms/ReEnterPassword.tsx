import { useDispatch, useSelector } from 'react-redux';
import { InputFloatingLabel } from '../../UI';
import { RootState } from '../../redux/store';
import { setAccountReEnterPassword } from '../../redux/slices/accountSlice';

function ReEnterPassword() {
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const dispatch = useDispatch();
  return (
    <div>
      <InputFloatingLabel
        type="password"
        value={reEnterPassword}
        onChange={e => dispatch(setAccountReEnterPassword(e.target.value))}
        text="Re-Enter Password"
        autoComplete="new-password"
      />
    </div>
  );
}

export default ReEnterPassword;
