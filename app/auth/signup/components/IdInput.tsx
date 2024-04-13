import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setAccountId } from '../../../redux/slices/accountSlice';

const IdInput: React.FC = () => {
  const id = useSelector((state: RootState) => state.accountSlice.user.identity.id);
  const dispatch = useDispatch();

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="id"
        name="floating_id"
        value={id}
        onChange={e => dispatch(setAccountId(e.target.value))}
        id="floating_id"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_id"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Login ID
      </label>
    </div>
  );
};

export default IdInput;
