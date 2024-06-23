import { ReportReason } from '@/redux/enum';
import { reportUser } from '@/redux/slices/profileInquiry/profileInquiryExtraReducers';
import { setReportView } from '@/redux/slices/profileInquiry/profileInquirySlice';
import { SubmitButton } from '@/ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ReportForm = ({ user }: { user: any }) => {
  const dispatch = useDispatch();
  const [reportValue, setReportValue] = useState<ReportReason>(ReportReason.NONE);
  const [reportMessage, setReportMessage] = useState<string>('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch<any>(
          reportUser({
            userId: user.id,
            reason: reportValue,
            message: reportMessage
          })
        );
      }}
    >
      <h5 className="text-xl mb-4 flex justify-center items-start">신고사유</h5>
      <ul className="flex-col mb-4 space-y-1">
        <li className="">
          <input
            type="radio"
            id="bully"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.BULLY}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="bully" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="모욕적인 언어, 개인적인 공격 또는 어떤 형태의 괴롭힘 행동을 포함합니다.">
              폭행 또는 괴롭힘
            </abbr>
          </label>
        </li>
        <li className="">
          <input
            id="content"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.CONTENT}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="content" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr
              title="명시적인 이미지, 혐오 발언 또는 저작권 침해 등 불법 콘텐츠와 같은 커뮤니티
              가이드라인을 위반하는 콘텐츠를 의미합니다."
            >
              부적절한 콘텐츠
            </abbr>
          </label>
        </li>
        <li className="">
          <input
            id="fake"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.FAKE}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="fake" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="다른 사람을 사칭하거나 가짜 정보를 사용하는 경우입니다.">가짜 계정</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="spam"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.SPAM}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="spam" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="스팸 메시지 전송 또는 스팸 계정을 신고할 수 있습니다.">스팸 메시지</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="misin"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.MISINFORM}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="misin" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="사용자가 오도하거나 거짓 주장을 전파하는 경우 신고합니다.">거짓 정보</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="violation"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.VIOLATION}
          />
          <label htmlFor="violation" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="플랫폼의 서비스 약관이나 커뮤니티 가이드라인을 위반한 사용자를 신고합니다.">미꾸라지</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="privacy"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.PRIVACY}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="privacy" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="동의 없이 개인 정보를 공유하거나 스토킹 행위에 가담한 사용자를 신고합니다.">사생활 침해</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="suspicious"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.SUSPICIOUS}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="suspicious" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <abbr title="수상한 행동이나 잠재적으로 유해한 행위를 보고합니다.">수상한 활동</abbr>
          </label>
        </li>
        <li className="">
          <input
            id="other"
            type="radio"
            name="report-reason"
            className="w-4 h-4 text-lg text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
            value={ReportReason.OTHER}
            onChange={e => setReportValue(Number(e.target.value))}
          />
          <label htmlFor="other" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            기타 사유
          </label>
        </li>
        <li className={reportValue === ReportReason.OTHER ? '' : 'hidden'}>
          <input
            id="report-message"
            type="text"
            name="report-text"
            onChange={e => setReportMessage(e.target.value)}
            value={reportMessage}
            className="rounded-xl border border-green-500 focus:border-green-500 text-sm"
          />
        </li>
      </ul>
      <div className="flex gap-2">
        <SubmitButton
          text="취소"
          onClick={() => {
            dispatch(setReportView(false));
          }}
        />
        <SubmitButton text="신고" />
      </div>
    </form>
  );
};

export default ReportForm;
