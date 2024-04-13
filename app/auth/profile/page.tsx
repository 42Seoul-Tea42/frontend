'use client';

import GenderRadioList from '../signup/components/GenderRadioInput';
import SexualPreferenceRadioList from '../signup/components/SexualPreferenceRadioInput';
import IntroductionForm from '../signup/components/IntroductionForm';
import TagSelector from '../signup/components/TagSelector';
import { useDispatch } from 'react-redux';

const Profile = () => {
  return (
    <form className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
        원활한 매칭을 위한 정보입니다.
      </h5>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">성별 정보</label>
      <GenderRadioList />
      <label className="block text-sm font-medium text-gray-900 dark:text-white">성적 선호</label>
      <SexualPreferenceRadioList />
      <IntroductionForm />
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
        관심있는 분야를 선택해주세요.
      </h5>
      <TagSelector />
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {}}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Profile;
