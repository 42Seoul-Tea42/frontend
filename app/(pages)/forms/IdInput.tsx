import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountId } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const IdInput: React.FC = () => {
  const id = useSelector((state: RootState) => state.accountSlice.user.identity.id);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel type="id" value={id} onChange={e => dispatch(setAccountId(e.target.value))} text="Login ID" />
  );
};

export default IdInput;
