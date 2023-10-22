import React from "react";
import { writingTabs } from "../components/constants/writingTabs";
import Image from "next/image";
import { templates } from "./constants/Templates";
import Card from "./components/Card";

export default function page() {
	return (
		<section className="bg-[url('/main/background-image-writing.png')] bg-cover bg-center absolute inset-0 w-full h-full pt-16 sm:pt-32 px-2 md:px-7 text-sm">
			<h1 className="text-primary-yellow text-3xl font-semibold leading-loose">
				Templates
			</h1>
			<p className="capitalize text-white/80">
				Seeking that perfect content? Look no further! get ready to explore out
				fantastic lineup of templates
			</p>
			<div className="flex gap-x-2 md:gap-x-4 gap-y-3 flex-wrap mt-4">
				{writingTabs.map((tab, index) => (
					<div
						key={index}
						className="flex gap-3 bg-[#2F3133]/90 py-1.5 px-4 rounded-full ring-1 ring-[#2F3133] hover:bg-[#393b3d]/90 transition duration-300 cursor-pointer">
						{tab.icon && (
							<Image
								src={tab.icon}
								alt="Icon"
								width={30}
								height={30}
								className="w-4 md:w-5 h-4 md:h-5 object-cover"
							/>
						)}
						<p className="text-sm capitalize">{tab.title}</p>
					</div>
				))}
			</div>

			<form>
				<div className="bg-[#323232]/70 ring-1 ring-[#514E4E] h-12 rounded-lg flex items-center gap-2 p-0.5 border-bottom-gradient mt-6">
					<div className="cursor-pointer grid place-content-center h-full mx-2 my-0.5 p-1.5 rounded-md transition duration-300">
						<Image
							src="/main/search.svg"
							alt="logo"
							width={20}
							height={20}
							draggable={false}
						/>
					</div>
					<input
						type="text"
						className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
						placeholder="search for a template"
					/>
				</div>
			</form>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2 mt-3">
				{templates.map((template, index) => (
					<Card template={template} key={index} />
				))}
			</div>
		</section>
	);
}
