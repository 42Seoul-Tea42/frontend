import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../components/Indicator';
import { RootState } from '@/redux/store';
import { setAccountReEnterPassword } from '@/redux/slices/accountSlice';
import { InputFloatingLabel } from '@/ui';

function ReEnterPassword() {
  const password = useSelector((state: RootState) => state.accountSlice.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <InputFloatingLabel
        type="password"
        value={reEnterPassword}
        onChange={e => dispatch(setAccountReEnterPassword(e.target.value))}
        text="Re-Enter-Password"
        autoComplete="new-password"
      />
      <Indicator color={password === reEnterPassword ? 'bg-green-500' : 'bg-red-500'} />
    </div>
  );
}

export default ReEnterPassword;
