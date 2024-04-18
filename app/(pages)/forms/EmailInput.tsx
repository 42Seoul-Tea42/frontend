'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountEmail } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const EmailInput: React.FC = () => {
  const email = useSelector((state: RootState) => state.accountSlice.user.account.email);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="email"
      value={email}
      onChange={e => dispatch(setAccountEmail(e.target.value))}
      text="Email"
      autoComplete="email"
    />
  );
};

export default EmailInput;
