import { useEffect } from 'react';
import DirectionSVG from '../../../svg/DirectionSVG';

const SendMessageForm = () => {
  enum ChatType {
    MAX_LENGTH = 500
  }

  useEffect(() => {}, []);

  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-3 rounded-b-xl border bg-gray-50 dark:bg-gray-700">
        <textarea
          id="chat"
          rows={2}
          maxLength={ChatType.MAX_LENGTH}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
          placeholder={`Your message... (.../${ChatType.MAX_LENGTH})`}
        ></textarea>
        <button
          type="button"
          className="flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-600"
        >
          <DirectionSVG direction="right" size="4" />
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};

export default SendMessageForm;
