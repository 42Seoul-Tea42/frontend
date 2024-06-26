'use client';

import { AgeInput, GenderRadioInput, IntroductionInput, SexualPreferenceRadioInput } from '@/(pages)/forms';
import ImageUploadGrid from '@/(pages)/setting/components/ImageUploadGrid';
import { SubmitButton } from '@/ui';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import { setAccountInterests } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { submitProfile } from '@/(pages)/setting/submitprofile';
import { patchUserProfile } from '@/redux/slices/login/loginExtraReducers';
import SimilarRadioInput from '@/(pages)/forms/SimilarRadioInput';
import ImageUploadCube from '@/(pages)/setting/components/ImageUploadCube';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.accountSlice.user);

  const updateUser = () => {
    dispatch<any>(
      patchUserProfile({
        pictures: user.pictures,
        age: user.age,
        gender: user.gender,
        taste: user.sexualPreference,
        tags: user.interests,
        similar: user.similar,
        bio: user.introduction
      })
    );
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <h2 className="absolute top-40 text-3xl text-gray-700 font-bold"> 최초 1회 설정이 필요합니다. </h2>
      <div className="max-w-md h-3/5 overflow-hidden hover:overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow space-y-5">
        <div className="flex">
          <h5 className="text-red-500 text-lg mr-1"> * </h5>
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50">
            프로필 사진을 설정해주세요.
          </h5>
        </div>
        <ImageUploadCube />
        <form
          onSubmit={event => {
            event.preventDefault();
            submitProfile(user.pictures, updateUser);
          }}
        >
          <div className="flex">
            <h5 className="text-red-500 mr-1"> * </h5>
            <h5 className="block text-sm font-medium text-gray-900">나이</h5>
          </div>
          <AgeInput />
          <div className="flex">
            <h5 className="text-red-500 mr-1"> * </h5>
            <h5 className="block text-sm font-medium text-gray-900">나의 성별</h5>
          </div>
          <GenderRadioInput />
          <div className="flex">
            <h5 className="text-red-500 mr-1"> * </h5>
            <h5 className="block text-sm font-medium text-gray-900">성적 선호</h5>
          </div>
          <SexualPreferenceRadioInput />
          <IntroductionInput />
          <div className="flex">
            <h5 className="text-red-500 mr-1 text-lg"> * </h5>
            <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
              관심있는 분야를 선택해주세요.
            </h5>
          </div>
          <InterestsSelector
            readOnly={false}
            onClick={e => dispatch(setAccountInterests(e))}
            interests={user.interests}
          />

          <div className="flex mt-5">
            <h5 className="text-red-500 mr-1"> * </h5>
            <h5 className="block text-sm font-medium text-gray-900">나와 비슷한 상대를 추천받고 싶나요?</h5>
          </div>
          <SimilarRadioInput />
          <div className="mb-5"></div>
          <SubmitButton text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
