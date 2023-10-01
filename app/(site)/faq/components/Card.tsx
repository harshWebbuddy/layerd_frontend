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
		<div key={index} className="bg-[#363636] rounded-xl p-3">
			<div
				onClick={() => toggle(index)}
				className={`flex justify-between items-center cursor-pointer p-3 ${
					expanded && "border-b border-[#414141]"
				}`}>
				<h1>{title}</h1>
				<Image
					src={expanded ? "/svgs/close.svg" : "/svgs/open.svg"}
					alt="Accordion"
					width={30}
					height={30}
				/>
			</div>
			<Collapse isOpened={expanded}>
				<div className="p-4">{description}</div>
			</Collapse>
		</div>
	);
}
