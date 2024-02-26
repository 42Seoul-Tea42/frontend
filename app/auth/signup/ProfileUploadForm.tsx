import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

const ImageUploadForm: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result && typeof result === 'string') {
          setPreviewImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="max-w-sm min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-purple-500/50">
        다른 사람에게 보이는 프로필 정보입니다.
      </h5>
      {previewImage && (
        <div className="mt-4">
          <Image
            src={previewImage}
            alt="Preview"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      )}
      <div className="max-w-lg mx-auto">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="user_avatar"
        >
          Upload Image
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          onChange={handleImageChange}
        />
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
          프로필 사진을 한 장 이상 업로드 해주세요.
        </div>
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {}}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ImageUploadForm;
