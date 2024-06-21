'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccordionItems, SubmitButton } from '@/ui';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import EmojiGridList from '@/auth/upload/emoji/EmojiGridList';
import ReEnterPassword from '../forms/ReEnterPassword';
import ImageUploadGrid from './components/ImageUploadGrid';
import {
  AgeInput,
  EmailInput,
  GenderRadioInput,
  IntroductionInput,
  PasswordInput,
  SexualPreferenceRadioInput,
  UserNameInput
} from '../forms';
import {
  getMyAccount,
  patchUserProfile,
  setAccountEmoji,
  setAccountHateEmoji,
  setAccountHateInterests,
  setAccountInterests
} from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { submitProfile } from './submitprofile';
import SimillerRadioInput from '../forms/SimilerRadioInput';

const Setting: React.FC = () => {
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const dispatch = useDispatch();

  // 내정보 가져와서 표시
  useEffect(() => {
    dispatch<any>(getMyAccount());
  }, []);

  const updateUser = () => {
    dispatch<any>(patchUserProfile(null));
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      <div className="flex-col justify-center mx-auto m-40 md:grid md:grid-cols-2 md:gap-8">
        <div>
          <ImageUploadGrid />
          <div className="mb-10"></div>
        </div>

        <form
          className="flex flex-col justify-start items-center"
          onSubmit={e => {
            e.preventDefault();
            submitProfile(user.pictures, updateUser);
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
              {
                title: '비슷한 유저를 만나고 싶은가요?',
                content: <SimillerRadioInput />
              },
              {
                title: '나의 관심사 태그를 선택해주세요.',
                content: (
                  <InterestsSelector
                    who={'me'}
                    interests={user.interests}
                    onClick={e => dispatch(setAccountInterests(e))}
                  />
                )
              },
              {
                title: '싫어하는 관심사 태그를 선택해주세요.',
                content: (
                  <InterestsSelector
                    who={'me'}
                    interests={user.hateInterests}
                    onClick={e => dispatch(setAccountHateInterests(e))}
                  />
                )
              },
              {
                title: '선호하는 이모티콘을 설정해주세요. (최대 4개)',
                content: <EmojiGridList who={'me'} emoji={user.emoji} onClick={e => dispatch(setAccountEmoji(e))} />
              },
              {
                title: '싫어하는 이모티콘을 설정해주세요. (최대 4개)',
                content: (
                  <EmojiGridList who={'me'} emoji={user.hateEmoji} onClick={e => dispatch(setAccountHateEmoji(e))} />
                )
              },
              { title: '자기소개를 작성해주세요.', content: <IntroductionInput /> },
              { title: '이메일을 변경하세요.', content: <EmailInput /> }
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
