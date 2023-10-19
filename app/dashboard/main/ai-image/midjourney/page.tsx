"use client";

import React, { useState } from "react";
import ToggleButton from "../components/Toggle";
import Image from "next/image";
import clsx from "clsx";

export default function page() {
	const [numberOfResults, setNumberOfResults] = useState<number>(2);
	const [selectedResolution, setSelectedResolution] = useState("2:3");
	const [selectedVersion, setSelectedVersion] = useState("U1");
	const imageVersions = ["U1", "U2", "U3", "U4", "V1", "V2", "V3", "V4"];
	return (
		<section className="absolute inset-0 bg-[url('/main/ai/background-midjourney.png')] bg-cover center bg-no-repeat">
			<div className="w-full h-full flex justify-center items-center">
				<div className="flex gap-7 max-w-4xl w-full">
					<form className="bg-[url('/main/ai/background-diffusion-ai-options.png')] bg-center rounded-2xl ring-1 ring-neutral-600 bg-no-repeat bg-cover w-full max-w-[352px]">
						<div className=" p-6 ">
							<h1 className="font-semibold">Midway Trip Advance</h1>
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
						<div className=" p-6 border-t border-white">
							<h1 className="font-semibold">Resolution</h1>
							<div className="w-full grid grid-cols-5 gap-2 mt-6">
								<button
									type="button"
									onClick={() => setSelectedResolution("1:1")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "1:1" &&
										"border-gradient bg-[#212529]"
									}`}>
									1:1
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("2:3")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "2:3" &&
										"border-gradient bg-[#212529]"
									}`}>
									2:3
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("3:2")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "3:2" &&
										"border-gradient bg-[#212529]"
									}`}>
									3:2
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("4:3")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "4:3" &&
										"border-gradient bg-[#212529]"
									}`}>
									4:3
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("3:4")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "3:4" &&
										"border-gradient bg-[#212529]"
									}`}>
									3:4
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("16:9")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "16:9" &&
										"border-gradient bg-[#212529]"
									}`}>
									16:9
								</button>
								<button
									type="button"
									onClick={() => setSelectedResolution("9:16")}
									className={`flex flex-col items-center px-3 py-3 rounded-lg gap-2 ${
										selectedResolution === "9:16" &&
										"border-gradient bg-[#212529]"
									}`}>
									9:16
								</button>
							</div>
						</div>
						<div className="border-t border-white p-6 space-y-6">
							<div className="flex justify-between">
								<p>Styling</p>
								<div className="flex gap-2">
									<p>Closed</p>
									<ToggleButton />
								</div>
							</div>
							<div className="flex justify-between">
								<p>Image Weight (iw)</p>
								<div className="flex gap-2">
									<p>Closed</p>
									<ToggleButton />
								</div>
							</div>
							<div className="flex justify-between">
								<p>Seed</p>
								<div className="flex gap-2">
									<p>Closed</p>
									<ToggleButton />
								</div>
							</div>
							<div className="flex justify-between">
								<p>Seed</p>
								<div className="flex gap-2">
									<p>Closed</p>
									<ToggleButton />
								</div>
							</div>
						</div>
					</form>
					<div className="space-y-4 w-full">
						<h1 className="text-3xl font-semibold">Creations</h1>
						<div className="grid grid-cols-2">
							{[
								"/dummy/95f97bdf14dbc7e9ec1e2f41194055f9.png",
								"/dummy/eb926cbb114f0e84b6c8b0db47adc015.png",
								"/dummy/fc376bde9e4aed0844b8a5d6556dddd7.png",
								"/dummy/fc8345fa69b53317fa464aeed1e0832c.png",
							].map((item, index) => (
								<div className="group relative">
									<div className="ring-1 ring-white rounded-full p-3 w-fit grid place-content-center absolute top-2 right-2 bg-transparent group-hover:bg-primary-red group-hover:ring-0 transition-all duration-300 cursor-pointer">
										<Image
											src="/main/ai/download.svg"
											alt=""
											width={22}
											height={22}
										/>
									</div>
									<Image
										src={item}
										key={index}
										alt="image"
										width={1000}
										height={1000}
										className={clsx(
											"",
											index === 0 && "rounded-tl-2xl",
											index === 1 && "rounded-tr-2xl",
											index === 2 && "rounded-bl-2xl",
											index === 3 && "rounded-br-2xl"
										)}
									/>
								</div>
							))}
						</div>
						<div className="flex items-start gap-2">
							<div className="grid grid-cols-4 gap-2">
								{imageVersions.map((item, index) => (
									<button
										onClick={() => setSelectedVersion(item)}
										key={index}
										type="button"
										className={`ring-1 ring-white ring-inset py-3 px-6 rounded-md h-[40px] grid place-content-center ${
											selectedVersion === item &&
											"bg-gradient-to-br from-primary-red to-primary-yellow !ring-0"
										}`}>
										{item}
									</button>
								))}
							</div>
							<button className="ring-1 ring-white h-[40px] rounded-md w-[70px] grid place-content-center">
								<Image
									src="/main/ai/refresh.svg"
									alt="refresh"
									width={25}
									height={25}
									draggable={false}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
