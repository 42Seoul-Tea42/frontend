import { useDispatch, useSelector } from 'react-redux';
import ImageUploadForm from '../../auth/signup/components/ImageUploadForm';
import { RootState } from '../../redux/store';
import { setAccountMainPhoto, setAccountSubPhotos } from '../../redux/slices/accountSlice';

const ImageUploadGrid: React.FC = () => {
  const mainPhoto = useSelector((state: RootState) => state.accountSlice.user.photo.mainPhoto);
  const subPhotos = useSelector((state: RootState) => state.accountSlice.user.profile.subPhotos);
  const dispatch = useDispatch();

  return (
    <div className="gird grid-cols-subgrid">
      <ImageUploadForm
        previewImage={mainPhoto}
        setProfileImage={image => dispatch(setAccountMainPhoto(image))}
        width={400}
        height={400}
      />
      <div className="grid grid-cols-2 mt-4 gap-4">
        <ImageUploadForm
          previewImage={subPhotos[0] ?? ''}
          setProfileImage={image => dispatch(setAccountSubPhotos(image))}
          width={200}
          height={200}
        />
        <ImageUploadForm
          previewImage={subPhotos[1] ?? ''}
          setProfileImage={image => dispatch(setAccountSubPhotos(image))}
          width={200}
          height={200}
        />
        <ImageUploadForm
          previewImage={subPhotos[2] ?? ''}
          setProfileImage={image => dispatch(setAccountSubPhotos(image))}
          width={200}
          height={200}
        />
        <ImageUploadForm
          previewImage={subPhotos[3] ?? ''}
          setProfileImage={image => dispatch(setAccountSubPhotos(image))}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ImageUploadGrid;
