"use client";

import Logo from "@/components/logo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { IReduxValue } from "@/types/redux";

export default function VerifyEmail() {
  const email = useSelector<IReduxValue, string>(state => state.email.data);
  const router = useRouter();
  useEffect(() => {
    if (!email) {
      router.push("/auth/register");
    }
  }, [email]);
  return (
    <main className="bg-black/90 backdrop-blur-2xl  w-full min-w-screen h-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center p-3 sm:p-4">
        <Logo />
        <h1 className="text-4xl sm:text-[39px] font-bold capitalize mt-10 text-center tracking-tighter">
          Verify your email
        </h1>
        <div className="text-white/80 flex flex-col items-center mt-6 leading-7">
          <p>We sent an email to</p>
          <p className="text-primary-red">{email}</p>
          <p>Click the link inside to get started</p>
        </div>
      </div>
    </main>
  );
}
