type ButtonProps = {
  text: string;
  onClick: () => void;
};

const SubmitButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className="flex justify-end mt-10">
      <button
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
