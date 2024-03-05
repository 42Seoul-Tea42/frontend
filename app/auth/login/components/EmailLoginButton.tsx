interface EmailLoginButtonProps {
  handle: () => void;
}
const EmailLoginButton: React.FC<EmailLoginButtonProps> = ({ handle }) => {
  return (
    <button
      onClick={handle}
      className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
    >
      이메일 로그인
    </button>
  );
};

export default EmailLoginButton;
