'use client';

import TagSelector from '../signup/components/InterestsSelector';
import SexualPreferenceRadioInput from '../signup/components/SexualPreferenceRadioInput';
import GenderRadioInput from '../signup/components/GenderRadioInput';
import IntroductionInput from '../signup/components/IntroductionInput';
import { useRouter } from 'next/navigation';
import SubmitButton from '../login/components/SubmitButton';

const Profile = () => {
  const router = useRouter();

  const submitProfile = () => {
    //서버로 보내는 동작 수행

    // 성공했을시 useEffect 내에서 라우터로 푸시
    router.push('/auth/emoji');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
          원활한 매칭을 위해서 정보를 입력해주세요.
        </h5>
        <label className="block text-sm font-medium text-gray-900 dark:text-white">성별 정보</label>
        <GenderRadioInput />
        <label className="block text-sm font-medium text-gray-900 dark:text-white">성적 선호</label>
        <SexualPreferenceRadioInput />
        <IntroductionInput />
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
          관심있는 분야를 선택해주세요.
        </h5>
        <TagSelector />
        <SubmitButton
          text="Submit"
          onClick={() => {
            router.push('/auth/emoji');
          }}
        />
      </form>
    </div>
  );
};

export default Profile;
