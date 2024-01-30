'use client';

const KakaoLoginButton: React.FC = () => {
  return (
    <button
      type="button"
      className="text-[#381F1F] bg-[#FFE812] hover:bg-[#FFE812]/90 focus:ring-4 focus:outline-none focus:ring-[#FFE812]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#FFE812]/55 me-2 mb-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48" id="kakaotalk">
        <path fill="#FFE812" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"></path>
        <path
          fill="#381F1F"
          d="M24 11C15.1634 11 8 16.6482 8 23.6154C8 28.1198 10.9948 32.0723 15.4997 34.3042C15.2546 35.1494 13.9248 39.7417 13.8718 40.1025C13.8718 40.1025 13.84 40.3735 14.0155 40.4769C14.1911 40.5803 14.3975 40.5 14.3975 40.5C14.9009 40.4297 20.2349 36.6829 21.1582 36.0323C22.0805 36.1629 23.0302 36.2308 24 36.2308C32.8366 36.2308 40 30.5828 40 23.6154C40 16.6482 32.8366 11 24 11Z"
        ></path>
        <path
          fill="#FFE812"
          fillRule="evenodd"
          d="M15.1538 28.0193C14.6447 28.0193 14.2307 27.6239 14.2307 27.1377V21.6539H12.7904C12.2909 21.6539 11.8846 21.2483 11.8846 20.75C11.8846 20.2517 12.291 19.8462 12.7904 19.8462H17.5172C18.0167 19.8462 18.423 20.2517 18.423 20.75C18.423 21.2483 18.0166 21.6539 17.5172 21.6539H16.0769V27.1377C16.0769 27.6239 15.6629 28.0193 15.1538 28.0193ZM23.2479 28.0073C22.863 28.0073 22.5686 27.851 22.4798 27.5996L22.0227 26.403L19.2079 26.4028L18.7506 27.6002C18.6621 27.8511 18.3678 28.0073 17.9829 28.0073C17.7804 28.0075 17.5802 27.964 17.3961 27.8799C17.1416 27.7625 16.897 27.4397 17.1773 26.5691L19.3853 20.7574C19.5409 20.3154 20.0133 19.86 20.6146 19.8463C21.2175 19.8599 21.6899 20.3154 21.8458 20.7583L24.0529 26.5674C24.3338 27.44 24.0892 27.763 23.8347 27.88C23.6505 27.964 23.4504 28.0074 23.2479 28.0073ZM20.6153 22.1487L21.5373 24.7679H19.6933L20.6153 22.1487ZM25.5384 27.8847C25.0505 27.8847 24.6538 27.505 24.6538 27.0385V20.7693C24.6538 20.2602 25.0765 19.8462 25.5961 19.8462C26.1156 19.8462 26.5384 20.2602 26.5384 20.7693V26.1923H28.4999C28.9878 26.1923 29.3846 26.572 29.3846 27.0385C29.3846 27.505 28.9878 27.8847 28.4999 27.8847H25.5384ZM29.7436 27.0842C29.7436 27.5933 30.1576 28.0073 30.6667 28.0073C30.9115 28.0069 31.1462 27.9095 31.3193 27.7364C31.4924 27.5633 31.5898 27.3286 31.5901 27.0837V25.0697L31.9104 24.7494L34.0752 27.6177C34.1609 27.7322 34.2722 27.825 34.4003 27.8888C34.5283 27.9525 34.6695 27.9853 34.8125 27.9847C35.0131 27.9851 35.2082 27.9197 35.3678 27.7983C35.4648 27.7256 35.5464 27.6344 35.6079 27.5299C35.6693 27.4254 35.7095 27.3097 35.7259 27.1896C35.7432 27.0695 35.7364 26.9473 35.7059 26.8299C35.6755 26.7125 35.6221 26.6023 35.5487 26.5057L33.2765 23.4956L35.3801 21.3923C35.5247 21.2476 35.5972 21.048 35.5838 20.8303C35.5705 20.6145 35.4741 20.4067 35.3124 20.2451C35.139 20.0719 34.9076 19.9725 34.6772 19.9725C34.4796 19.9725 34.2976 20.0454 34.1652 20.1779L31.5898 22.7533V20.7693C31.5898 20.2602 31.1758 19.8462 30.6667 19.8462C30.1576 19.8462 29.7436 20.2602 29.7436 20.7693V27.0842Z"
          clipRule="evenodd"
        ></path>
      </svg>
      Sign in with Kakao
    </button>
  );
};

export default KakaoLoginButton;
