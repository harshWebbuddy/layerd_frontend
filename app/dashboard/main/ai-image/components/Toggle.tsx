"use client";
import { Switch } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
interface Props {
	label?: string;
	defaultEnabled?: boolean;
	isInversed?: boolean;
}
export default function ToggleButton({
	label,
	defaultEnabled,
	isInversed,
}: Props) {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		setEnabled(defaultEnabled!);
	}, []);

	return (
		<div
			className={`flex gap-2 ${isInversed && "flex-row-reverse items-center"}`}>
			<Switch checked={enabled} onChange={setEnabled} as={Fragment}>
				{({ checked }) => (
					<button
						className={`${
							checked
								? "bg-[#FDBB14]"
								: "bg-transparent ring-1 ring-white/70 ring-inset"
						} relative inline-flex h-[26px] w-[48px] items-center rounded-full`}>
						<span className="sr-only">Enable notifications</span>
						<span
							className={`${
								checked ? "translate-x-[26px]" : "translate-x-1"
							} inline-block h-[18px] w-[18px] transform rounded-full bg-white transition`}
						/>
					</button>
				)}
			</Switch>
			{label && (
				<p className="block leading-6 text-white/80 capitalize text-sm sm:text-base font-bold">
					{label}
				</p>
			)}
		</div>
	);
}
