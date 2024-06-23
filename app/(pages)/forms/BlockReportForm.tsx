import { blockUser, reportUser } from '@/redux/slices/profileInquiry/profileInquiryExtraReducers';
import { setReportView } from '@/redux/slices/profileInquiry/profileInquirySlice';
import { BlueHyperLink } from '@/ui';
import { useDispatch } from 'react-redux';

interface BlockReportFormProps {
  id: number;
}

const BlockReportForm = ({ id }: BlockReportFormProps) => {
  const dispatch = useDispatch();

  const handleReportUser = () => {
    dispatch(setReportView(true));
  };

  const handleBlockUser = () => {
    dispatch<any>(blockUser(id));
  };

  return (
    <div className="flex h-12 justify-end items-end text-blue-400">
      <div className="flex items-center">
        <BlueHyperLink text={'차단'} onClick={handleBlockUser} />
        <p className="ml-2 mr-2"> / </p>
        <BlueHyperLink text={'신고'} onClick={handleReportUser} />
      </div>
    </div>
  );
};

export default BlockReportForm;
