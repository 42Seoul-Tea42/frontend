import React from 'react';

type ProfileModalContentsProps = {
  content: JSX.Element;
  forwardedRef: React.RefObject<HTMLDivElement>;
};

const ProfileModalContents: React.FC<ProfileModalContentsProps> = ({ content, forwardedRef }) => {
  return (
    <div ref={forwardedRef}>
      <div className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
        <div className="md:grid md:grid-cols-2 items-center gap-8">
          <div>{content}</div>
          <div>
            <div className="ml-5 grid grid-cols-2">
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">이름</h6>
                <div className="shadow-sm sm:rounded-lg w-36">내용</div>
              </div>
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">거리</h6>
                <div className="shadow-sm sm:rounded-lg w-36">내용</div>
              </div>
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">좋아요</h6>
                <div className="shadow-sm sm:rounded-lg w-36">내용</div>
              </div>
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">성별</h6>
                <div className="shadow-sm sm:rounded-lg w-36">내용</div>
              </div>
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">등급</h6>
                <div className="shadow-sm sm:rounded-lg w-36"> 내용 </div>
              </div>
              <div className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">관심사</h6>
                <div className="shadow-sm sm:rounded-lg w-36"> 내용 </div>
              </div>
            </div>
            <textarea
              readOnly
              className="ml-5 rounded-xl min-h-[100px] w-[310px] border-1 border-gray-400 text-gray-700"
            >
              자기소개
            </textarea>
            <div>
              <div className="flex justify-center text-gray-400 mt-5">
                <p onClick={() => {}} className="hover:text-blue-600 hover:underline">
                  차단
                </p>
                <p className="ml-2 mr-2"> / </p>
                <p onClick={() => {}} className="hover:text-blue-600 hover:underline">
                  신고
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModalContents;
