import { InputFloatingLabel } from '@/ui';
import { setAccountFirstname, setAccountLastname } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { InputLimitLength } from '@/redux/enum';

const UserNameInput: React.FC = () => {
  const firstname = useSelector((state: RootState) => state.accountSlice.user.firstname);
  const lastname = useSelector((state: RootState) => state.accountSlice.user.lastname);
  const dispatch = useDispatch();

  return (
    <div className="grid md:grid-cols-2 md:gap-6">
      <InputFloatingLabel
        type="text"
        value={firstname}
        onChange={e => dispatch(setAccountFirstname(e.target.value))}
        text="First name"
        maxLength={InputLimitLength.NAME}
      />
      <InputFloatingLabel
        type="text"
        value={lastname}
        onChange={e => dispatch(setAccountLastname(e.target.value))}
        text="Last name"
        autoComplete="username"
        maxLength={InputLimitLength.NAME}
      />
    </div>
  );
};

export default UserNameInput;
