"use client";

import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>go home!</h1>
      <Button onClick={() => router.push("/home")}>go home</Button>
    </>
  );
}
