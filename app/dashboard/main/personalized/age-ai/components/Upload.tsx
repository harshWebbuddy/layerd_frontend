"use client";

import Image from "next/image";
import React from "react";

export default function Upload() {
	return (
		<div>
			<label htmlFor="image-upload">
				<div className="font-bold flex items-center gap-3 bg-[#313131] hover:bg-[#3d3d3d] py-3 px-4 rounded-lg w-fit cursor-pointer">
					<span>Upload A Photo</span>
					<Image
						src="/main/upload.svg"
						alt="Arrow Right"
						width={20}
						height={20}
					/>
				</div>
			</label>
			<input
				type="file"
        accept="image/*"
				id="image-upload"
				className="hidden"
			/>
		</div>
	);
}
