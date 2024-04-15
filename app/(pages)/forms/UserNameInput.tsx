import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountFirstname, setAccountLastname } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const UserNameInput: React.FC = () => {
  const firstname = useSelector((state: RootState) => state.accountSlice.user.identity.firstname);
  const lastname = useSelector((state: RootState) => state.accountSlice.user.identity.lastname);
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
      />
    </div>
  );
};

export default UserNameInput;
