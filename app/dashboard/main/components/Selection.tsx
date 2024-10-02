"use client";

import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import clsx from "clsx";

type ItemType = {
  value: string;
  label: string;
};
export default function Selection({
  id,
  label,
  items,
  required,
  placeholder,
  isActive,
  onChange,
}: {
  id: string;
  label?: string;
  required?: boolean;
  items: ItemType[];
  placeholder: string;
  isActive?: boolean;
  onChange?: (value: string) => void;
}) {
  const [selectedPerson, setSelectedPerson] = useState(items[0]);

  useEffect(() => {
    if (selectedPerson && onChange) {
      onChange(selectedPerson.value);
    }
  }, [selectedPerson]);

  return (
    <div className="w-full space-y-2 relative">
      <label>{label}</label>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button
          className={clsx(
            "bg-gradient-to-br from-[#ffffff0e] to-[#8f8f8f0f] w-full text-start h-[54px] px-3 rounded-lg flex justify-between items-center",
            isActive && "border-gradient"
          )}
        >
          <span className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedPerson.label}
          </span>
          <Image
            src="/chevron-down.svg"
            alt="chevron-down"
            height={18}
            width={18}
          />
        </Listbox.Button>
        <Listbox.Options className="absolute bg-[#333] max-h-[300px] overflow-y-auto w-full z-50 p-1 rounded-md">
          {items.map((item) => (
            <Listbox.Option
              key={item.label}
              value={item}
              className="p-2 hover:bg-[#494949] cursor-pointer rounded-sm"
            >
              {item.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
