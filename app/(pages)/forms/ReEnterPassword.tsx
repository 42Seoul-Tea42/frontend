import { useDispatch, useSelector } from 'react-redux';
import Indicator from '../components/Indicator';
import { RootState } from '@/redux/store';
import { setAccountReEnterPassword } from '@/redux/slices/account/accountSlice';
import { InputFloatingLabel } from '@/ui';

interface ReEnterPasswordProps {
  stateColor: string;
}

function ReEnterPassword({ stateColor }: ReEnterPasswordProps) {
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
      <Indicator color={stateColor} />
    </div>
  );
}

export default ReEnterPassword;
