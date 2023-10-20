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
	placeholder?: string;
}) {
	const [selectedPerson, setSelectedPerson] = useState<ItemType | null>(null);

	return (
		<div className="w-full space-y-2 relative">
			{label && <label>{label}</label>}
			<Listbox value={selectedPerson} onChange={setSelectedPerson}>
				<Listbox.Button
					placeholder={placeholder}
					className="bg-[#32323280] w-full text-start h-[50px] ring-2 ring-[#514e4e8f] px-3 rounded-lg flex gap-2 justify-between items-center">
					<p className=" whitespace-nowrap overflow-hidden text-ellipsis">
						{selectedPerson ? (
							<span>{selectedPerson.label}</span>
						) : (
							<span className="text-white/50">{placeholder}</span>
						)}
					</p>
					<Image
						src="/chevron-down.svg"
						alt="chevron-down"
						height={18}
						width={18}
					/>
				</Listbox.Button>
				<Listbox.Options className="absolute bg-[#333] rounded-xl max-h-[300px] overflow-y-auto w-full z-50 p-1 ring-1 ring-white/10">
					{items.map((item) => (
						<Listbox.Option
							key={item.label}
							value={item}
							className="p-3 hover:bg-[#494949] rounded-md cursor-pointer">
							{item.label}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	);
}
