"use client";

import Image from "next/image";
import Modal from "./Modal";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Upload() {
	const [isModalOpen, setIsModalOpen] = useState(false);
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
			<button
				onClick={() => setIsModalOpen(true)}
				className="font-bold flex items-center gap-3 bg-[#313131] hover:bg-[#3d3d3d] py-3 px-4 rounded-lg w-fit cursor-pointer">
				<span>Upload A Photo</span>
				<Image
					src="/main/upload.svg"
					alt="Arrow Right"
					width={20}
					height={20}
				/>
			</button>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className="space-y-10 py-6">
					<div className="flex flex-col items-center gap-4">
						<Image
							src="/logos/whopme.svg"
							alt="Whopme-mini logo"
							width={60}
							height={60}
						/>
						<h1 className="text-3xl text-primary-yellow font-semibold">
							Upload Photo
						</h1>
						<p className="text-[#ABAEB7]">
							Your photos will be automatically deleted after 24 hours.
						</p>
					</div>
					<div className="h-[3px] w-full gradient-div" />
					<div
						{...getRootProps()}
						className="bg-[#32323280] rounded-xl ring-[#514E4E] ring-2 w-full flex justify-center items-center h-[234px] cursor-pointer outline-none">
						<input
							{...getInputProps()}
							accept="images/*"
							className="outline-none"
						/>
						{isDragActive ? (
							<p className="text-lg">Drop the files here ...</p>
						) : (
							<div className="flex flex-col items-center gap-5 p-5">
								<Image
									src="/main/ai/cloud-upload.svg"
									alt="upload"
									width={80}
									height={80}
								/>
								<div className="space-y-2">
									<h1 className="text-2xl text-white font-semibold">
										Drop files here or click to upload
									</h1>
									<p className="max-w-sm text-center text-[#6C757D]">
										Recommended : 1:1 Square Ratio, With a Clear View of Your
										Face.
									</p>
								</div>
							</div>
						)}
					</div>
					<div onClick={() => setIsModalOpen(false)} className="flex justify-center">
						<button className="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] py-2.5 px-4 rounded-lg self-end">
							<span>Confirm upload</span>
							<Image
								src="/arrow-right.svg"
								alt="Arrow Right"
								width={20}
								height={20}
							/>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
