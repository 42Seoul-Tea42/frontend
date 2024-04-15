import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setAccountMainPhoto, setAccountSubPhotos } from '../../../redux/slices/accountSlice';
import ImageUploadForm from '../../forms/ImageUploadForm';

const ImageUploadGrid: React.FC = () => {
  const mainPhoto = useSelector((state: RootState) => state.accountSlice.user.photo.mainPhoto);
  const subPhotos = useSelector((state: RootState) => state.accountSlice.user.profile.subPhotos);
  const dispatch = useDispatch();
  const ImageCount = 4;

  return (
    <div className="gird grid-cols-subgrid">
      <ImageUploadForm
        previewImage={mainPhoto}
        setProfileImage={image => dispatch(setAccountMainPhoto(image))}
        width={400}
        height={400}
      />
      <div className="grid grid-cols-2 mt-4 gap-4">
        {[...Array(ImageCount)].map((_, index) => (
          <ImageUploadForm
            key={index}
            previewImage={subPhotos[index] ?? ''}
            setProfileImage={image => dispatch(setAccountSubPhotos(image))}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploadGrid;
