"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProfilePopup from "./ProfilePopup";
import clsx from "clsx";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IReduxValue } from "@/types/redux";
import { IUser } from "@/types/IUser";

export default function ProfileButton() {
  const isActive = true;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: any) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopupOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  });
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  return (
    <div className="relative z-[99999]" ref={popupRef}>
      <div
        onClick={() => {
          isPopupOpen ? setIsPopupOpen(false) : setIsPopupOpen(true);
        }}
        className="flex items-center gap-1 sm:gap-2 hover:bg-[#30343a]/60 py-1 sm:py-1.5 px-1 sm:px-2 cursor-pointer rounded-full transition duration-300"
      >
        <div className="relative">
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
          <div
            className={`border-2 border-white ${
              isActive ? "bg-green-500" : "bg-gray-500"
            } h-3 w-3 absolute bottom-0 right-0 rounded-full`}
          />
        </div>
        <div
          className={clsx(
            "transition duration-300",
            isPopupOpen && "rotate-180"
          )}
        >
          <Image
            src="/svgs/ic_expand_more.svg"
            alt="Moon starts"
            height={25}
            width={25}
            draggable={false}
          />
        </div>
      </div>
      <div className="relative">
        <ProfilePopup
          onClose={() => setIsPopupOpen(false)}
          isOpen={isPopupOpen}
        />
      </div>
    </div>
  );
}
