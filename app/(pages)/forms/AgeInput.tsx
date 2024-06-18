import { InputFloatingLabel } from '@/ui';
import { setAccountAge } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const AgeInput: React.FC = () => {
  const age = useSelector((state: RootState) => state.accountSlice.user.age);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="number"
      value={age ? age.toString() : ''}
      onChange={e => dispatch(setAccountAge(parseInt(e.target.value)))}
      text="나이"
      required
    />
  );
};

export default AgeInput;
