"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
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
		<div
			{...getRootProps()}
			className="bg-transparent bg-no-repeat bg-cover rounded-3xl w-full flex justify-center items-center cursor-pointer">
			<input {...getInputProps()} accept="images/*" />
			{isDragActive ? (
				<p className="text-lg">Drop the files here ...</p>
			) : (
				<div className="flex flex-col items-center gap-10">
					<div className="bg-[#ffffff10] w-fit p-5 rounded-lg">
						<Image src="/main/upload.svg" alt="upload" width={30} height={30} />
					</div>
					<div className="space-y-2">
						<h1 className="text-[28px] text-white font-semibold text-center">
							Drop files here or click to upload
						</h1>
						<p className="text-lg text-[#ffffffa8] text-center">
							Upload{" "}
							<span className="relative text-primary-yellow after:absolute after:bottom-0 after:translate-y-1 after:right-0 after:h-[2px] after:w-full after:rounded-full  after:bg-gradient-to-r after:from-primary-red after:to-primary-yellow">
								10 - 20
							</span>{" "}
							Pictures Of You
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
