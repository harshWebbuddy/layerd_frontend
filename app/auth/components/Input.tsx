import React from "react";
import clsx from "clsx";
import { FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <FormItem className={cn("w-full", className)} ref={ref}>
        <FormLabel
          htmlFor={id}
          className="block leading-6 text-white/80 capitalize text-sm sm:text-base"
        >
          {label}
        </FormLabel>
        <div className="mt-2 ">
          <Input
            {...props}
            className={
              "block w-full rounded-lg border-0 py-1.5 ring-2 ring-inset ring-neutral-800/70 outline-none bg-neutral-800/40 placeholder:text-white/50 px-4 h-[54px] text-sm focus:ring-2 focus:ring-inset focus:ring-neutral-800 transition duration-300 focus-within:bg-neutral-800/60 sm:leading-6 disabled:opacity-50 disabled:cursor-default"
            }
          />
        </div>
      </FormItem>
    );
  }
);

export default FormInput;
