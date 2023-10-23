"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
interface Props {
	isInterior?: boolean;
}
export default function Dropzone({ isInterior }: Props) {
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
			className="bg-[url('/background-image-uploads.png')] bg-no-repeat bg-cover  border-[2px] rounded-3xl border-white/70 border-dashed w-full flex justify-center items-center h-[396px] cursor-pointer">
			<input {...getInputProps()} accept="images/*" />
			{isDragActive ? (
				<p className="text-lg text-center">Drop the files here ...</p>
			) : (
				<div className="flex flex-col items-center gap-10">
					<div className="bg-[#ffffff10] w-fit p-5 rounded-lg">
						<Image src="/main/upload.svg" alt="upload" width={50} height={50} />
					</div>
					<div className="space-y-2">
						<h1 className="text-2xl text-white font-semibold text-center">
							Drop files here or click to upload
						</h1>
						{isInterior && <p className="text-center text-white/50">Upload image of an empty room</p>}
					</div>
				</div>
			)}
		</div>
	);
}
