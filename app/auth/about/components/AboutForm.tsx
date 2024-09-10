"use client";

import React from "react";
import FormInput from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { IUser } from "@/types/IUser";

const aboutSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Firstname must greater than 3 characters." }),
  lastname: z.string().min(3, {
    message: "Lastname must be greater than 3 characters",
  }),
});

export default function AboutForm({ user }: { user?: IUser }) {
  const router = useRouter();
  const form = useForm<z.infer<typeof aboutSchema>>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      firstname: user?.firstname ?? "",
      lastname: user?.lastname ?? "",
    },
  });

  const onSubmit = async (values: z.infer<typeof aboutSchema>) => {
    toast.promise(axios.put("/user", values), {
      loading: "Updating...",
      error: "Error updating your account data",
      success: () => {
        router.push("/auth/verify/number");
        return "Updated Account data successfully";
      },
    });
  };
  return (
    <Form {...form}>
      <form
        className="space-y-10 mt-10 w-full sm:min-w-[400px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    id="firstname"
                    label="First name"
                    placeholder="First name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="Last name"
                    placeholder="Last name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </div>
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
}
