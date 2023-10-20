import React from "react";
import { programmingLanguages } from "../../components/constants";
import Selection from "../../components/Selection";

export default function page() {
	return (
		<section>
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-3xl font-semibold">AI Code Converter</h1>
				<p>Enter some code and click "Convert"</p>
			</div>
			<div>
				<div className="border-gradient">
					<Selection
						id="input"
						placeholder="Select language"
						items={programmingLanguages}
						label="Input"
					/>
				</div>
			</div>
		</section>
	);
}
