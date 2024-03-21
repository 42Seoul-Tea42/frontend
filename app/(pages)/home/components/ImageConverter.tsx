import Image from 'next/image';
import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  ProfileDto,
  setCurrentUserIndex,
  setPicture,
  setProfiles
} from '../../../store/slices/suggestProfileSlice';

const ImageConverter: React.FC = () => {
  const dispatch = useDispatch();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isPrev, setIsPrev] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const currentUserIndex = useSelector((state: RootState) => state.suggestProfile.currentUserIndex);
  const users = useSelector((state: RootState) => state.suggestProfile.profiles);
  const picture = useSelector((state: RootState) => state.suggestProfile.picture);

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsDragging(true);
    setIsNext(data.x > 250);
    setIsPrev(data.x < -250);
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
    setOriginalPosition({ x: 0, y: 0 });
  };

  const dispatchNextImage = () => {
    dispatch(setCurrentUserIndex(currentUserIndex + 1));
    setIsNext(false);
  };

  const dispatchPrevImage = () => {
    dispatch(setCurrentUserIndex(currentUserIndex - 1));
    setIsPrev(false);
  };

  const prerenderUsers = () => {
    console.log('prerenderUsers');
    const src = '/emoji/3.jpg';
    dispatch(setPicture(src));

    const profile: ProfileDto[] = [
      {
        id: 1,
        firstname: '옴팡이',
        lastname: '옴팡이',
        distance: 1
      }
    ];
    dispatch(setProfiles(profile));
  };

  //유저 데이터 컨트롤
  useEffect(() => {
    if (currentUserIndex === users.length - 1) {
      prerenderUsers();
    }
  }, [isNext]);

  // 드래그 트리거
  useEffect(() => {
    if (isNext && !isDragging) dispatchNextImage();
    if (isPrev && !isDragging) dispatchPrevImage();
  }, [isDragging]);

  useEffect(() => {
    prerenderUsers();
  }, []);

  return (
    <div className="w-96 h-96 bg-white border rounded-t-xl">
      <p className="absolute animate-pulse m-16 text-6xl text-gray-700 font-extrabold">
        {isNext && 'next →'}
        {isPrev && '← prev'}
      </p>
      <Draggable
        axis="x"
        bounds={{ left: -400, right: 400 }}
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div className={isNext || isPrev ? 'brightness-50' : ''}>
          <div className="hover:shadow-2xl hover:rounded-xl">
            <Image
              src={picture}
              alt="face"
              width={500}
              height={500}
              priority={true}
              draggable={false}
              className="rounded-xl"
            />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default ImageConverter;
