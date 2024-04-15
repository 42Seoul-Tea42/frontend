'use client';

import SubmitButton from '../UI/SubmitButton';
import EmojiGridList from '../auth/upload/emoji/EmojiGridList';
import AgeInput from '../forms/AgeInput';
import GenderRadioInput from '../forms/GenderRadioInput';
import InterestsSelector from '../auth/signup/components/InterestsSelector';
import PasswordInput from '../forms/PasswordInput';
import SexualPreferenceRadioInput from '../forms/SexualPreferenceRadioInput';
import UserNameInput from '../forms/UserNameInput';
import AccordionItems from './components/AccordionItems';
import ImageUploadGrid from './components/ImageUploadGrid';

const Setting: React.FC = () => {
  const submitAccountSetting = () => {
    console.log('save');
  };
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
                content: <GenderRadioInput />
              },
              {
                title: '성적 취향 선택',
                content: <SexualPreferenceRadioInput />
              },
              { title: '나의 관심사 태그를 선택해주세요.', content: <InterestsSelector /> },
              { title: '관심있는 이모티콘을 설정해주세요.', content: <EmojiGridList /> }
            ]}
          />
          <SubmitButton text="Save" onClick={submitAccountSetting} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
