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
        const base64 = await readFileAsBase64(file);
        const resizedBase64 = await resizeImage(base64, 800, 800); // 원하는 비율로 이미지 크기 조정
        images.push(resizedBase64);
      }
      dispatch(addAccountPhotos(images as []));
    }
  };

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

  const resizeImage = (base64: string, maxWidth: number, maxHeight: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const img: HTMLImageElement = document.createElement('img');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg'));
        } else {
          reject(new Error('Failed to get canvas context.'));
        }
      };
      img.onerror = () => {
        reject(new Error('Failed to load image.'));
      };
      img.src = base64;
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
