"use client"

import React, { useState } from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";

export default function MainSection() {
	const [activeTab, setActiveTab] = useState("Search Engine");

	return (
		<section>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
			<div className="mt-10">
				<Accordion activeTab={activeTab}/>
			</div>
		</section>
	);
}
