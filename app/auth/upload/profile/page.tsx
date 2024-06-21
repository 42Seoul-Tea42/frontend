'use client';

import { AgeInput, GenderRadioInput, IntroductionInput, SexualPreferenceRadioInput } from '@/(pages)/forms';
import ImageUploadGrid from '@/(pages)/setting/components/ImageUploadGrid';
import { SubmitButton } from '@/ui';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import { patchUserProfile, setAccountInterests } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import useLoginRedirect from '@/(pages)/hooks/useLoginRedirect';
import { submitProfile } from '@/(pages)/setting/submitprofile';
import SimillerRadioInput from '@/(pages)/forms/SimilerRadioInput';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.accountSlice.user);
  useLoginRedirect();

  const updateUser = () => {
    dispatch<any>(patchUserProfile(null));
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <h2 className="absolute top-40 text-3xl text-gray-700 font-bold"> 최초 1회 설정이 필요합니다. </h2>
      <div className="max-w-md h-3/5 overflow-hidden hover:overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow space-y-5">
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
          프로필 사진을 설정해주세요.
        </h5>
        <ImageUploadGrid />
        <form
          onSubmit={event => {
            event.preventDefault();
            submitProfile(user.pictures, updateUser);
          }}
        >
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-lime-500/50">나이</h5>
          <AgeInput />
          <h5 className="block text-sm font-medium text-gray-900">성별 정보</h5>
          <GenderRadioInput />
          <h5 className="block text-sm font-medium text-gray-900">성적 선호</h5>
          <SexualPreferenceRadioInput />
          <h5 className="block text-sm font-medium text-gray-900">비슷한 유저를 만나고 싶은가요?</h5>
          <SimillerRadioInput />
          <IntroductionInput />
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
            관심있는 분야를 선택해주세요.
          </h5>
          <InterestsSelector who={'me'} onClick={e => dispatch(setAccountInterests(e))} interests={user.interests} />
          <div className="mb-5"></div>
          <SubmitButton text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
