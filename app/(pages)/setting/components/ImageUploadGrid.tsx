import ImageUploadForm from '@/(pages)/forms/ImageUploadForm';
import { removeAccountPhotos } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { StarFullSVG } from '@/svg';
import { useDispatch, useSelector } from 'react-redux';

export const checkPictureLength = async (pictures: any) => {
  if (pictures.length < 1) {
    return Promise.reject('프로필 사진을 한 장 이상 등록해주세요.');
  }
};

const ImageUploadGrid: React.FC = () => {
  const pictures = useSelector((state: RootState) => state.accountSlice.user.pictures);
  const dispatch = useDispatch();
  return (
    <div className="gird grid-cols-subgrid">
      <div className="grid grid-cols-2 gap-4">
        <ImageUploadForm
          mainPhoto={<StarFullSVG color="green" />}
          src={pictures[0]}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(0))}
        />
        <ImageUploadForm
          src={pictures[1] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(1))}
        />
        <ImageUploadForm
          src={pictures[2] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(2))}
        />
        <ImageUploadForm
          src={pictures[3] ?? ''}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(3))}
        />
      </div>
    </div>
  );
};

export default ImageUploadGrid;
