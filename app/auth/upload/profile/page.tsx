'use client';

import { GenderRadioInput, IntroductionInput, SexualPreferenceRadioInput } from '@/(pages)/forms';
import ImageUploadGrid from '@/(pages)/setting/components/ImageUploadGrid';
import { SubmitButton } from '@/ui';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import { patchUserProfile, setAccountInterests } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profileImage = useSelector((state: RootState) => state.accountSlice.user.pictures);
  const profileCheck = useSelector((state: RootState) => state.loginSlice.steps.profileCheck);
  const user = useSelector((state: RootState) => state.accountSlice.user);

  const submitProfile = () => {
    // 프로필 사진이 없을 경우 경고창
    if (!profileImage[0]) {
      alert('프로필 사진을 한 장 이상 등록해주세요.');
      return;
    }

    dispatch<any>(patchUserProfile());
  };

  useEffect(() => {
    if (profileCheck) {
      router.push('/auth/upload/emoji');
    }
  }, [profileCheck]);

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <h2 className="absolute top-40 text-3xl text-gray-700 font-bold"> 최초 1회 설정이 필요합니다. </h2>
      <form
        onSubmit={event => {
          event.preventDefault();
          submitProfile();
        }}
        className="max-w-md h-3/5 overflow-hidden hover:overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow "
      >
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-lime-500/50">
          프로필 사진을 설정해주세요.
        </h5>
        <ImageUploadGrid />
        <h5 className="text-lg font-semibold mb-5 mt-10 underline decoration-wavy decoration-blue-500/50">
          원활한 매칭을 위해서 정보를 입력해주세요.
        </h5>
        <label className="block text-sm font-medium text-gray-900">성별 정보</label>
        <GenderRadioInput />
        <label className="block text-sm font-medium text-gray-900">성적 선호</label>
        <SexualPreferenceRadioInput />
        <IntroductionInput />
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-yellow-500/50">
          관심있는 분야를 선택해주세요.
        </h5>
        <InterestsSelector who={'me'} onClick={e => dispatch(setAccountInterests(e))} interests={user.interests} />
        <div className="mb-5"></div>
        <SubmitButton text="Submit" />
      </form>
    </div>
  );
};

export default Profile;
