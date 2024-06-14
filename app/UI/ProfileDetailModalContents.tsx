import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProfileDetailCarousel from '@/(pages)/components/ProfileDetailCarousel';
import BlueHyperLink from './BlueHyperLink';
import { blockUser, reportUser } from '@/redux/slices/profileInquirySlice';
import { Gender } from '@/redux/enum';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import EmojiGridList from '@/auth/upload/emoji/EmojiGridList';
import StarRatingBar from '@/(pages)/search/components/InputRangeStarBar';

const ProfileDetailModalContents: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profileInquirySlice.user);

  const sexualPreferenceToStringConverter = (sexualPreference: Gender) => {
    switch (sexualPreference) {
      case Gender.ALL:
        return '모두';
      case Gender.MALE:
        return '남성';
      case Gender.FEMALE:
        return '여성';
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 items-center gap-20">
      <ProfileDetailCarousel images={user.pictures} />
      {/* user detail content */}
      <div className="w-full h-[400px] border-2 overflow-hidden hover:overflow-auto space-y-10">
        <h5 className="text-xl text-gray-800 font-semibold">
          인기 점수
          <StarRatingBar />
        </h5>
        <h5 className="flex text-xl text-gray-800 font-semibold">
          <p className="border rounded-xl pl-1 pr-1 text-blue-500">
            {sexualPreferenceToStringConverter(user.sexualPreference)}
          </p>
          <p className="ml-2">만나고 싶어요.</p>
        </h5>
        <h5 className="text-xl text-gray-800 font-semibold">
          전 이런걸 좋아해요.
          <InterestsSelector who={'other'} />
          <EmojiGridList who={'other'} />
        </h5>
        <h5 className="text-xl text-gray-800 font-semibold">
          저는 이런 사람이에요.
          <textarea
            readOnly
            className="rounded-xl min-h-[100px] max-h-[200px] w-full border-1 border-gray-400 text-gray-700"
            value={user.introduction}
          ></textarea>
        </h5>
        <div className="flex justify-end mt-10">
          <div className="flex items-center text-blue-400">
            <BlueHyperLink text={'차단'} onClick={() => dispatch<any>(blockUser(user.id.toString()))} />
            <p className="ml-2 mr-2"> / </p>
            <BlueHyperLink text={'신고'} onClick={() => dispatch<any>(reportUser(user.id.toString()))} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailModalContents;
