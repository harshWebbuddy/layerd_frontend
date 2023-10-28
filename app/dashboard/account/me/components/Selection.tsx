"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

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
}: {
	id: string;
	label?: string;
	required?: boolean;
	items: ItemType[];
	placeholder: string;
}) {
	const [selectedPerson, setSelectedPerson] = useState<ItemType | null>(null);

	return (
		<div className="w-full space-y-2 relative">
			{label && <label className="whitespace-nowrap">{label}</label>}
			<Listbox value={selectedPerson} onChange={setSelectedPerson}>
				<Listbox.Button
					placeholder={placeholder}
					className="bg-[#454545] w-full text-start h-[50px] px-3 rounded-lg flex justify-between items-center">
					{selectedPerson ? (
						<span>{selectedPerson.label}</span>
					) : (
						<span>{placeholder}</span>
					)}
					<Image
						src="/chevron-down.svg"
						alt="chevron-down"
						height={18}
						width={18}
					/>
				</Listbox.Button>
				<Listbox.Options className="absolute bg-[#333] rounded-lg ring-1 ring-[#474646] max-h-[300px] overflow-y-auto w-full z-50 p-1">
					{items.map((item) => (
						<Listbox.Option
							key={item.label}
							value={item}
							className="p-3 hover:bg-[#494949] cursor-pointer rounded-md">
							{item.label}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	);
}
