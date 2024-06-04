'use client';

import { addAccountPhotos } from '@/redux/slices/accountSlice';
import { CloudUploadSVG } from '@/svg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

type ImageUploadFormProps = {
  src: string;
  width: number;
  height: number;
  onClick?: () => void;
  mainPhoto?: React.ReactNode;
};

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ mainPhoto, width, height, src, onClick }) => {
  const dispatch = useDispatch();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const images: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await readFileAsBase64(file); // 파일을 base64 문자열로 변환
        images.push(base64);
      }
      dispatch(addAccountPhotos(images as [])); // 리덕스 액션 디스패치
    }
  };

  // 파일을 base64 문자열로 변환하는 함수
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64.'));
        }
      };
      reader.onerror = () => {
        reject(new Error('Failed to read file.'));
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <label className="relative flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:brightness-75">
        <input className="hidden" type="file" multiple={true} onChange={handleImageChange} />
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
            <p className="mb-1 text-sm text-gray-500 ">
              <span className="font-semibold">Image upload</span>
            </p>
            <p className="text-xs text-gray-500 ">PNG, JPG, JPEG (max 5MB)</p>
          </div>
        )}
        <div className="absolute top-0 left-0 text-yellow-400">{mainPhoto}</div>
        <button className="absolute top-1 right-1 w-5 h-5">
          <p onClick={onClick}>X</p>
        </button>
      </label>
    </>
  );
};

export default ImageUploadForm;
