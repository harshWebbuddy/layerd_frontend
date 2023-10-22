"use client";

import Image from "next/image";
import React, { useState } from "react";
import { dummyEditorData } from "../../ai-voice/speech-to-text";
import Selection from "../../ai-voice/components/Selection";
import { TooltipComponent as Tooltip } from "../../components/Tooltip";
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
					<div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row gap-4 sm:items-end h-fit">
						<div className="w-full flex flex-col sm:flex-row xl:flex-col 2xl:flex-row gap-4">
							<div className="space-y-2 w-full">
								<label htmlFor="File Title">Document Title</label>
								<div className=" ring-inset ring-[#514E4E] ring-[2px] rounded-lg">
									<div className="border-bottom-gradient h-full rounded-lg">
										<input
											id="document-title"
											placeholder="New Document"
											className="block w-full  rounded-xl h-[50px] outline-none bg-[#32323280] p-3"
										/>
									</div>
								</div>
							</div>
							<div className="space-y-2 w-full">
								<div>
									<label htmlFor="Select" className="flex items-center gap-2">
										<span>Select</span>
										<Tooltip tooltipContent="Select a workbook name">
											<span className="cursor-pointer">
												<Image
													src="/main/ai/info-circle.svg"
													alt="info-circle"
													width={20}
													draggable={false}
													height={20}
												/>
											</span>
										</Tooltip>
									</label>
								</div>
								<div className="border-bottom-gradient">
									<Selection
										id="Select"
										placeholder="Workbook Name"
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
						<div className="flex gap-3">
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
										className="min-w-[20px]"
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
				<div className="w-full ring-1 ring-white/60 min-h-[400px] mt-5 flex-1 h-full rounded-2xl focus-within:ring-white/80">
					<textarea
						name=""
						className="w-full h-full rounded-sm sm:rounded-xl resize-none bg-transparent p-3 sm:p-6 outline-none"></textarea>
				</div>
			</div>
		</div>
	);
}
