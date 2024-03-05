'use client';

import Image from 'next/image';

const ViewMessageForm = () => {
  return (
    <div className="flex border p-5 rounded-t-xl h-2/5 min-h-96 items-start gap-2.5">
      <Image
        className="w-8 h-8 rounded-full"
        src="/장원영.jpeg"
        width={500}
        height={700}
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">test user 1</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          That's awesome. I think our users will really appreciate the improvements.
        </p>
      </div>
    </div>
  );
};

export default ViewMessageForm;
