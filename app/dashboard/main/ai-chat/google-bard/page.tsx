import React from "react";
import PromptInput from "../components/PromptInput";

export default function page() {
	return (
		<section className="bg-[url('/main/background-image-chat-bard.png')] bg-cover bg-center bg-no-repeat flex-1 mb-10 rounded-2xl border-bottom-gradient p-10 flex flex-col text-sm">
			<div className="flex-1">
				<div className="bg-[#323232] ring-2 ring-[#514E4E] space-y-4 p-8 rounded-2xl">
					<div className="space-y-2">
						<p>
							I’m{" "}
							<span className="text-primary-yellow cursor-pointer font-semibold">
								Google Bard
							</span>
							, your creative and helpful collaborator. I have limitations and
							won’t always get it right, but your feedback will help me improve.
						</p>
						<p>Not sure where to start? You can try:</p>
					</div>

					<p className="text-primary-yellow cursor-pointer">
						Advantages and disadvantages to consider before buying smart
						watches?
					</p>
					<p className="text-primary-yellow cursor-pointer">
						What are some ways to make instant noodles even more delicious?
					</p>

					<p className="text-primary-yellow cursor-pointer">
						Write some lyrics for a heartbreak anthem titled “Lovesick”
					</p>
				</div>
			</div>
			<div>
				<PromptInput isShadowAbsent={true} />
				<p className="text-[#C4C7C5] text-center">
					Bard may display inaccurate or offensive information that doesn’t
					represent Google’s views. Bard Privacy Notice
				</p>
			</div>
		</section>
	);
}
