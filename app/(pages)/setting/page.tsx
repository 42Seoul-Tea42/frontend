'use client';

import InterestsSelector from '../../auth/signup/components/InterestsSelector';
import EmojiGridList from '../../auth/upload/emoji/EmojiGridList';
import ImageUploadGrid from './components/ImageUploadGrid';
import { AgeInput, GenderRadioInput, PasswordInput, SexualPreferenceRadioInput, UserNameInput } from '../forms';
import { AccordionItems, SubmitButton } from '../../UI';
import ReEnterPassword from '../forms/ReEnterPassword';
import { useDispatch, useSelector } from 'react-redux';
import { patchUserProfile } from '../../redux/slices/loginSlice';
import { RootState } from '../../redux/store';

const Setting: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);

  const submitAccountSetting = () => {
    dispatch<any>(
      patchUserProfile({
        email: user.account.email,
        pw: user.account.password,
        last_name: user.identity.lastname,
        name: user.identity.firstname,
        taste: user.profile.sexualPreference,
        bio: user.profile.introduction,
        tags: user.profile.interests,
        prefer_emoji: emojis.map(emoji => 1 << emoji),
        age: user.ageGender.age,
        pictures: [user.photo.mainPhoto, ...user.profile.subPhotos]
      })
    );
  };

  return (
    <div className="flex min-h-screen">
      <div className="mx-auto m-40 md:grid md:grid-cols-2 md:gap-8">
        <ImageUploadGrid />
        <div className="mx-auto w-100">
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
              { title: '관심있는 이모티콘을 설정해주세요. (최대 4개)', content: <EmojiGridList /> }
            ]}
          />
          <SubmitButton text="Save" onClick={submitAccountSetting} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
