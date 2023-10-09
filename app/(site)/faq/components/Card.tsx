import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";
interface Props {
	index: number;
	toggle: (index: number) => void;
	expanded: boolean;
	title: string;
	description: string;
}
export default function Card({
	index,
	toggle,
	expanded,
	title,
	description,
}: Props) {
	return (
		<div
			key={index}
			className="bg-gradient-to-b from-[#343434] to-[#202020] rounded-xl p-3 max-h-fit">
			<div
				onClick={() => toggle(index)}
				className={`flex justify-between items-center cursor-pointer p-3 gap-3 ${
					expanded && "border-b border-[#414141]"
				}`}>
				<h1 className="text-lg">{title}</h1>
				<div
					className={clsx(
						`bg-[#555555] p-1 rounded-md transition duration-300 w-full max-w-fit`,
						expanded && "bg-primary-red"
					)}>
					<Image
						src={expanded ? "/svgs/close.svg" : "/svgs/open.svg"}
						alt="Accordion"
						width={25}
						height={25}
					/>
				</div>
			</div>
			<Collapse isOpened={expanded}>
				<div className="p-4 text-white/70">{description}</div>
			</Collapse>
		</div>
	);
}
