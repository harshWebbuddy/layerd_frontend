import Image from "next/image";
import React from "react";
import { defaultDisplay } from "../../components/constants";

export default function page() {
	return (
		<section className="grid place-content-center">
			<div className="flex flex-col items-center">
				<Image
					src="/main/ChatGPT 1.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-28"
				/>
				<h1 className="text-3xl font-semibold mt-10">Welcome to ChatGPT</h1>
				<div className="grid grid-cols-3 gap-16 mt-16">
					{defaultDisplay.map((item, index) => (
						<div key={index} className="space-y-6 flex flex-col items-center">
							<Image
								src={item.icon}
								alt="Icon"
								width={50}
								height={50}
								className={`${index !== 2 ? "w-4" : "w-6"}`}
							/>
							<h1 className="text-lg font-semibold">{item.title}</h1>
							<div className="flex flex-col gap-5">
								{item.lists.map((itemList, index) => (
									<div
										key={index}
										className="bg-[#323232]/60 hover:bg-[#323232] py-3 px-4 ring-2 ring-[#514E4E]/70 cursor-pointer rounded-lg max-w-xs min-h-[80px]">
										{itemList}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<form className="space-y-7 mt-28">
				<div className="bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat h-14 rounded-xl flex pl-4 border-bottom-gradient">
					<input
						type="text"
						className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
						placeholder="search for anything"
					/>
					<button className="bg-gradient-to-br from-primary-red to-primary-yellow cursor-pointer grid place-content-center m-1.5 p-3 rounded-lg transition duration-300">
						<Image
							src="/main/send-outlined.svg"
							alt="logo"
							width={28}
							height={28}
							draggable={false}
						/>
					</button>
				</div>
			</form>
		</section>
	);
}
