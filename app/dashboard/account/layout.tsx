"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import ProfileDetail from "./components/ProfileDetail";
import { useSelector } from "react-redux";
import { IReduxValue } from "@/types/redux";
import { IUser } from "@/types/IUser";
import { FaUserAlt } from "react-icons/fa";
import displayNumber from "@/utils/displayNumber";

export default function layout({ children }: { children: ReactNode }) {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const plans = [
    {
      title: "Search Engine",
      plans: displayNumber(user.queries) + " queries",
    },
    {
      title: "Words Per Month",
      plans: displayNumber(user.wordsPerMonth),
    },
    {
      title: "Images Per Month",
      plans: displayNumber(user.imagesPerMonth),
    },
    {
      title: "10 Writing",
      plans: displayNumber(user.writing),
    },
  ];
  const options = [
    {
      link: "/dashboard/account/me",
      image: "/main/user.svg",
      title: "Update profile",
    },
    {
      link: "/dashboard/account/defaults",
      image: "/main/adjustments-horizontal.svg",
      title: "set defaults",
    },
    {
      link: "/dashboard/account/passwords",
      image: "/main/key.svg",
      title: "Change password",
    },
    {
      link: "/dashboard/account/2fa-authentication",
      image: "/main/lock-access.svg",
      title: "2FA Authentication",
    },
    {
      link: "/dashboard/account/delete",
      image: "/main/delete.svg",
      title: "Delete Account",
    },
  ];
  return (
    <section className="mx-3 sm:mx-10">
      <h1 className="text-white text-3xl font-semibold">My Account</h1>
      <div className="flex flex-col xl:flex-row items-start gap-10 mt-6">
        <div className="w-full xl:max-w-md flex flex-col gap-4">
          <div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-2 sm:p-6">
            <div className="flex flex-col gap-2 items-center">
              {user.profile ? (
                <div className="bg-[#7367F0] rounded-full overflow-hidden">
                  <img
                    src={user.profile}
                    alt="Moon starts"
                    height={32}
                    width={32}
                    draggable={false}
                  />
                </div>
              ) : (
                <FaUserAlt size={25} />
              )}
              {user.firstname && (
                <>
                  <h1 className="capitalize text-2xl text-primary-yellow font-semibold">
                    {user.firstname} {user.lastname}
                  </h1>
                  {user.role && (
                    <h2 className="text-white font-semibold">{user.role}</h2>
                  )}
                  <div className="bg-gradient-to-r from-[#FFFFFF00] via-[#ffffff62] to-[#ffffff00] h-[2px] w-full my-4" />
                </>
              )}
            </div>
            <div className="grid grid-cols-1 min-[300px]:grid-cols-2  mt-2 gap-6">
              {plans.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h1 className="capitalize text-primary-yellow text-lg font-semibold">
                    {item.plans}
                  </h1>
                  <h2 className="capitalize text-sm">{item.title}</h2>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 mt-8">
              {options.map((option, index) => (
                <Link
                  href={option.link}
                  className="flex gap-3 items-center p-3 hover:bg-[#ffffff0c] rounded-lg transition capitalize"
                  key={index}
                >
                  <Image
                    src={option.image}
                    alt="Image"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  <h1 className="text-sm">{option.title}</h1>
                </Link>
              ))}
            </div>
          </div>
          <ProfileDetail />
        </div>
        {children}
      </div>
    </section>
  );
}
