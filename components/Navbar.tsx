"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import Popup from "@/app/(site)/components/Popup";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full absolute top-0 bg-transparent">
      <nav className="mx-auto max-w-[1500px] p-4 relative z-20">
        <div className="w-full flex justify-between">
          <Logo />
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="hidden sm:flex items-center justify-center bg-transparent ring-1 ring-inset ring-gray-300 max-h-12 py-2 w-28 rounded-xl hover:bg-neutral-700/30 transition capitalize"
            >
              Sign in
            </Link>
            <Link
              href="/auth/register"
              className="hidden sm:flex items-center justify-center bg-gradient-to-r from-primary-red max-h-12 to-primary-yellow py-2 w-28 rounded-xl capitalize"
            >
              Sign up
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-neutral-800 px-3 py-3 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </div>
  );
}
