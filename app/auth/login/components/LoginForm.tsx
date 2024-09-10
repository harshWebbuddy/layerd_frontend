"use client";

import React from "react";
import FormInput from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetRecoilState } from "recoil";
import { emailAtom } from "@/lib/atom";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().default(false).optional(),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
	  rememberMe: false,
    },
  });

  const setEmail = useSetRecoilState(emailAtom);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    toast.promise(axios.post("/auth/login", values), {
      loading: "Signing in",
      error: (error) => {
        return error?.response?.data?.stackTrace ?? "Error signing in";
      },
      success: (res) => {
        if (res.data.success) {
          router.push("/dashboard/main");
		  return "Signed in";
        } else {
          setEmail(values.email);
          router.push("/auth/verify/email");
		  return res.data.message;
        }
      },
    });
  };
  return (
    <Form {...form}>
      <form
        className="space-y-10 mt-7 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    id="email"
                    label="email"
                    type="email"
                    placeholder="example@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    id="password"
                    label="password"
                    type="password"
                    required={true}
                    placeholder="Your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />

          <div className="flex items-center gap-2 mt-10">
            <input
              type="checkbox"
              id="checkbox"
              className="peer cursor-pointer relative h-5 w-5 shrink-0 appearance-none rounded-[4px] bg-[#0F0F0F]  border border-[#2D2D2D] after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-[#1f1f1f] hover:ring-1 hover:ring-[#3a3a3a] transition duration-300 focus:outline-none"
            />
            <label
              htmlFor="checkbox"
              className="text-white/50 text-xs sm:text-base"
            >
              Remember Me
            </label>
          </div>
        </div>
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
}
