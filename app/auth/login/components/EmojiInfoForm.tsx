import EmojiGridList from './EmojiGridList';

const EmojiInfoForm: React.FC = () => {
  return (
    <form className="max-w-sm min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
        선호하는 이모티콘을 골라주세요.
      </h5>
      <EmojiGridList />
      <div className="flex justify-end mt-10">
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {}}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default EmojiInfoForm;
