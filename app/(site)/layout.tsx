"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useGoogleOneTapLogin } from "@react-oauth/google";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <main className="bg-[url('/grains.png')] bg-cover overflow-hidden">
      <div className="bg-[#1E1E26]/60 w-full h-full min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
