"use client";

import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

function Login() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      {/* 아이디, 비밀번호 */}
      <LoginForm />
      {/* 카카오로그인 */}
      {/* 구글로그인 */}
      {/* 비밀번호 찾기 */}
    </div>
  );
}
export default Login;
