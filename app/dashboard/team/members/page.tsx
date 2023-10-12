import Image from "next/image";
import React from "react";
import SearchFilter from "./components/SearchFilter";
import { memberTabs } from "./components/constants";
import Chart from "../../account/components/Chart";
import clsx from "clsx";
import Pagination from "../../components/Pagination";

export default function page() {
	const stats = [
		{
			title: "Documents Created",
			stat: "1 documents",
			image: "/main/documents.svg",
		},
		{
			title: "Words Generated",
			stat: "101 words",
			image: "/main/dictionary.svg",
		},
		{
			title: "Images Created",
			stat: "1 images",
			image: "/main/image.svg",
		},
		{
			title: "Voiceover Tasks",
			stat: "0 tasks",
			image: "/main/voice-note.svg",
		},
		{
			title: "Audio Transcribed",
			stat: "0 audio files",
			image: "/main/audio.svg",
		},
		{
			title: "Codes Generated",
			stat: "0 codes",
			image: "/main/code.svg",
		},
	];
	//dummy data
	let members = [];
	return (
		<section className="p-10 space-y-10">
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<div className="flex gap-10 items-center">
					<div className="w-full max-w-sm rounded-lg p-10 space-y-3 text-center bg-gradient-to-br from-white/10 to-[#8f8f8f10]">
						<h1 className="text-white">
							<span className="text-primary-yellow font-bold text-5xl">0</span>{" "}
							Members
						</h1>
						<p className="text-sm">
							Manage your team members and review their credit usage
						</p>
						<p>You can add up to 2 team members</p>
						<button className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm">
							Add Team Members
						</button>
					</div>
					<div className="w-full">
						<div className="grid grid-cols-3 gap-4 w-full">
							{stats.map((item, index) => (
								<div
									key={index}
									className="w-full p-6 flex items-center justify-between">
									<div>
										<h1 className="text-sm">{item.title}</h1>
										<h2 className="text-primary-yellow text-lg font-semibold">
											{item.stat}
										</h2>
									</div>
									<Image
										src={item.image}
										alt="Stat-image"
										width={35}
										height={35}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<div className="flex justify-between">
					<h1 className="text-primary-yellow capitalize text-xl">
						Edit Profile
					</h1>
					<SearchFilter />
				</div>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
				<div>
					<div className="flex w-full justify-between">
						{memberTabs.map((tab, index) => (
							<div className="flex gap-2 cursor-pointer" key={index}>
								<p className="text-primary-yellow font-semibold text-lg capitalize">
									{tab}
								</p>
								<Image
									src="/main/chevron-down.svg"
									alt="Search"
									width={15}
									height={15}
								/>
							</div>
						))}
					</div>
					<div>
						{members.length ? (
							<div>Members list</div>
						) : (
							<p className="p-20 text-center">
								You did not add any team members yet
							</p>
						)}
					</div>
				</div>
				<Pagination />
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<Chart />
			</div>
		</section>
	);
}
