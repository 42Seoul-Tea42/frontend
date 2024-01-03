"use client";

import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Tea for Two</h1>
      <p className="bg-blue-500 mt-2">This is a test page for Tailwind CSS.</p>
      <button className="bg-green" onClick={() => router.push("/home")}>
        Get Started
      </button>
    </>
  );
}

export default Page;
