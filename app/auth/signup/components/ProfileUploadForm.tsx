import React from 'react';
import TagSelector from './TagSelector';
import ImageUploadForm from './ImageUploadForm';

interface ProfileUploadFormProps {
  onNextStep: () => void;
}

const ProfileUploadForm: React.FC<ProfileUploadFormProps> = ({ onNextStep }) => {
  return (
    <form className="max-w-sm min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-purple-500/50">
        다른 사람에게 보이는 프로필 정보입니다.
      </h5>
      <ImageUploadForm />
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
        관심있는 분야를 선택해주세요.
      </h5>
      <TagSelector />
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onNextStep}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ProfileUploadForm;
