import axiosInstance from '../../utils/axios';
// import EmailInputForm from '../signup/components/EmailInputForm';

const VerifyEmail: React.FC = () => {
  return (
    <div className="items-end ml-5 mr-5 mt-5">
      <h5 className="tracking-wide text-3xl ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
        이메일을 인증해주세요.
      </h5>
      {/* <EmailInputForm /> */}
    </div>
  );
};

export default VerifyEmail;
