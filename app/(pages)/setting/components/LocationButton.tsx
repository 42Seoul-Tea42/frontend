import requestUserLocation from '@/api/location';
import { SubmitButton } from '@/ui';

function LocationButton() {
  return (
    <button
      type="button"
      className="border p-2 bg-gray-700 text-white rounded-xl"
      onClick={() => requestUserLocation()}
    >
      위치 재설정
    </button>
  );
}

export default LocationButton;
