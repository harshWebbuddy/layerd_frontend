import React from "react";
import { anthopicAiCapabilities } from "../../components/constants";
import PromptInput from "../components/PromptInput";

export default function page() {
	return (
		<section className="px-10 flex flex-col h-full flex-1 text-sm w-full">
			<div className="flex-1 space-y-6">
				<h1 className="text-primary-yellow text-3xl font-bold">
					Example Capabilities
				</h1>
				<div className="space-y-7">
					{anthopicAiCapabilities.map((item, index) => (
						<div key={index} className="space-y-4">
							<h1 className="text-xl font-semibold">{item.title}</h1>
							<div className="flex flex-wrap gap-4">
								{item.lists.map((listItem, index) => (
									<div
										className="bg-[#323232]/60 hover:bg-[#323232] py-2 px-3 ring-2 ring-[#514E4E]/70 cursor-pointer rounded-lg text-center"
										key={index}>
										{listItem}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
      <PromptInput/>
		</section>
	);
}
