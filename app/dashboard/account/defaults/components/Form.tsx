"use client";

import React from "react";
import Input from "../../me/components/Input";
import Image from "next/image";
import Selection from "../../me/components/Selection";
import { languages } from ".";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { IUser } from "@/types/IUser";
import { IReduxValue } from "@/types/redux";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";

const defaultsSchema = z
  .object({
    defaultVoiceLanguage: z.string(),
    defaultTemplateLanguage: z.string(),
  })
  .required();

export default function DefaultsForm() {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const form = useForm<z.infer<typeof defaultsSchema>>({
    resolver: zodResolver(defaultsSchema),
    defaultValues: {
      defaultVoiceLanguage: user.defaultVoiceLanguage ?? "English(USA)",
      defaultTemplateLanguage: user.defaultTemplateLanguage ?? "English(USA)",
    },
  });
  const router = useRouter();
  const onSubmit = (values: z.infer<typeof defaultsSchema>) => {
    toast.promise(
      axios.put("/user", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      {
        loading: "Updating...",
        error: "Error updating your account data",
        success: () => {
          router.push("/auth/verify/number");
          return "Updated Account data successfully";
        },
      }
    );
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src="/main/adjustments-horizontal-colored.svg"
          alt="Adjustments"
          width={20}
          height={20}
        />
        <h1 className="text-primary-yellow font-semibold text-xl">
          Set defaults
        </h1>
      </div>
      <div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 sm:space-y-7"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <FormField
              control={form.control}
              name="defaultVoiceLanguage"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Selection
                      label="Default AI Voiceover Studio Language"
                      placeholder="English (USA)"
                      items={languages}
                      value={languages.find((v) => v.value === field.value)}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <FormField
              control={form.control}
              name="defaultVoiceLanguage"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Selection
                      label="Default Language for Templates"
                      placeholder="English (USA)"
                      items={languages}
                      value={languages.find((v) => v.value === field.value)}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
            <div className="w-full" />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-red to-primary-yellow  px-14 py-3 rounded-lg text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
