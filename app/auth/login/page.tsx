'use client';

import { useState } from 'react';
import EmailLoginForm from './EmailLoginForm';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';

const LoginPage: React.FC = () => {
	const [isEmail, setIsEmail] = useState<boolean>(true);

	const toggleEmailLoginForm = () => {
		setIsEmail(!isEmail);
	};

	return (
		<div className="flex items-center justify-center w-full h-screen bg-white">
			{isEmail ? (
				<>
					<div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
						<KakaoLoginButton />
						<GoogleLoginButton />
						<button onClick={toggleEmailLoginForm}>이메일 로그인</button>
					</div>
				</>
			) : (
				<>
					<button onClick={toggleEmailLoginForm} className="mr-4">
						<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
						</svg>
					</button>
					<EmailLoginForm />
				</>
			)}
			{/* 이메일로그인 */}
		</div>
	);
};

export default LoginPage;
