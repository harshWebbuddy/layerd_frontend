"use client";

import Image from "next/image";

import React from "react";
import Selection from "../../ai-voice/components/Selection";
import { languages } from "@/app/dashboard/account/defaults/components";

export default function Form() {
	return (
		<form>
			<div className="space-y-4">
				<div className="border-bottom-gradient">
					<Selection
						id="Language"
						items={languages}
						label="Language"
						placeholder="English (USA)"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="description">
						What is your blog post is about?
						<span className="text-primary-red">*</span>
					</label>
					<div className="border-bottom-gradient">
						<textarea
							id="description"
							placeholder="Describe your blog post..."
							className="block w-full border-[3px] rounded-lg border-[#514E4E] h-28 outline-none bg-[#32323280] p-3 min-h-[60px]"></textarea>
					</div>
					<div className="flex justify-end text-white/70">0/600</div>
				</div>
				<div className="flex gap-3 items-end">
					<div className="border-bottom-gradient w-full">
						<Selection
							id="creativity"
							items={[
								{
									value: "High",
									label: "High",
								},
								{
									value: "Average",
									label: "Average",
								},
								{
									value: "Low",
									label: "Low",
								},
							]}
							label="Creativity"
							placeholder="Creativity"
						/>
					</div>
					<div className="border-bottom-gradient w-full">
						<Selection
							id="voiceTone"
							items={[
								{
									value: "Casual",
									label: "Casual",
								},
								{
									value: "Formal",
									label: "Formal",
								},
							]}
							label="Tone of Voice"
							placeholder="Tone of voice"
						/>
					</div>
				</div>
				<div className="flex gap-3 items-end">
					<div className="border-bottom-gradient w-full">
						<Selection
							id="maxLength"
							items={[
								{
									value: "1",
									label: "1",
								},
								{
									value: "2",
									label: "2",
								},
								{
									value: "3",
									label: "3",
								},
							]}
							label="Number of Results"
							placeholder="Select Task Type"
						/>
					</div>
					<div className="space-y-2 w-full">
						<label htmlFor="maxResults">Max Results Length</label>
						<div className="border-bottom-gradient">
							<input
								id="maxResults"
								placeholder="Audio File"
								value={1000}
								className="block w-full border-[3px] rounded-lg border-[#514E4E] h-14 outline-none bg-[#32323280] p-3"
							/>
						</div>
					</div>
				</div>
			</div>
			<button className="bg-gradient-to-br from-primary-red to-primary-yellow w-full py-3 flex justify-center items-center gap-1 mt-10 rounded-xl">
				<span className="font-semibold">Generate Text</span>
				<Image src="/main/ai/click.svg" alt="click" height={24} width={24} />
			</button>
		</form>
	);
}
