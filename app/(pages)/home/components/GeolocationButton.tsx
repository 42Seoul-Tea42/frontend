import { useDispatch } from 'react-redux';
import { setLatitude, setLongitude } from '../../../store/slices/signupSlice';

const GeoLocationButton: React.FC = () => {
  const dispatch = useDispatch();
  const getLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      dispatch(setLatitude(position.coords.latitude));
      dispatch(setLongitude(position.coords.longitude));
    });
  };

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLatitude(Number(e.target.value)));
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLongitude(Number(e.target.value)));
  };

  return (
    <div className="flex max-h-12">
      <button
        onClick={getLocation}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Location
      </button>
      <span>직접입력</span>
      <input
        type="number"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleLatitudeChange}
      />
      위도
      <input
        type="number"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleLongitudeChange}
      />
      경도
    </div>
  );
};

export default GeoLocationButton;
