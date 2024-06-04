import { InputFloatingLabel } from '@/UI';
import { setAccountAge } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const AgeInput: React.FC = () => {
  const age = useSelector((state: RootState) => state.accountSlice.user.ageGender.age);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="number"
      value={age}
      onChange={e => dispatch(setAccountAge(parseInt(e.target.value)))}
      text="나이"
    />
  );
};

export default AgeInput;
