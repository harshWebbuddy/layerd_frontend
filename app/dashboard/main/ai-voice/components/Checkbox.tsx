import React from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked?: boolean;
  onChange?: () => void;
}

export default function Checkbox({
  label,
  id,
  checked = false,
  onChange,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-primary-orange"
      />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
}
