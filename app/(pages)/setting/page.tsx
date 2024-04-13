'use client';

import GenderRadioList from '../../auth/signup/components/GenderRadioInput';
import SexualPreferenceRadioList from '../../auth/signup/components/SexualPreferenceRadioInput';
import EmojiGridList from '../../auth/login/components/EmojiGridList';
import PasswordInput from '../../auth/signup/components/PasswordInput';
import UserNameInput from '../../auth/signup/components/UserNameInput';
import AccordionItems from './components/AccordionItems';
import ImageUploadGrid from './components/ImageUploadGrid';
import AgeInput from '../../auth/signup/components/AgeInput';
import InterestsSelector from '../../auth/signup/components/InterestsSelector';

const Setting: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="mx-auto m-40 md:grid md:grid-cols-2 md:gap-8">
        <ImageUploadGrid />
        <div className="mx-auto w-96">
          <AccordionItems
            items={[
              {
                title: '이름변경',
                content: <UserNameInput />
              },
              {
                title: '나이 재설정',
                content: <AgeInput />
              },
              {
                title: '비밀번호 재설정',
                content: <PasswordInput />
              },
              {
                title: '나의 성별 선택',
                content: <GenderRadioList />
              },
              {
                title: '성적 취향 선택',
                content: <SexualPreferenceRadioList />
              },
              { title: '나의 관심사 태그를 선택해주세요.', content: <InterestsSelector /> },
              { title: '관심있는 이모티콘을 설정해주세요.', content: <EmojiGridList /> }
            ]}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-10 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {}}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
