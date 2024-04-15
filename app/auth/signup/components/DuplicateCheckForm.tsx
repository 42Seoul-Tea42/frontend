type DuplicateCheckFormProps = {
  onClick: () => void;
  form: JSX.Element;
};

const DuplicateCheckForm: React.FC<DuplicateCheckFormProps> = ({ onClick, form }) => {
  return (
    <div className="flex gap-4 items-start">
      {form}
      <button
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        <p className="">check</p>
      </button>
    </div>
  );
};

export default DuplicateCheckForm;
