'use client';

import Image from 'next/image';
import { CloudUploadSVG } from '../../svg';

type ImageUploadFormProps = {
  src: string;
  width: number;
  height: number;
  onClick?: () => void;
  mainPhoto?: React.ReactNode;
};

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ mainPhoto, width, height, src, onClick }) => {
  return (
    <>
      <label className="relative flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        {src ? (
          <div style={{ width: `${width}px`, height: `${height}px` }} className="relative rounded-lg overflow-hidden">
            <Image src={src} alt="Preview" layout="fill" className="rounded-lg object-cover" />
          </div>
        ) : (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="flex flex-col items-center justify-center py-6"
          >
            <CloudUploadSVG />
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Image upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
          </div>
        )}
        <div className="absolute top-0 left-0 text-yellow-400">{mainPhoto}</div>
        <button onClick={onClick} className="absolute top-1 right-1 w-5 h-5">
          X
        </button>
      </label>
    </>
  );
};

export default ImageUploadForm;
