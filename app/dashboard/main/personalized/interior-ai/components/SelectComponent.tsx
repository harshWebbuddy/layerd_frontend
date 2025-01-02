import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

type ItemType = {
  value: string;
  label: string;
};

interface SelectComponentProps {
  items: Array<ItemType>;
  placeholder: string;
  title: string;
  defaultValue: ItemType;
  onValueChange?: (value: string) => void;
  selected?: string;
}

export function SelectComponent({
  items,
  placeholder,
  title,
  defaultValue,
  onValueChange,
  selected,
}: SelectComponentProps) {
  return (
    <Select
      defaultValue={defaultValue.value}
      value={selected || defaultValue.value}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {items.map(({ label, value }, index) => (
            <SelectItem key={index} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
