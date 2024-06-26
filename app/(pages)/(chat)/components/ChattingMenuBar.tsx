import { Status } from '@/redux/enum';
import { clearMessages, setChattingListModal, setChattingMessage } from '@/redux/slices/chatting/chattingSlice';
import { getProfileDetail } from '@/redux/slices/profileInquiry/profileInquiryExtraReducers';
import { setProfileInquiryUser, setProfileModalVisible } from '@/redux/slices/profileInquiry/profileInquirySlice';
import { RootState } from '@/redux/store';
import { HamburgerSVG } from '@/svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
function ChattingMenuBar() {
  const currentUser = useSelector((state: RootState) => state.chattingSlice.currentUser);
  const dispatch = useDispatch();

  const clickUserDetail = (userId: string) => {
    // 유저 상세 정보 - serverState
    dispatch(setProfileModalVisible(true));
    dispatch<any>(getProfileDetail(userId));
    // 유저 기본 정보 - localState
    dispatch(setProfileInquiryUser(currentUser));
  };

  return (
    <div className="flex justify-between items-end p-4 border rounded-t-xl shadow-sm">
      <button className="flex justify-center items-end" onClick={() => clickUserDetail(currentUser.id)}>
        <Image className="w-10 h-10 rounded-xl" src={currentUser.picture} width={500} height={700} alt="User image" />{' '}
        <span
          className={`${
            currentUser.status === Status.ONLINE ? 'bg-green-500' : 'bg-red-500'
          } w-4 h-4 border-2 border-white rounded-full`}
        ></span>
        <p className="grow text-xl ml-2 font-semibold text-gray-800 ">{currentUser.firstname}</p>
      </button>
      <button
        onClick={() => {
          dispatch(setChattingListModal(true));

          //클리어 메세지. 없는 경우 방에 나갔다 들어올때 메세지가 계속 복붙됨
          // dispatch(clearMessages());
        }}
        className="border-2 p-1 rounded-lg flex justify-center items-center hover:bg-gray-200"
      >
        <HamburgerSVG />
      </button>
    </div>
  );
}

export default ChattingMenuBar;
