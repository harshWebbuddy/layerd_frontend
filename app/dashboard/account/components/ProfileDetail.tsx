"use client";

import { IUser } from "@/types/IUser";
import { IReduxValue } from "@/types/redux";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function ProfileDetail() {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const path = usePathname();
  if (path !== "/dashboard/account") return;
  return (
    <div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg px-4 sm:px-6 pt-6 pb-3">
      <h1 className="capitalize text-xl text-primary-yellow font-semibold">
        Personal Details
      </h1>
      <div className="bg-gradient-to-r from-[#FFFFFF00] via-[#ffffff62] to-[#ffffff00] h-[2px] w-full my-4" />

      {Object.entries(user).map(
        ([key, value], index, entries) =>
          ![
            "_id",
            "verified",
            "writing",
            "wordsPerMonth",
            "imagesPerMonth",
            "queries",
            "defaultVoiceLanguage",
            "defaultTemplateLanguage",
          ].includes(key) && (
            <div
              key={key}
              className={clsx(
                " flex gap-2 py-3",
                index !== entries.length - 1 ? "border-b border-white/10 " : ""
              )}
            >
              <h1 className="capitalize font-semibold">
                {key.replace("N", " n")}:
              </h1>
              <h2>{value}</h2>
            </div>
          )
      )}
    </div>
  );
}
