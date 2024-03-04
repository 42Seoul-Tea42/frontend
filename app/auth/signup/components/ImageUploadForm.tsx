'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface ImageUploadFormProps {
  width: number;
  height: number;
  id: string;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ width, height, id }) => {
  const [previewImage, setPreviewImage] = useState<string>('');

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
    <div className={`w-${width} h-${height} items-center justify-center mb-5`}>
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        {previewImage ? (
          <div className={`flex w-${width} h-${height} relative p-1`}>
            {' '}
            <Image
              src={previewImage}
              alt="Preview"
              layout="responsive"
              width={width}
              height={height}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
          </div>
        )}
        <input
          id={id}
          type="file"
          className="hidden"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default ImageUploadForm;
