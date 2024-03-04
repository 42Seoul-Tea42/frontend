import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import TagSelector from './TagSelector';
import { useDispatch } from 'react-redux';
import { setCurrentStep, SignupSteps } from '../../../store/slices/signupSlice';

const ProfileUploadForm: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string>('');
  const dispatch = useDispatch();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result && typeof result === 'string') {
          setPreviewImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = () => {
    dispatch(setCurrentStep(SignupSteps.EMOJI_INFO));
  };

  return (
    <form className="max-w-sm min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-purple-500/50">
        다른 사람에게 보이는 프로필 정보입니다.
      </h5>
      <div className="flex flex-col items-center justify-center mb-5">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {previewImage ? (
            <Image
              src={previewImage}
              alt="Preview"
              width={500}
              height={500}
              className="max-w-full max-h-80 rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
        관심있는 분야를 선택해주세요.
      </h5>
      <TagSelector />
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ProfileUploadForm;
