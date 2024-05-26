import { ButtonType } from '../redux/types';

function LoginFormChangeButton({ text, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="w-full text-white bg-[#4285F4] hover:opacity-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
    >
      {text}
    </button>
  );
}

export default LoginFormChangeButton;
