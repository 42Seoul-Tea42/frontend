import { blockUser, reportUser } from '@/redux/slices/profileInquirySlice';
import { BlueHyperLink } from '@/ui';
import { useDispatch } from 'react-redux';

interface BlockReportFormProps {
  id: number;
}

const BlockReportForm = ({ id }: BlockReportFormProps) => {
  const dispatch = useDispatch();

  const handleReportUser = () => {
    const result = prompt('신고 사유를 입력해주세요.');
    dispatch<any>(
      reportUser({
        userId: id,
        reason: result ?? ''
      })
    );
    console.log(result);
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
