"use client";

import React from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import ImageFlipper from "../components/ImageFlipper";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function page() {
  const googleIcon = "/logos/icons8-google.svg";
  const appleIcon = "/logos/icons8-apple.svg";

  const images = [
    "/authFlow/ae6537ab7243e8156707edd7fc54a601.png",
    "/authFlow/8c0c47c855f3eb77c5186a37dad4da6e.jpeg",
    "/authFlow/740510e3c70cd26d29353d1fde9d5008.png",
  ];
  const router = useRouter();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      toast.promise(
        axios.get("/auth/google-login", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }),
        {
          loading: "Retrieving Account...",
          error: (error) =>
            error?.response?.data?.message ?? "Error Retrieving Account...",
          success: (response) => {
            localStorage.setItem("token", response.data.token);
            router.push(
              response.data.registered
                ? "/auth/verify/number"
                : "/dashboard/main"
            );
            return "Account Retrieved successfully.";
          },
        }
      );
    },
  });

  return (
    <main className="bg-black/90 backdrop-blur-2xl w-full min-w-screen h-full min-h-screen flex justify-center items-center">
      <div className="flex items-center gap-20 xl:gap-32 p-3 sm:p-4 w-full sm:w-auto justify-center">
        <section className="w-full sm:min-w-[450px] max-w-[450px] sm:max-w-[500px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome back!</h1>
            <p className="text-white/80">
              Enter your username and password to login
            </p>
            <div className="flex gap-2 sm:gap-4 mt-1">
              <SocialAuthButton
                image={googleIcon}
                onClick={googleLogin}
                title="Sign in with google"
              />
              <SocialAuthButton image={appleIcon} title="Sign in with apple" />
            </div>
          </div>
          <LoginForm />
          <div className="mt-6">
            <p className="text-white/50 text-sm sm:text-base">
              Don't have an account yet?{" "}
              <Link
                href="/auth/register"
                className="capitalize text-white font-semibold cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </section>
        <section className="w-full hidden lg:block">
          <ImageFlipper images={images} />
        </section>
      </div>
    </main>
  );
}
