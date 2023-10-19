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
	isFullWidth,
	isTooltipEnabled,
}: {
	id: string;
	label?: string;
	required?: boolean;
	items: ItemType[];
	placeholder: string;
	isFullWidth?: boolean;
	isTooltipEnabled?: boolean;
}) {
	const [selectedPerson, setSelectedPerson] = useState<ItemType | null>(null);

	return (
		<div
			className={`w-full space-y-2 relative flex justify-between items-center gap-4 ${
				!isTooltipEnabled && "flex-col !items-start !gap-1"
			}`}>
			{label && (
				<label className="flex w-full items-center gap-2 max-w-fit">
					<span className="capitalize font-semibold">{label}</span>
					{isTooltipEnabled && (
						<span className="cursor-pointer">
							<Image
								src="/main/ai/i.ms-2.svg"
								alt="i-ms-2"
								width={17}
								draggable={false}
								height={17}
							/>
						</span>
					)}
				</label>
			)}
			<div
				className={`relative w-full max-w-[200px] ${
					isFullWidth && "!max-w-none"
				}`}>
				<Listbox value={selectedPerson} onChange={setSelectedPerson}>
					<Listbox.Button
						placeholder={placeholder}
						className="bg-[#212327] ring-1 ring-white w-full text-start h-[40px] px-3 rounded-lg flex justify-between items-center">
						{selectedPerson ? (
							<span>{selectedPerson.label}</span>
						) : (
							<span>{placeholder}</span>
						)}
						<Image
							src="/main/ai/arrow-down.svg"
							alt="arrow-down"
							height={10}
							width={10}
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
		</div>
	);
}
