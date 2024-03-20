'use client';

import Image from 'next/image';
import { ChangeEvent } from 'react';
import CloudUploadSVG from '../../../svg/CloudUploadSVG';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setProfileImage } from '../../../store/slices/signupSlice';

interface ImageUploadFormProps {
  width: number;
  height: number;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ width, height }) => {
  const previewImage = useSelector((state: RootState) => state.signup.profileImage);

  const dispatch = useDispatch();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result && typeof result === 'string') {
          dispatch(setProfileImage(result));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label className="flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        {previewImage ? (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="relative rounded-lg overflow-hidden"
          >
            <Image
              src={previewImage}
              alt="Preview"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        ) : (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="flex flex-col items-center justify-center py-6"
          >
            <CloudUploadSVG />
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
          </div>
        )}
        <input
          type="file"
          className="hidden"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </label>
    </>
  );
};

export default ImageUploadForm;
