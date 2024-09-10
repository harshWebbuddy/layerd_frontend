"use client";

import React from "react";
import Button from "../../components/Button";
import FormInput from "../../components/Input";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,}$/,
        {
          message: "Enter strong password.",
        }
      ),
    confirmPassword: z.string(),
    termsAndConditions: z.literal(true),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function RegistrationForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    toast.promise(
      axios.post("/auth/register", {
        email: values.email,
        password: values.password,
        termsAndConditions: values.termsAndConditions,
      }),
      {
        loading: "Signing up",
        error: (error) => {
          return (
            error?.response?.data?.stackTrace ?? "Error signing in"
          );
        },
        success: () => {
          router.push("/auth/verify/email");
          return "Signed up";
        },
      }
    );
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
          <div className="flex gap-2 sm:gap-4 w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
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
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <FormControl>
                    <FormInput
                      id="password-repeat"
                      label="Repeat password"
                      type="password"
                      required={true}
                      placeholder="Repeat"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="termsAndConditions"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 mt-10">
                <FormControl>
                  <Checkbox
                    className="mt-2"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel
                  htmlFor="checkbox"
                  className="text-white/50 text-xs sm:text-base"
                >
                  I have read and accept terms & conditions
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
}
