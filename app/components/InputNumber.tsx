import React, { useState, ReactNode } from 'react';
import PlusSVG from './PlusSVG';
import MinusSVG from './MinusSVG';

interface InputNumberProps {
  text?: string;
  viewControl?: number;
  handle?: (param: number) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ text, viewControl, handle }) => {
  const [value, setValue] = useState(viewControl || 0);

  const handleIncrement = () => {
    if (handle) handle(value);
    setValue(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (handle) handle(value);
    setValue(prev => prev - 1);
  };

  return (
    <div>
      <form className="max-w-xs mx-auto">
        <label
          htmlFor="quantity-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {text}
        </label>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={handleDecrement}
          >
            <MinusSVG />
          </button>
          <input
            type="text"
            id="quantity-input"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={viewControl || value}
            required
          />
          <button
            type="button"
            id="increment-button"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={handleIncrement}
          >
            <PlusSVG />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputNumber;
