import React from 'react';
type ProfileDetailModalContentsItem = {
  title: string;
  content: any;
};

type ProfileDetailModalContentsProps = {
  items: ProfileDetailModalContentsItem[];
  introduciotn: ProfileDetailModalContentsItem;
  carousel: JSX.Element;
  block: JSX.Element;
  report: JSX.Element;
};

const ProfileDetailModalContents: React.FC<ProfileDetailModalContentsProps> = ({
  carousel,
  items,
  introduciotn,
  block,
  report
}) => {
  return (
    <div className="md:grid md:grid-cols-2 items-center gap-8">
      <div>{carousel}</div>
      <div>
        <div className="ml-5 grid grid-cols-2">
          {items &&
            items.map((item, index) => (
              <div key={index} className="mb-2">
                <h6 className="shadow-sm sm:rounded-lg bg-gray-200 w-36 font-semibold text-gray-700">{item.title}</h6>
                <div className="shadow-sm sm:rounded-lg w-36">{item.content}</div>
              </div>
            ))}
        </div>
        <textarea
          readOnly
          className="ml-5 rounded-xl min-h-[100px] w-[310px] border-1 border-gray-400 text-gray-700"
          value={introduciotn.title + '\n' + introduciotn.content}
        ></textarea>
        <div className="flex justify-end mr-5 mt-10">
          <div className="flex items-center text-blue-400">
            {block}
            <p className="ml-2 mr-2"> / </p>
            {report}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailModalContents;
