import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setProfileModalVisible } from '../redux/slices/profileInquirySlice';

type ProfileDetailModalControlProps = {
  profileDetail: JSX.Element;
};

function ProfileDetailModalControl({ profileDetail }: ProfileDetailModalControlProps) {
  const ref = useRef<HTMLDivElement>(null);
  const profileModalVisible = useSelector((state: RootState) => state.profileInquirySlice.profileModalVisible);
  const dispatch = useDispatch();

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      dispatch(setProfileModalVisible(false));
    }
  };

  useEffect(() => {
    if (profileModalVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [profileModalVisible]);

  return (
    <>
      {profileModalVisible && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={false}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70"
          style={{ zIndex: 1000 }}
        >
          <div ref={ref} className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
            {profileDetail}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileDetailModalControl;
