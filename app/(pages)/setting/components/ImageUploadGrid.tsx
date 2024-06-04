import ImageUploadForm from '@/(pages)/forms/ImageUploadForm';
import { removeAccountPhotos } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { StarFullSVG } from '@/svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ImageUploadGrid: React.FC = () => {
  const picture = useSelector((state: RootState) => state.accountSlice.user.pictures);
  const dispatch = useDispatch();
  return (
    <div className="gird grid-cols-subgrid">
      <div className="grid grid-cols-2 gap-4">
        <img width={500} src={picture}></img>
        <ImageUploadForm
          mainPhoto={<StarFullSVG color="green" />}
          src={picture}
          width={200}
          height={200}
          onClick={() => dispatch(removeAccountPhotos(0))}
        />
        {/* <ImageUploadForm
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
        /> */}
      </div>
    </div>
  );
};

export default ImageUploadGrid;
