'use client';

import InterestsSelector from '../../auth/signup/components/InterestsSelector';
import EmojiGridList from '../../auth/upload/emoji/EmojiGridList';
import ImageUploadGrid from './components/ImageUploadGrid';
import {
  AgeInput,
  GenderRadioInput,
  IntroductionInput,
  PasswordInput,
  SexualPreferenceRadioInput,
  UserNameInput
} from '../forms';
import { AccordionItems, SubmitButton } from '../../UI';
import ReEnterPassword from '../forms/ReEnterPassword';
import { useDispatch, useSelector } from 'react-redux';
import { patchUserProfile } from '../../redux/slices/loginSlice';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { getMyAccount } from '../../redux/slices/accountSlice';

const Setting: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);
  const hateEmojis = useSelector((state: RootState) => state.accountSlice.hateEmojis);

  useEffect(() => {
    // dispatch<any>(getMyAccount());
  }, []);

  const submitAccountSetting = () => {
    dispatch<any>(patchUserProfile());
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-col justify-center mx-auto m-40 md:grid md:grid-cols-2 md:gap-8">
        <div>
          <ImageUploadGrid />
          <div className="mb-10"></div>
        </div>

        <form
          className="flex flex-col items-center w-full"
          onSubmit={e => {
            e.preventDefault();
            submitAccountSetting();
          }}
        >
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
                content: (
                  <>
                    <PasswordInput />
                    <ReEnterPassword />
                  </>
                )
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
              { title: '관심있는 이모티콘을 설정해주세요. (최대 4개)', content: <EmojiGridList /> },
              { title: '자기소개를 작성해주세요.', content: <IntroductionInput /> }
            ]}
          />
          <div className="mb-5"></div>
          <SubmitButton text="Save" />
        </form>
      </div>
    </div>
  );
};

export default Setting;
