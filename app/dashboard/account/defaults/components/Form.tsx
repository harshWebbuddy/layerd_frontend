"use client";

import React from "react";
import Input from "../../me/components/Input";
import Image from "next/image";
import Selection from "../../me/components/Selection";
import { languages } from ".";

export default function Form() {
	const submitHandler = (e: any) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="flex items-center gap-2">
				<Image
					src="/main/adjustments-horizontal-colored.svg"
					alt="Adjustments"
					width={20}
					height={20}
				/>
				<h1 className="text-primary-yellow font-semibold text-xl">
					Set defaults
				</h1>
			</div>
			<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
			<form onSubmit={submitHandler} className="space-y-2 sm:space-y-7">
				<div className="flex flex-col sm:flex-row gap-8">
					<Selection
						id="ai-voice-language"
						label="Default AI Voiceover Studio Language"
						placeholder="English (USA)"
						required={false}
						items={languages}
					/>
					<Selection
						id="ai-voice-language"
						label="Default AI Voiceover Studio Voice"
						placeholder="Set Default Voice"
						required={false}
						items={languages}
					/>
				</div>
				<div className="flex flex-col sm:flex-row gap-8">
					<Selection
						id="ai-voice-language"
						label="Default Language for Templates"
						placeholder="English (USA)"
						required={false}
						items={languages}
					/>
					<div className="w-full" />
				</div>
				<div className="flex justify-end gap-4">
					<button
						type="submit"
						className="bg-gradient-to-r from-primary-red to-primary-yellow  px-14 py-3 rounded-lg text-sm">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
