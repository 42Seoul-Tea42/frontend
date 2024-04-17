import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountAge } from '../../redux/slices/accountSlice';
import InputFloatingLabel from '../../UI/InputFloatingLabel';

const AgeInput: React.FC = () => {
  const age = useSelector((state: RootState) => state.accountSlice.user.ageGender.age);
  const dispatch = useDispatch();

  return (
    <InputFloatingLabel
      type="number"
      value={age.toString()}
      onChange={e => dispatch(setAccountAge(parseInt(e.target.value)))}
      text="나이"
    />
  );
};

export default AgeInput;
