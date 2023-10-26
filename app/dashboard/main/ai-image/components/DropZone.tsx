"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DropZone() {
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
		<div>
			<div
				{...getRootProps()}
				className="bg-[url('/main/ai/background-ai-dropzone.png')] bg-no-repeat bg-cover bg-center rounded-3xl ring-[#514E4E] ring-inset ring-1 w-full flex justify-center items-center cursor-pointer outline-none p-3 min-h-[160px]">
				<input
					{...getInputProps()}
					accept="images/*"
					className="outline-none"
				/>
				{isDragActive ? (
					<p className="text-lg">Drop the files here ...</p>
				) : (
					<div className="flex flex-col items-center gap-3 p-5">
						<Image
							src="/main/ai/cloud-upload.svg"
							alt="upload"
							width={30}
							height={30}
						/>
						<div className="space-y-2">
							<h1 className="text-center text-white">
								Click or drag the image to enter here
							</h1>
							<p className="text-sm text-center text-[#6C757D]">
								Supports PNG and JPG formats
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
