import Image from "next/image";
import React from "react";
interface IProps {
	title: string;
	description: string;
	date: string;
	isComplete: boolean;
}
export default function MileStoneComponent({
	title,
	date,
	description,
	isComplete,
}: IProps) {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:max-w-xs flex gap-5 items-center md:justify-end">
					<div className="w-full max-w-fit flex gap-2 text-xs">
						<span className="text-primary-red">[</span>
						<h1 className="text-[#FBFBFB]/80 uppercase">{date}</h1>
						<span className="text-primary-yellow">]</span>
					</div>
					<div className="h-[1px] max-w-[120px] w-full bg-[#252134]" />
				</div>
				<div className="w-full md:border-l md:border-[#252134] flex items-start gap-5 py-10 px-5 md:px-10 max-w-2xl">
					<Image
						src={isComplete ? "/svgs/done.svg" : "/svgs/undone.svg"}
						alt="Image"
						height={40}
						width={40}
					/>
					<div className="space-y-6">
						<h1>{title}</h1>
						<p className="text-white/80 leading-relaxed text-sm">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
