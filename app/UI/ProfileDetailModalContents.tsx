'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProfileDetailCarousel from '@/(pages)/components/ProfileDetailCarousel';
import { Gender, Status } from '@/redux/enum';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';
import EmojiGridList from '@/auth/upload/emoji/EmojiGridList';
import InputStarRatingBar from '@/(pages)/search/components/InputRangeStarBar';
import BlockReportForm from '@/(pages)/forms/BlockReportForm';
import ReportForm from '@/(pages)/forms/ReportForm';

export const sexualPreferenceToStringConverter = (sexualPreference: Gender) => {
  switch (sexualPreference) {
    case Gender.ALL:
      return '모두';
    case Gender.MALE:
      return '남성';
    case Gender.FEMALE:
      return '여성';
  }
};

const ProfileDetailModalContents: React.FC = () => {
  const user = useSelector((state: RootState) => state.profileInquirySlice.user);
  const isReportView = useSelector((state: RootState) => state.profileInquirySlice.isReportView);

  return (
    <div className="md:grid md:grid-cols-2 items-center gap-20 h-relative">
      <ProfileDetailCarousel images={user.pictures} />
      <div className="w-full flex justify-center">
        {!isReportView ? (
          <>
            <div className="w-96 h-96">
              {/* user name & status */}
              <div className="flex border-2 p-1 rounded-lg">
                <span
                  className={`${
                    user.status === Status.ONLINE ? 'bg-green-500' : 'bg-red-500'
                  } w-4 h-4 mr-2 border-2 border-white rounded-full`}
                ></span>
                <div className="w-full flex justify-between">
                  <div>
                    <div className="flex">
                      <h5 className="text-sm mr-1 text-gray-800 font-semibold">{user.lastname.toUpperCase()}</h5>
                      <h5 className="text-xl text-gray-800 font-semibold">{user.firstname.toLowerCase()}</h5>
                    </div>
                    <h5 className="text-sm text-gray-800 font-thin">로그인 아이디 : {user.loginId}</h5>
                    <h5 className="text-sm text-gray-800 font-light">최근 접속시간 : {user.lastOnline}</h5>
                  </div>
                  <div>{sexualPreferenceToStringConverter(user.gender)}</div>
                </div>
              </div>
              {/* user detail content */}
              <div className="w-full h-[290px] p-2 bg-gray-100 text-gray-800 text-lg font-semibold overflow-hidden hover:overflow-auto space-y-10">
                <h5>
                  인기 점수
                  <InputStarRatingBar who={'other'} star={user.rating} />
                </h5>
                <h5 className="flex">
                  <p className="rounded-xl pl-1 pr-1 text-blue-500">
                    {sexualPreferenceToStringConverter(user.sexualPreference)}
                  </p>
                  <p className="ml-2">만나고 싶어요.</p>
                </h5>
                <h5>
                  전 이런걸 좋아해요.
                  <div className="mt-2">
                    <InterestsSelector who={'other'} interests={user.interests} />
                  </div>
                  <div className="mt-2 p-2">
                    <EmojiGridList who={'other'} emoji={user.emoji} />
                  </div>
                </h5>
                <h5>
                  전 이런걸 싫어해요.
                  <div className="mt-2">
                    <InterestsSelector who={'other'} interests={user.hateInterests} />
                  </div>
                  <div className="mt-2 p-2">
                    <EmojiGridList who={'other'} emoji={user.hateEmoji} />
                  </div>
                </h5>
                <h5>
                  <p className="mb-2">저는 이런 사람이에요.</p>
                  <textarea
                    readOnly
                    className="rounded-xl min-h-[100px] max-h-[200px] w-full border border-gray-400 text-gray-800"
                    value={user.introduction}
                  ></textarea>
                </h5>
                <BlockReportForm id={user.id} />
              </div>
            </div>
          </>
        ) : (
          <ReportForm user={user} />
        )}
      </div>
    </div>
  );
};

export default ProfileDetailModalContents;
