"use client";

import React, { useState, Suspense } from "react";
import Logo from "@/components/logo";
import AboutForm from "./components/AboutForm";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { ClipLoader } from "react-spinners";
import { useOnMountUnsafe } from "@/hooks/useOnMountUnsafe";
import { IReduxValue } from "@/types/redux";
import { IUser } from "@/types/IUser";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/features/userSlice";

function AboutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const dispatch = useDispatch();
  const searchToken = searchParams.get("token");

  useOnMountUnsafe(() => {
    const sendRequest = (token: string) => {
      toast.promise(
        axios.get("/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          loading: "Verifying...",
          error: () => {
            router.push("/auth/login");
            setLoading(false);
            return "Error Verifying your account, email might be expired.";
          },
          success: (res) => {
            setLoading(false);
            dispatch(setUser(res.data.user));
            localStorage.setItem("token", res.data.token);
            return res.data.message;
          },
        }
      );
    };
    const token = searchToken || localStorage.getItem("token");
    if (token && !user) {
      sendRequest(token);
    } else {
      router.push("/auth/register");
    }
  });

  return (
    <main className="bg-black/90 backdrop-blur-2xl w-full min-w-screen h-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center p-3 sm:p-4 w-full max-w-[450px]">
        <div className="flex flex-col items-center">
          <Logo />
          <h1 className="text-2xl sm:text-4xl font-bold mt-6 tracking-tight text-center">
            Tell Us About You
          </h1>
        </div>
        {loading ? (
          <div className="my-4">
            <ClipLoader color="#EC2227" />
          </div>
        ) : (
          <AboutForm user={user} />
        )}
        <div className="mt-6">
          <p className="max-w-sm text-center text-sm text-white/50">
            By Clicking “
            <Link href="#" className="text-primary-red hover:underline">
              Continue
            </Link>
            ”, You Agree to Our Terms and Acknowledge Our{" "}
            <Link
              href="/user-agreements/privacy-policy"
              className="text-primary-red cursor-pointer hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}
