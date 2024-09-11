"use client";

import React from "react";
import Input from "./Input";
import PhoneNumberInput from "./PhoneNumberInput";
import { countryList } from "@/app/(site)/contact-us/constants";
import Selection from "./Selection";

export default function EditProfileForm() {
  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-primary-yellow  text-xl">Edit Profile</h1>
      <div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
      <form onSubmit={submitHandler} className="space-y-4 sm:space-y-7">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            id="firstName"
            label="first name"
            disabled={false}
            placeholder="First Name"
            required={true}
            type="text"
            defaultValue="Sheraz"
          />
          <Input
            id="lastName"
            label="first name"
            disabled={false}
            placeholder="Last Name"
            required={true}
            type="text"
            defaultValue="Ahmed"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            id="email"
            label="Email Address"
            disabled={false}
            placeholder="Email Address"
            required={true}
            type="email"
            defaultValue="sherazahmedofficial@gmail.com"
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
          <Input
            id="companyName"
            label="company name"
            disabled={false}
            placeholder="Company Name"
            required={true}
            type="text"
            defaultValue="XYZ"
          />
        </div>
        <Input
          id="companyWebsite"
          label="company website"
          disabled={false}
          placeholder="Company Website"
          required={true}
          type="text"
          defaultValue="sherazahmed.com"
        />
        <Input
          id="addressLine"
          label="Address Line"
          disabled={false}
          placeholder="Address Line"
          required={true}
          type="text"
          defaultValue="House # xyz, Block xyz. xyz "
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            id="city"
            label="city"
            disabled={false}
            placeholder="city"
            required={true}
            type="text"
            defaultValue="Lahore"
          />
          <Input
            id="postalCode"
            label="postal Code"
            disabled={false}
            placeholder="Postal Code"
            required={true}
            type="text"
            defaultValue="54900"
          />
          <Selection
            id="country"
            items={countryList}
            label="Country"
            placeholder="Country"
            required={true}
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
    </div>
  );
}
