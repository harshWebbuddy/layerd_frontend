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
			className="bg-gradient-to-b from-[#343434] to-[#202020] rounded-xl p-3">
			<div
				onClick={() => toggle(index)}
				className={`flex justify-between items-center cursor-pointer p-3 ${
					expanded && "border-b border-[#414141]"
				}`}>
				<h1>{title}</h1>
				<div className={`bg-[#555555] p-2 rounded-md`}>
					<Image
						src={expanded ? "/svgs/close.svg" : "/svgs/open.svg"}
						alt="Accordion"
						width={20}
						height={20}
					/>
				</div>
			</div>
			<Collapse isOpened={expanded}>
				<div className="p-4">{description}</div>
			</Collapse>
		</div>
	);
}
