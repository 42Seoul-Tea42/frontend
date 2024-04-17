import { SubmitButtonType } from '../redux/types/commonTypes';

function SubmitButton({ type, text, onClick, SVG }: SubmitButtonType) {
  return (
    <button
      type={(type as 'button' | 'submit' | 'reset') || 'submit'}
      className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {SVG}
      {text}
    </button>
  );
}

export default SubmitButton;
