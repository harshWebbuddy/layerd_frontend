import Image from "next/image";
import React from "react";

export default function Gallery() {
	const images = [
		"/main/dummy/image1.png",
		"/main/dummy/image2.png",
		"/main/dummy/image3.png",
		"/main/dummy/image4.png",
		"/main/dummy/image5.png",
		"/main/dummy/image6.png",
		"/main/dummy/image7.png",
		"/main/dummy/image8.png",
		"/main/dummy/image9.png",
		"/main/dummy/image10.png",
		"/main/dummy/image11.png",
		"/main/dummy/image12.png",
	];
	const columns = 5;
	return (
		<div className="flex flex-row gap-1.5 mt-6">
			{Array.from({ length: columns }, (_, columnIndex) => (
				<div key={columnIndex} className="flex flex-col w-full gap-1.5">
					{images.map(
						(image, index) =>
							index % columns === columnIndex && (
								<div key={index} className="group relative">
									<img src={image} alt="image" className="w-full rounded-xl" />
									<div className="opacity-0 absolute inset-0 z-[1] bg-black group-hover:opacity-80 rounded-xl transition duration-200 cursor-pointer"></div>
									<div className="absolute top-0 right-0 flex flex-col gap-3 mx-4 my-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 z-[2]">
										<Image
											src="/main/ai/download.svg"
											alt="download"
											width={25}
											height={25}
											className="select-none"
											draggable={false}
										/>
										<Image
											src="/main/share.svg"
											alt="download"
											width={25}
											height={25}
											className="select-none"
											draggable={false}
										/>
										<Image
											src="/main/delete.svg"
											alt="download"
											width={25}
											height={25}
											className="select-none"
											draggable={false}
										/>
									</div>
								</div>
							)
					)}
				</div>
			))}
		</div>
	);
}
