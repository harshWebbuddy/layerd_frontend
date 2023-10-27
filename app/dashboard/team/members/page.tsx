import Image from "next/image";
import React from "react";
import SearchFilter from "./components/SearchFilter";
import { memberTabs } from "./components/constants";
import Chart from "../../account/components/Chart";
import clsx from "clsx";
import Pagination from "../../components/Pagination";
import Link from "next/link";

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
		<section className="p-2 sm:px-7 sm:pr-10 space-y-4 sm:space-y-10">
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-4 sm:p-10">
				<div className="flex flex-col xl:flex-row gap-10 xl:items-center">
					<div className="w-full lg:max-w-sm rounded-lg p-6 space-y-3 text-center bg-gradient-to-br from-white/10 to-[#8f8f8f10]">
						<h1 className="text-white">
							<span className="text-primary-yellow font-bold text-5xl">0</span>
							Members
						</h1>
						<p className="text-sm">
							Manage your team members and review their credit usage
						</p>
						<p className="text-sm !mb-6">You can add up to 2 team members</p>

						<Link href="/dashboard/team/new">
							<button className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm">
								Add Team Members
							</button>
						</Link>
					</div>
					<div className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-4 sm:p-10">
				<div className="flex flex-col sm:flex-row justify-between">
					<h1 className="text-primary-yellow capitalize text-xl font-bold">
						My Team Members
					</h1>
					<SearchFilter />
				</div>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
				<div className="overflow-x-auto">
					<div className="flex w-full justify-between">
						{memberTabs.map((tab, index) => (
							<div
								className="flex gap-2 cursor-pointer min-w-[200px]"
								key={index}>
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
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-3 sm:p-6 space-y-5 mt-6">
				<div className="flex items-start gap-x-2">
					<Image
						src={"/main/image-colored.svg"}
						alt="Stat-image"
						width={25}
						height={25}
					/>
					<h1 className="text-lg sm:text-xl font-semibold ">
						<span className="text-primary-yellow">
							Words & Images Generated
						</span>
						<span className="text-white/80"> (Current Year)</span>
					</h1>
				</div>
				<Chart />
			</div>
		</section>
	);
}
