import { SubmitButtonType } from '../redux/types/commonTypes';

function SubmitButton({ type, text, onClick, SVG }: SubmitButtonType) {
  return (
    <button
      type={(type as 'button' | 'submit' | 'reset') || 'submit'}
      className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={onClick}
    >
      {SVG}
      {text}
    </button>
  );
}

export default SubmitButton;
