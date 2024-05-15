import { useDispatch, useSelector } from 'react-redux';
import InputFloatingLabel from '../../UI/InputFloatingLabel';
import { RootState } from '../../redux/store';
import { setAccountEmail } from '../../redux/slices/accountSlice';

interface EmailInputProps {
  extended: () => {};
}

function EmailInput({ extended }: EmailInputProps) {
  const email = useSelector((state: RootState) => state.accountSlice.user.account.email);
  const dispatch = useDispatch();
  return (
    <>
      <InputFloatingLabel
        type="email"
        value={email}
        onChange={e => {
          dispatch(setAccountEmail(e.target.value));
          extended && extended();
        }}
        text="Email"
        autoComplete="email"
      />
    </>
  );
}

export default EmailInput;
