"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import Button from "@/app/auth/components/Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { IUser } from "@/types/IUser";
import { IReduxValue } from "@/types/redux";

const phoneNumberSchema = z.object({
  phoneNumber: z.string(),
});

export default function PhoneNumberInput() {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const form = useForm<z.infer<typeof phoneNumberSchema>>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      phoneNumber: user.phoneNumber ?? "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof phoneNumberSchema>) => {
    // router.push("/auth/verify/otp");
    toast.promise(axios.put("/user", values), {
      loading: "Updating...",
      error: "Error updating phone number.",
      success: () => {
        router.push("/dashboard/main");
        return "Phone number updated successfully.";
      },
    });
  };
  return (
    <Form {...form}>
      <div className="text-black w-full">
        <form
          className="space-y-10 mt-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <>
                <FormControl>
                  <PhoneInput
                    inputStyle={{
                      backgroundColor: "#0F0F0F",
                      width: "calc(100% - 60px)",
                      height: "100%",
                      color: "white",
                      border: "1px solid #2D2D2D",
                      paddingLeft: "10px",
                      borderRadius: "7px",
                      marginLeft: "60px",
                    }}
                    countryCodeEditable
                    containerStyle={{ width: "100%", height: "50px" }}
                    buttonStyle={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0F0F0F",
                      border: "1px solid #2D2D2D",
                      borderRadius: "7px",
                    }}
                    inputProps={{
                      required: true,
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <Button type="submit">Send Code VIA SMS</Button>
        </form>
      </div>
    </Form>
  );
}
