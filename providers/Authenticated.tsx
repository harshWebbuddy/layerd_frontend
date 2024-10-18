"use client";

import React from "react";
import { ClipLoader } from "react-spinners";
import { useOnMountUnsafe } from "@/hooks/useOnMountUnsafe";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/types/IUser";
import { setUser } from "@/features/userSlice";
import { IReduxValue } from "@/types/redux";

const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const dispatch = useDispatch()
  useOnMountUnsafe(() => {
    console.log(process.env)
    axios
      .get("/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(setUser(res.data.user));
      })
      .catch(() => {
        router.push("/auth/login");
      });
  });
  return !user ? (
    <div className="flex items-center justify-center w-full h-screen">
      <ClipLoader color="#EC2227" />
    </div>
  ) : (
    children
  );
};

export default Authenticated;
