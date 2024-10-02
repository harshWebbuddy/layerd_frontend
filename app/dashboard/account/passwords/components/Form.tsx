"use client";

import React from "react";
import Image from "next/image";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import FormInput from "@/app/auth/components/Input";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/userSlice";

const passwordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,}$/,
        {
          message: "Use strong password",
        }
      ),
    confirmNewPassword: z.string(),
  })
  .required()
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function PasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const onSubmit = (values: z.infer<typeof passwordSchema>) => {
    toast.promise(
      axios.put(
        "/user/update-password",
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
        loading: "Updating...",
        error: (error) => {
          if (error?.response?.status === 401) {
            localStorage.clear();
            dispatch(setUser(null));
            router.push("/auth/login");
          }

          return "Error updating your account password";
        },
        success: () => {
          return "Updated Account password successfully";
        },
      }
    );
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src="/main/key-colored.svg"
          alt="Adjustments"
          width={25}
          height={25}
        />
        <h1 className="text-primary-yellow font-semibold text-xl">
          Change Password
        </h1>
      </div>
      <div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="Current Password"
                    placeholder="Current Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="New Password"
                    placeholder="New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="Confirm New Password"
                    placeholder="Confirm New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-transparent ring-1 ring-inset ring-white px-10 py-3 rounded-lg hover:bg-white/[0.05] transition duration-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm"
            >
              Change
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
