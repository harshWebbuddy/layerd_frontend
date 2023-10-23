import React from "react";
import PromptInput from "../../ai-chat/components/PromptInput";
import Image from "next/image";
import NavigationButton from "@/app/dashboard/components/NavigationButton";
import BrainButton from "../components/BrainButton";

export default function page() {
	return (
		<section className="space-y-8 flex-1 h-full flex flex-col pb-10 md:px-4">
			<div className="flex flex-col-reverse xl:flex-row items-start justify-between gap-5">
				<div>
					<h1 className="text-2xl font-semibold capitalize">
						Chat with Default brain
					</h1>
					<p className="text-[#ABAEB7]">
						Talk to a language model about your uploaded data
					</p>
				</div>
				<div className="flex gap-6">
					<NavigationButton
						link="/dashboard/main/create-your-own/uploads"
						styleClass="">
						Upload
					</NavigationButton>
					<NavigationButton
						styleClass=""
						link="/dashboard/main/create-your-own/chat">
						Chat
					</NavigationButton>
					<NavigationButton
						styleClass=""
						link="/dashboard/main/create-your-own/chat">
						Explore
					</NavigationButton>
					<BrainButton/>
				</div>
			</div>
			<div className="bg-[url('/main/background-image-chat-bard.png')] min-h-[500px] bg-cover bg-center bg-no-repeat flex-1 rounded-3xl border-top-gradient p-4 md:px-10 md:pt-10 flex flex-col text-sm">
				<div className="flex-1">
					<h1 className="text-center">
						Ask a Question, or Describe Your Uploaded Data
					</h1>
				</div>
				<div>
					<PromptInput isShadowAbsent={true} />
				</div>
			</div>
		</section>
	);
}
