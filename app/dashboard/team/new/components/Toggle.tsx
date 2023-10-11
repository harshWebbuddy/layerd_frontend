"use client";
import { Switch } from "@headlessui/react";
import React, { Fragment, useState } from "react";
interface Props {
	label: string;
	defaultEnabled?: boolean;
}
export default function ToggleButton({ label , defaultEnabled}: Props) {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="flex gap-2">
			<Switch checked={defaultEnabled} onChange={setEnabled} as={Fragment}>
				{({ checked }) => (
					<button
						className={`${
							checked ? "bg-[#FDBB14]" : "bg-[#939393]"
						} relative inline-flex h-5 w-[36px] items-center rounded-full`}>
						<span className="sr-only">Enable notifications</span>
						<span
							className={`${
								checked ? "translate-x-5" : "translate-x-1"
							} inline-block h-[14px] w-[14px] transform rounded-full bg-white transition`}
						/>
					</button>
				)}
			</Switch>
			<p className="block leading-6 text-white/80 capitalize">{label}</p>
		</div>
	);
}
