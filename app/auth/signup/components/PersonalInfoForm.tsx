'use client';

import { useDispatch } from 'react-redux';
import GenderRadioList from './GenderRadioList';
import SexualPreferenceRadioList from './SexualPreferenceRadioList';
import IntroductionForm from './IntroductionForm';

interface PersonalInfoFormProps {
  onNextStep: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ onNextStep }) => {
  return (
    <form className="max-w-sm min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
        원활한 매칭을 위한 정보입니다.
      </h5>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">성별 정보</label>
      <GenderRadioList />
      <label className="block text-sm font-medium text-gray-900 dark:text-white">성적 취향</label>
      <SexualPreferenceRadioList />
      <IntroductionForm />
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

export default PersonalInfoForm;
