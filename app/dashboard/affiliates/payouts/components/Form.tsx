import Input from "@/app/dashboard/team/new/components/Input";
import React from "react";

export default function Form() {
  return (
    <form className="w-full space-y-10">
      <Input
        id="amount"
        label="Total requested amount"
        placeholder="Enter Total Amount"
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
          Create
        </button>
      </div>
    </form>
  );
}
