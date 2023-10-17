"use client";

import Image from "next/image";
import React, { useState } from "react";
import { dummyEditorData } from "../../ai-voice/speech-to-text";
import Selection from "../../ai-voice/components/Selection";

export default function Editor() {
	const [selectedFormat, setSelectedFormat] = useState<string>("pdf");
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
					<div className="flex gap-4 items-end h-fit">
						<div className="w-full flex gap-4">
							<div className="space-y-2 w-full">
								<label htmlFor="File Title">Document Title</label>
								<div className="border-bottom-gradient">
									<input
										id="File Title"
										placeholder="Audio File"
										className="block w-full border-[3px] rounded-lg border-[#514E4E] h-14 outline-none bg-[#32323280] p-3"
									/>
								</div>
							</div>
							<div className="space-y-2 w-full">
								<label htmlFor="Select">Document Title</label>
								<div className="border-bottom-gradient">
									<Selection
										id="Select"
										placeholder="Audio File"
										items={[
											{
												value: "Workbook 1",
												label: "Workbook 1",
											},
											{
												value: "Workbook 2",
												label: "Workbook 2",
											},
											{
												value: "Workbook 3",
												label: "Workbook 3",
											},
										]}
									/>
								</div>
							</div>
						</div>
						<div className="flex gap-3 mb-3">
							{formatsList.map((format) => (
								<div
									onClick={() => setSelectedFormat(format.name)}
									className={`bg-[#fdbb142b] h-[50px] w-[50px] px-4 grid place-content-center rounded-lg hover:bg-[#fdbb1446] transition cursor-pointer ${
										selectedFormat === format.name &&
										"bg-gradient-to-br from-primary-red to-primary-yellow"
									}`}>
									<Image
										src={format.image}
										alt="image"
										height={45}
										width={45}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="flex gap-3 mt-5">
						{dummyEditorData.map((image, index) => (
							<div className="hover:bg-slate-700 p-2.5 rounded-md cursor-pointer transition duration-300 grid place-content-center">
								<Image
									key={index}
									src={image}
									alt="image"
									height={10}
									width={15}
									draggable={false}
								/>
							</div>
						))}
					</div>
				</form>
				<div className="w-full ring-1 ring-white/60 mt-5 flex-1 h-full rounded-2xl focus-within:ring-white/80">
					<textarea name="" className="w-full h-full rounded-xl resize-none bg-transparent p-6 outline-none"></textarea>
				</div>
			</div>
		</div>
	);
}
