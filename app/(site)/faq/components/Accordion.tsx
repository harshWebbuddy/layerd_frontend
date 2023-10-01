"use client";

import React, { useState } from "react";
import { faqData } from "../constants";
import Card from "./Card";

export default function Accordian() {
	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState<number | null>(null);
	const toggle = (index: number) => {
		setOpen(index);
		if (open === index) {
			setOpen(null);
		}
		setExpanded(true);
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4">
			{faqData.map((item, index) => {
				return (
					<Card
						description={item.description}
						title={item.title}
						expanded={open === index && expanded}
						toggle={toggle}
						key={index}
						index={index}
					/>
				);
			})}
		</div>
	);
}
