'use client';

import TagSelector from '../../signup/components/InterestsSelector';
import SexualPreferenceRadioInput from '../../../forms/SexualPreferenceRadioInput';
import GenderRadioInput from '../../../forms/GenderRadioInput';
import IntroductionInput from '../../../forms/IntroductionInput';
import { useRouter } from 'next/navigation';
import SubmitButton from '../../../UI/SubmitButton';
import ImageUploadForm from '../../../forms/ImageUploadForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setAccountMainPhoto } from '../../../../redux/slices/accountSlice';

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profileImage = useSelector((state: RootState) => state.accountSlice.user.photo.mainPhoto);

  const submitProfile = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 프로필 사진이 없을 경우 경고창
    if (!profileImage) {
      alert('반드시 프로필 사진을 등록해주세요.');
      return;
    }

    //서버로 보내는 동작 수행

    // 성공했을시 useEffect 내에서 라우터로 푸시
    router.push('/auth/emoji');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={submitProfile}
        className="max-w-md h-3/5 overflow-hidden hover:overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-lime-500/50">
          프로필 사진을 설정해주세요.
        </h5>
        <ImageUploadForm
          previewImage={profileImage}
          setProfileImage={image => dispatch(setAccountMainPhoto(image))}
          width={380}
          height={380}
        />
        <h5 className="text-lg font-semibold mb-5 mt-10 underline decoration-wavy decoration-blue-500/50">
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
        <SubmitButton text="Submit" />
      </form>
    </div>
  );
};

export default Profile;
