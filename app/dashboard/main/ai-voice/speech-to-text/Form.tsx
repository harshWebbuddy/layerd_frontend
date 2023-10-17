"use client";

import Image from "next/image";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Selection from "../components/Selection";

export default function Form() {
	const onDrop = useCallback((acceptedFiles: any) => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [],
		},
		maxFiles: 1,
	});

	return (
		<form>
			<div className="space-y-4">
				<div
					{...getRootProps()}
					className="bg-[#32323280] rounded-xl ring-[#514E4E] ring-2 w-full flex justify-center items-center h-[200px] cursor-pointer outline-none">
					<input
						{...getInputProps()}
						accept="images/*"
						className="outline-none"
					/>
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<div className="flex flex-col items-center gap-5 p-5">
							<Image
								src="/main/ai/cloud-upload.svg"
								alt="upload"
								width={40}
								height={40}
							/>
							<div className="space-y-2 flex flex-col items-center">
								<h1 className="text-white text-center">
									Click or drag Your Audio File or{" "}
									<span className="text-primary-yellow">Browse</span>
								</h1>
								<p className="max-w-sm text-center text-[#6C757D] flex gap-3">
									<span>.mp3</span>
									<span>.mp4</span>
									<span>.mpeg</span>
									<span>.m4a</span>
									<span>mav</span>
									<span>webm</span>
								</p>
							</div>
						</div>
					)}
				</div>
				<div className="space-y-2">
					<label htmlFor="description">Audio Description (Optional)</label>
					<div className="border-bottom-gradient">
						<textarea
							id="description"
							placeholder="Describe the speech from the file uploaded above to help the AI"
							className="block w-full border-[3px] rounded-lg border-[#514E4E] h-24 outline-none bg-[#32323280] p-3"></textarea>
					</div>
				</div>
				<div className="border-bottom-gradient">
					<Selection
						id="auto-detect"
						items={[
							{
								value: "Auto Detect",
								label: "Auto Detect",
							},
							{
								value: "Manual Detection",
								label: "Manual Detection",
							},
						]}
						label="Audio Language (Optional)"
						placeholder="Select Audio Language"
					/>
				</div>
				<div className="border-bottom-gradient">
					<Selection
						id="task-type"
						items={[
							{
								value: "Transcribe Audio File",
								label: "Transcribe Audio File",
							},
						]}
						label="Task Type (Optional)"
						placeholder="Select Task Type"
					/>
				</div>
				<div className="border-bottom-gradient">
					<Selection
						id="workbook"
						items={[
							{
								value: "Transcribe Audio File",
								label: "Transcribe Audio File",
							},
						]}
						label="Workbook (Optional)"
						placeholder="Select Workbook Name"
					/>
				</div>
			</div>
      <button className="bg-gradient-to-br from-primary-red to-primary-yellow w-full py-3 flex justify-center items-center gap-3 mt-10 rounded-xl">
        <span className="font-semibold">Transcribe</span>
        <Image
          src='/main/ai/click.svg'
            alt="click"
            height={24}
            width={24}
        />
      </button>
		</form>
	);
}
