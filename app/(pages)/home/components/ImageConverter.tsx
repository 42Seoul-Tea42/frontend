import Image from 'next/image';
import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  ProfileDto,
  addUserProfile,
  removeUserProfile,
  setCurrentUserIndex
} from '../../../store/slices/userProfileSlice';

const ImageConverter: React.FC = () => {
  const dispatch = useDispatch();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isFancy, setIsFancy] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const currentUserIndex = useSelector((state: RootState) => state.userProfile.currentUserIndex);
  const users = useSelector((state: RootState) => state.userProfile.profiles);

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsDragging(true);
    setIsNext(data.x > 250);
    setIsFancy(data.x < -250);
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
    setOriginalPosition({ x: 0, y: 0 });
  };

  const handleNextImage = () => {
    dispatch(setCurrentUserIndex(currentUserIndex + 1));
    setIsNext(false);
  };

  const handleFancy = () => {
    //
    setIsFancy(false);
  };

  const prerenderUsers = () => {
    const Users: ProfileDto[] = [
      {
        picture: ['/emoji/4.jpg'],
        id: 1,
        login_id: '1',
        name: '귀요미',
        birthday: new Date().toString(),
        distance: 1,
        fame: 1,
        tags: [1],
        fancy: 1
      }
    ];
    dispatch(addUserProfile(Users));
  };

  //유저 데이터 컨트롤
  useEffect(() => {
    if (currentUserIndex === users.length - 1) {
      prerenderUsers();
      dispatch(removeUserProfile(0));
    }
  }, [isNext]);

  // 드래그 트리거
  useEffect(() => {
    if (isNext && !isDragging) handleNextImage();
    if (isFancy && !isDragging) handleFancy();
  }, [isDragging]);

  useEffect(() => {
    console.table(users);
    prerenderUsers();
  }, []);

  return (
    <div className="w-96 h-96 bg-white border rounded-t-xl">
      <p className="absolute animate-pulse m-16 text-6xl text-gray-700 font-extrabold">
        {isNext ? 'next →' : ''}
        {isFancy ? '★ fancy' : ''}
      </p>
      <Draggable
        axis="x"
        bounds={{ left: -400, right: 400 }}
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div className={isNext || isFancy ? 'brightness-50' : ''}>
          <div className="hover:shadow-2xl hover:rounded-xl">
            <Image
              src={users[currentUserIndex]?.picture[0]}
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
