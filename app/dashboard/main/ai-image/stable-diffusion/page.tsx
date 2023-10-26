"use client";

import React, { useState } from "react";
import ToggleButton from "../components/Toggle";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import DropZone from "../components/DropZone";
import Selection from "../components/Selection";
import Checkbox from "../../ai-voice/components/Checkbox";
import Gallery from "./Gallery";

export default function page() {
	const [selectedAspect, setSelectedAspect] = useState<string>("1:1");
	const [numberOfResults, setNumberOfResults] = useState<number>(2);
	return (
		<div className="flex px-3 sm:px-7 gap-6">
			<section className="w-full">
				<div className="bg-[url('/main/ai/background-diffusion-ai.png')] bg-center bg-cover p-4 sm:p-7 ring-1 ring-neutral-700 ring-inset rounded-2xl">
					<form className="space-y-6">
						<div className="flex flex-col xl:flex-row justify-between xl:items-center">
							<h1 className="capitalize text-primary-yellow text-3xl font-semibold">
								stable diffusion
							</h1>
							<div className="flex flex-col sm:flex-row gap-6 sm:items-center !mt-6 sm:mt-0">
								<ToggleButton label="Show Hints" />
								<div className="flex gap-6 items-center">
									<button className="whitespace-nowrap ring-1 ring-white ring-inset bg-transparent py-3 px-8 w-full rounded-lg font-semibold hover:bg-neutral-700/30 transition duration-300">
										Prompt Assistant
									</button>
									<button className="whitespace-nowrap ring-1 ring-white ring-inset bg-transparent py-3 px-8 w-full rounded-lg font-semibold hover:bg-neutral-700/30 transition duration-300">
										Translate
									</button>
								</div>
							</div>
						</div>
						<div className="w-full">
							<textarea
								className="bg-[#3F3F4699] h-36 w-full resize-none px-4 py-3 ring-1 ring-white/80 focus:ring-white focus:ring-2 transition duration-300 rounded-xl outline-none"
								placeholder="Describe the image you want to generate"></textarea>
						</div>
						<div className="w-full flex items-center justify-between">
							<ToggleButton label="Negative Reminder" />
							<button className="bg-gradient-to-br from-primary-red to-primary-yellow py-3 px-8 rounded-lg font-semibold hover:bg-neutral-700/30 transition duration-300">
								Generate
							</button>
						</div>
					</form>
				</div>
				<div className="mt-6">
					<h1 className="text-2xl font-semibold capitalize">
						generated images
					</h1>
					<Gallery/>
				</div>
			</section>
			<section className="w-full h-fit hidden sm:block max-w-[324px] bg-[url('/main/ai/background-diffusion-ai-options.png')] bg-center bg-cover ring-1 ring-neutral-700 rounded-2xl">
				<div className="p-4">
					<p className="flex items-center gap-4 font-semibold text-lg">
						<span>Aspect Ratio</span>
						<span className="cursor-pointer">
							<Image
								src="/main/ai/i.ms-2.svg"
								alt="i-ms-2"
								width={17}
								draggable={false}
								height={17}
							/>
						</span>
					</p>
					<div className="w-full flex gap-4">
						<div className="w-full flex justify-between mt-6">
							<button
								onClick={() => setSelectedAspect("1:1")}
								className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
									selectedAspect === "1:1" && "border-gradient bg-[#212529]"
								}`}>
								<div
									className={`w-[24px] h-[24px] rounded-[6px] ${
										selectedAspect == "1:1"
											? "border-gradient-sm"
											: " border-[3px] border-white"
									}`}
								/>
								<span
									className={`${
										selectedAspect == "1:1" &&
										"text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
									}`}>
									1:1
								</span>
							</button>
							<button
								onClick={() => setSelectedAspect("4:3")}
								className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
									selectedAspect === "4:3" && "border-gradient bg-[#212529]"
								}`}>
								<div
									className={`w-[24px] h-[20px] rounded-[6px] ${
										selectedAspect == "4:3"
											? "border-gradient-sm"
											: " border-[3px] border-white"
									}`}
								/>
								<span
									className={`${
										selectedAspect == "4:3" &&
										"text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
									}`}>
									4:3
								</span>
							</button>
							<button
								onClick={() => setSelectedAspect("3:4")}
								className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
									selectedAspect === "3:4" && "border-gradient bg-[#212529]"
								}`}>
								<div
									className={`w-[20px] h-[24px] rounded-[6px] ${
										selectedAspect == "3:4"
											? "border-gradient-sm"
											: " border-[3px] border-white"
									}`}
								/>
								<span
									className={`${
										selectedAspect == "3:4" &&
										"text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
									}`}>
									3:4
								</span>
							</button>
							<button
								onClick={() => setSelectedAspect("16:9")}
								className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
									selectedAspect === "16:9" && "border-gradient bg-[#212529]"
								}`}>
								<div
									className={`w-[26px] h-[16px] rounded-[6px] ${
										selectedAspect == "16:9"
											? "border-gradient-sm"
											: "border-[3px] border-white"
									}`}
								/>
								<span
									className={`${
										selectedAspect == "16:9" &&
										"text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
									}`}>
									16:9
								</span>
							</button>
							<button
								onClick={() => setSelectedAspect("9:16")}
								className={`w-full flex flex-col items-center px-4 py-3 rounded-lg gap-2 ${
									selectedAspect === "9:16" && "border-gradient bg-[#212529]"
								}`}>
								<div
									className={`w-[18px] h-[26px] rounded-[6px] ${
										selectedAspect == "9:16"
											? "border-gradient-sm"
											: " border-[3px] border-white"
									}`}
								/>
								<span
									className={`${
										selectedAspect == "9:16" &&
										"text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-primary-yellow"
									}`}>
									9:16
								</span>
							</button>
						</div>
					</div>
					<div className="space-y-6 mt-10">
						<div className="flex gap-2">
							<Slider defaultValue={[33]} max={100} step={1} />
							<p className="w-full">
								Width <span>{}</span> pixel
							</p>
						</div>
						<div className="flex gap-2">
							<Slider defaultValue={[33]} max={100} step={1} />
							<p className="w-full">
								Width <span>{}</span> pixel
							</p>
						</div>
					</div>
				</div>
				<div className="border-t border-[#ffffff56] mt-4 p-5">
					<h1 className="font-semibold">Number of pictures</h1>
					<div className="flex mt-2 gap-4">
						{Array(4)
							.fill(null)
							.map((_, index) => (
								<div
									key={index}
									onClick={() => setNumberOfResults(index + 1)}
									className={`w-full max-w-[60px] h-[60px] grid place-content-center cursor-pointer rounded-md ${
										index + 1 === numberOfResults
											? "border-gradient bg-[#212529]"
											: "hover:bg-slate-600/50 "
									}`}>
									{index + 1}
								</div>
							))}
					</div>
				</div>
				<div className="border-t border-[#ffffff56] border-dashed mt-4 p-5">
					<DropZone />
				</div>
				<div className="border-t border-[#ffffff56] border-dashed mt-4 p-5">
					<h1 className="font-semibold">Model</h1>
					<p className="capitalize text-[#6C757D]">main model</p>
					<div className="flex justify-between gap-2 bg-[#72727280] p-2 pr-4 rounded-md mt-3 cursor-pointer">
						<div className="flex gap-2 items-center">
							<Image
								src="/main/ai/dark-suchi.png"
								alt="suchi"
								width={200}
								height={100}
								className="w-[50px] h-[50px] object-cover rounded-md"
							/>
							<p>Dark Sushi Mix</p>
						</div>
						<Image
							src="/main/ai/play-button.svg"
							alt="play"
							width={15}
							height={15}
						/>
					</div>
					<div className="space-y-6 mt-10">
						<h1 className="font-semibold capitalize text-lg">
							advanced settings
						</h1>
						<Selection
							id="sampler"
							items={[
								{
									value: "Fuler A",
									label: "Fuler B",
								},
							]}
							placeholder="Select sample"
							label="Sampler"
						/>
						<div className="flex justify-between gap-2">
							<label className="flex w-full items-center gap-2 max-w-fit">
								<span>Step</span>
								<span className="cursor-pointer">
									<Image
										src="/main/ai/i.ms-2.svg"
										alt="i-ms-2"
										width={17}
										draggable={false}
										height={17}
									/>
								</span>
							</label>
							<Slider defaultValue={[33]} max={100} step={1} />
						</div>
						<div className="flex justify-between gap-2">
							<label className="flex w-full items-center gap-2 max-w-fit">
								<span>CFG ratio</span>
								<span className="cursor-pointer">
									<Image
										src="/main/ai/i.ms-2.svg"
										alt="i-ms-2"
										width={17}
										draggable={false}
										height={17}
									/>
								</span>
							</label>
							<Slider defaultValue={[33]} max={100} step={1} />
						</div>
						<div className="flex justify-between gap-2">
							<label className="flex w-full items-center gap-2 max-w-fit">
								<span>clip skip</span>
								<span className="cursor-pointer">
									<Image
										src="/main/ai/i.ms-2.svg"
										alt="i-ms-2"
										width={17}
										draggable={false}
										height={17}
									/>
								</span>
							</label>
							<Slider defaultValue={[33]} max={100} step={1} />
						</div>
						<div className="flex justify-between gap-2">
							<label className="flex w-full items-center gap-2 max-w-fit">
								<span>Seed</span>
								<span className="cursor-pointer">
									<Image
										src="/main/ai/i.ms-2.svg"
										alt="i-ms-2"
										width={17}
										draggable={false}
										height={17}
									/>
								</span>
							</label>
							<input className="bg-[#212529] h-[35px] px-3 outline-none w-full rounded-md max-w-[200px]" />
						</div>
						<div className="flex justify-between gap-2">
							<label className="flex w-full items-center gap-2 max-w-fit">
								<span>ENSD</span>
								<span className="cursor-pointer">
									<Image
										src="/main/ai/i.ms-2.svg"
										alt="i-ms-2"
										width={17}
										draggable={false}
										height={17}
									/>
								</span>
							</label>
							<input className="bg-[#212529] h-[35px] px-3 outline-none w-full rounded-md max-w-[200px]" />
						</div>
						<Checkbox id="hires-fix" label="Hires.fix" />
						<div className="flex justify-end">
							<button
								type="reset"
								className="bg-gradient-to-br from-primary-red to-primary-yellow h-[50px] w-[100px] rounded-md capitalize font-semibold">
								reset
							</button>
						</div>
					</div>
				</div>
				<div className="border-t border-white mt-5 p-5 space-y-6">
					<h1 className="capitalize font-semibold text-lg">control network</h1>
					<DropZone />
					<div>
						<div className="flex w-full gap-6">
							<Checkbox id="check-preprocessor" label="Enable" />
							<Selection
								id="select-preprocessor"
								items={[
									{
										label: "Canny",
										value: "Canny",
									},
									{
										label: "Lorem",
										value: "Lorem",
									},
								]}
								placeholder="Select"
								isFullWidth={true}
							/>
						</div>
						<span className="text-[#6C757D]">Preprocessor</span>
					</div>
					<div className="flex justify-between gap-2">
						<label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
							control weight
						</label>
						<Slider defaultValue={[33]} max={100} step={1} />
					</div>
					<div className="flex justify-between gap-2">
						<label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
							initial control step
						</label>
						<Slider defaultValue={[33]} max={100} step={1} />
					</div>
					<div className="flex justify-between gap-2">
						<label className="flex w-full items-center gap-2 capitalize whitespace-normal max-w-[150px]">
							end control step
						</label>
						<Slider defaultValue={[33]} max={100} step={1} />
					</div>
					<div className="!mt-10 space-y-6">
						<Selection
							id="select-preprocessor"
							items={[
								{
									label: "Canny",
									value: "Canny",
								},
								{
									label: "Lorem",
									value: "Lorem",
								},
							]}
							placeholder="Select"
							label="control mode"
							isFullWidth={true}
							isTooltipEnabled={false}
						/>
						<Selection
							id="select-preprocessor"
							items={[
								{
									label: "Canny",
									value: "Canny",
								},
								{
									label: "Lorem",
									value: "Lorem",
								},
							]}
							placeholder="Select"
							label="adjustment mode"
							isFullWidth={true}
							isTooltipEnabled={false}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
