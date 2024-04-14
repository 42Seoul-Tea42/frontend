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
import SubmitButton from '../../auth/login/components/SubmitButton';

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
          <SubmitButton text="Save" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
