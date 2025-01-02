 
import React from "react";

interface SelectionProps {
  id: string;
  label?: string;
  required?: boolean;
  items: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Selection({
  id,
  label,
  required = false,
  items,
  placeholder,
  value,
  onChange,
}: SelectionProps) {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-[#32323280] rounded-lg ring-[#514E4E] ring-1 focus:ring-white/50 transition duration-200 h-[50px] px-3 outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
