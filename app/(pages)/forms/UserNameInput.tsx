import { InputFloatingLabel } from '@/UI';
import { setAccountFirstname, setAccountLastname } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

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
      />
      <InputFloatingLabel
        type="text"
        value={lastname}
        onChange={e => dispatch(setAccountLastname(e.target.value))}
        text="Last name"
        autoComplete="username"
      />
    </div>
  );
};

export default UserNameInput;
