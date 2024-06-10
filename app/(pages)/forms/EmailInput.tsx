import { InputFloatingLabel } from '@/UI';
import { setAccountEmail } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

interface EmailInputProps {
  extended?: () => void;
  addJSX?: JSX.Element;
}

function EmailInput({ extended, addJSX }: EmailInputProps) {
  const email = useSelector((state: RootState) => state.accountSlice.user.email);
  const dispatch = useDispatch();
  return (
    <div className="flex">
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
      {addJSX}
    </div>
  );
}

export default EmailInput;
