import Image from "next/image";
import React from "react";
import Selection from "../../../ai-voice/components/Selection";

export default function page() {
	const dummyImages = [
		"/dummy/96999aa6c94dccf31a23ddb72a89ca8e.png",
		"/dummy/4460a28f9925db1cd279bb37902077eb.png",
		"/dummy/f25bc0f239c1992e9c6b7a53317a7395.png",
		"/dummy/b7d14a61dca6782f638ee9eaa4985b89.png",
		"/dummy/b23513d286f04b0e70439fbb27fc5918.png",
	];
	const subjectType = [
		{
			value: "Man",
			label: "Man",
		},
		{
			value: "Women",
			label: "Women",
		},
		{
			value: "Child",
			label: "Child",
		},
		{
			value: "Dog",
			label: "Dog",
		},
		{
			value: "Cat",
			label: "Cat",
		},
		{
			value: "Couple",
			label: "Couple",
		},
		{
			value: "Family",
			label: "Family",
		},
	];

	return (
		<section className="max-w-7xl mx-auto w-full space-y-14">
			<div className="flex justify-between">
				<h1 className="capitalize text-2xl text-primary-yellow font-semibold">
					Create A New Studio
				</h1>
				<button className="bg-primary-red px-3 py-1.5 rounded-sm">
					Prompt
				</button>
			</div>
			<div className="flex gap-7">
				{dummyImages.map((image, index) => (
					<div
						key={index}
						className="relative shadow-xl shadow-[#ffb70030] rounded-xl">
						<Image
							src={image}
							alt="image"
							width={1000}
							height={1000}
							className="w-[180px] h-[180px] object-cover rounded-xl"
						/>
						<Image
							src="/main/check-circle.svg"
							alt="image"
							width={35}
							height={35}
							className="absolute -top-3 -right-3 cursor pointer"
						/>
						<Image
							src="/main/delete-circle.svg"
							alt="image"
							width={35}
							height={35}
							className="absolute -bottom-3 -right-3 cursor pointer"
						/>
					</div>
				))}
			</div>
			<div className="flex items-center gap-4">
				<div className="w-full space-y-1.5">
					<label htmlFor="studioName">Name</label>
					<div className=" ring-inset ring-[#514E4E] ring-[2px] rounded-xl">
						<div className="border-bottom-gradient h-[54px] rounded-xl">
							<input
								id="studioName"
								placeholder="Studio Name"
								className="block w-full rounded-xl h-full outline-none bg-[#323232] p-3"
							/>
						</div>
					</div>
				</div>
				<div className="w-full space-y-1.5">
					<label htmlFor="Subject Type">Subject Type</label>
					<div className="border-bottom-gradient !bg-[#323232] rounded-lg w-full transform rotate-180">
						<div className="transform -rotate-180">
							<Selection
								id="SubjectType"
								items={subjectType}
								placeholder="Subject Type"
							/>
						</div>
					</div>
				</div>
				<button className="w-full h-[54px] self-end max-w-[220px] bg-gradient-to-br from-primary-red to-primary-yellow flex justify-center items-center gap-2 rounded-lg">
					<span className="font-semibold">Create Your Studio</span>
					<Image src="/main/ai/click.svg" alt="click" width={20} height={20} />
				</button>
			</div>
			<div>
				<h1 className="capitalize text-2xl font-semibold">My Studio</h1>
				<div className="mt-3 bg-[url('/main/ai/background-avatar-studio.png')] bg-cover bg-center bg-no-repeat grid place-content-center h-[110px] rounded-2xl border-r border-slate-600">
					<h1 className="text-white/50 font-semibold text-lg">
						No Studio Available Yet
					</h1>
				</div>
			</div>
		</section>
	);
}
