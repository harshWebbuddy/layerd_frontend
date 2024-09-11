import React from "react";
import SocialAuthButton from "../components/SocialAuthButton";

import RegistrationForm from "./components/RegistrationForm";
import Link from "next/link";
import ImageFlipper from "../components/ImageFlipper";
import PageLayout from "../components/PageLayout";
export default function page() {
  const googleIcon = "/logos/icons8-google.svg";
  const appleIcon = "/logos/icons8-apple.svg";

  const images = [
    "/authFlow/6c2e17dbefdb7be276e7096bbbba2d8d.jpeg",
    "/authFlow/625f5e2001e55afa0ff8f4d675aa9eba.jpeg",
    "/authFlow/c68d5ef96ff41fc45baa1d965600c0a2.jpeg",
  ];

  return (
    <main className="bg-black/90 backdrop-blur-2xl w-full min-w-screen h-full min-h-screen flex justify-center items-center">
      <div className="flex items-center gap-20 xl:gap-32 p-3 sm:p-4 w-full sm:w-auto justify-center">
        <section className="w-full sm:min-w-[450px] max-w-[450px] sm:max-w-[500px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Sign up</h1>
            <p className="text-white/80">
              Register to login to your admin panel
            </p>
            <div className="flex gap-2 sm:gap-4 mt-1">
              <SocialAuthButton
                image={googleIcon}
                title="Sign up with google"
              />
              <SocialAuthButton image={appleIcon} title="Sign up with apple" />
            </div>
          </div>
          <RegistrationForm />
          <div className="mt-6">
            <p className="text-white/50 text-sm sm:text-base">
              Have an account?{" "}
              <Link
                href={"/auth/login"}
                className="capitalize text-white font-semibold cursor-pointer"
              >
                Sign in
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
