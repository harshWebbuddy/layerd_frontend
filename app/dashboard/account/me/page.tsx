import React from "react";
import EditProfileForm from "./components/EditProfileForm";

export default function page() {
  return (
    <div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg px-4 py-10 sm:p-10">
      <EditProfileForm />
    </div>
  );
}
