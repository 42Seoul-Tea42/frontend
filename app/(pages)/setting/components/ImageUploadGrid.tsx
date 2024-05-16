import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { addAccountPhotos, removeAccountPhotos } from '../../../redux/slices/accountSlice';
import ImageUploadForm from '../../forms/ImageUploadForm';
import { useState } from 'react';
import { StarFullSVG } from '../../../svg';

const ImageUploadGrid: React.FC = () => {
  const photos = useSelector((state: RootState) => state.accountSlice.user.photo.photos);
  const [uploadPhotos, setUploadPhotos] = useState<string[]>([]);
  const dispatch = useDispatch();
  const ImageCount = 4;

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
    <div className="gird grid-cols-subgrid">
      <div className="grid grid-cols-2 gap-4">
        <ImageUploadForm
          mainPhoto={<StarFullSVG />}
          src={photos[0] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(0))}
        />
        <ImageUploadForm
          src={photos[1] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(1))}
        />
        <ImageUploadForm
          src={photos[2] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(2))}
        />
        <ImageUploadForm
          src={photos[3] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(3))}
        />
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        onChange={handleImageChange}
        id="file_input"
        type="file"
        multiple={true}
      />
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
        PNG, JPG, JPEG (MAX. 400x400px).
      </p>
    </div>
  );
};

export default ImageUploadGrid;
