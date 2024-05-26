import { ButtonType } from '../redux/types';

function CreateAccountButton({ onClick }: ButtonType) {
  return (
    <div className="flex text-sm font-medium text-gray-500 gap-1">
      Not registered?
      <p onClick={onClick} className="text-blue-700 hover:underline ">
        Create account
      </p>
    </div>
  );
}

export default CreateAccountButton;
