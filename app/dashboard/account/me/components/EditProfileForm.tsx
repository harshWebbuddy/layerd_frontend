"use client";

import React from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import { countryList } from "@/app/(site)/contact-us/constants";
import Selection from "./Selection";
import { useSelector } from "react-redux";
import { IReduxValue } from "@/types/redux";
import { IUser } from "@/types/IUser";
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
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import FormInput from "@/app/auth/components/Input";

const updateUserSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Firstname must greater than 3 characters." }),
  lastname: z.string().min(3, {
    message: "Lastname must be greater than 3 characters",
  }),
  email: z.string().email(),
  phoneNumber: z.string(),
  profile: z.string(),
  company: z
    .string()
    .min(1, { message: "Company name must be greater than 1 character" }),
  website: z
    .string()
    .regex(
      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
      {
        message: "Enter valid website",
      }
    ),
  city: z.string().min(3, {
    message: "City name must be greater than 3 characters",
  }),
  country: z.string(),
  postalCode: z.number(),
  addressLine: z.string().min(3, { message: "Address must be greater than 3" }),
});

export default function EditProfileForm() {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: user.email ?? "",
      firstname: user.firstname ?? "",
      lastname: user.lastname ?? "",
      addressLine: user.addressLine ?? "",
      country: user.country ?? "",
      city: user.city ?? "",
      website: user.website ?? "",
      company: user.company ?? "",
      phoneNumber: user.phoneNumber ?? "",
      profile: user.profile ?? "",
      postalCode: user.postalCode,
    },
  });
  const onSubmit = (values: z.infer<typeof updateUserSchema>) => {
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
          return "Updated Account data successfully";
        },
      }
    );
  };
  return (
    <div>
      <h1 className="text-primary-yellow  text-xl">Edit Profile</h1>
      <div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-7"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormInput
                      label="first name"
                      placeholder="First Name"
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
                      label="first name"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormInput
                      label="Email Address"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
            <div className="edit-form w-full">
              <PhoneNumberInput />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <p className="capitalize text-sm mb-3">Choose an Avatar</p>
              <label htmlFor="file-image" className="cursor-pointer">
                <div className="flex h-[48px]  rounded-lg overflow-hidden">
                  <div className="bg-[#454545] w-full flex items-center pl-4 text-sm text-white/70 h-full ">
                    Choose
                  </div>
                  <button className="bg-gradient-to-r from-[#EC2227] to-[#FDBB14] px-10 text-sm">
                    Browse
                  </button>
                </div>
              </label>
              <input type="file" className="hidden" id="file-image" />
            </div>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormInput
                      label="company name"
                      placeholder="Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="company website"
                    placeholder="Company Website"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="addressLine"
            render={({ field }) => (
              <>
                <FormControl>
                  <FormInput
                    label="Address Line"
                    placeholder="Address Line"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormInput label="city" placeholder="city" {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormInput
                      label="postal Code"
                      placeholder="Postal Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Selection
                      items={countryList}
                      label="Country"
                      placeholder="Country"
                      value={countryList.find((v) => v.value === field.value)}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              )}
            />
          </div>
          <div className="flex justify-end gap-4 !mt-10 sm:mt-0">
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
              Update
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
