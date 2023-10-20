"use client";

import Image from "next/image";
import React, { useState } from "react";
import { dummyEditorData } from ".";

export default function Editor() {
	const [selectedFormat, setSelectedFormat] = useState<string>('pdf');
	const formatsList = [
		{
			image: "/main/ai/symbol-word.png",
			name: "word",
		},
		{
			image: "/main/ai/symbol-txt.png",
			name: "text",
		},
		{
			image: "/main/ai/symbol-csv.png",
			name: "csv",
		},
		{
			image: "/main/ai/symbol-pdf.svg",
			name: "pdf",
		},
	];
	return (
		<div className="h-full">
			<div className="flex flex-col h-full">
				<form>
					<label htmlFor="File Title">File Title</label>
					<div className="flex flex-col sm:flex-row gap-4 h-fit">
						<div className="space-y-2 w-full">
							<div className="border-bottom-gradient">
								<input
									id="File Title"
									placeholder="Audio File"
									className="block w-full border-[3px] rounded-lg border-[#514E4E] h-14 outline-none bg-[#32323280] p-3"
								/>
							</div>
						</div>
						<div className="flex gap-3">
							{formatsList.map((format) => (
								<div
									onClick={() => setSelectedFormat(format.name)}
									className={`bg-[#fdbb142b] px-5 grid place-content-center rounded-lg h-[50px] w-[50px] hover:bg-[#fdbb1446] transition cursor-pointer ${
										selectedFormat === format.name &&
										"bg-gradient-to-br from-primary-red to-primary-yellow"
									}`}>
									<Image
										src={format.image}
										alt="image"
										height={25}
										width={25}
										className="min-w-[25px]"
									/>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-wrap gap-3 mt-5">
						{dummyEditorData.map((image, index) => (
							<div className="hover:bg-slate-700 p-2.5 rounded-md cursor-pointer transition duration-300 grid place-content-center">
								<Image
									key={index}
									src={image}
									alt="image"
									height={10}
									width={15}
									draggable={false}
									className="min-w-[15px]"
								/>
							</div>
						))}
					</div>
				</form>
				<div className="w-full ring-1 ring-white/60 mt-5 flex-1 grid place-content-center h-full rounded-2xl min-h-[300px]">
					<p>Transcribe your audio files Easily</p>
				</div>
			</div>
		</div>
	);
}
