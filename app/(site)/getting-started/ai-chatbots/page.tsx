import React from "react";

export default function AiChatBots() {
	return (
		<section>
			<div className="space-y-4">
				<h1 className="font-bold text-xl">AI Chatbots</h1>
				<p className="text-white/70 text-sm leading-relaxed">
					Our AI Chat feature offers a variety of models like chatgpt4,
					chatgpt3.5, Google Bard, Anthropic’s Claude, Bing Chat, and Duck Duck
					Go Chat. Here's how to get started:
				</p>
				<ol className="translate-x-6 pr-6 space-y-2">
					<li className="font-semibold list-decimal">Click on the 'AI Chat' tab on our homepage.</li>
					<li className="font-semibold list-decimal">Choose the AI model you want to chat with.</li>
					<li className="font-semibold list-decimal">Enter your text in the chat box.</li>
					<li className="font-semibold list-decimal">Click 'Send' and wait for the AI's response.</li>
					<li className="font-semibold list-decimal">Repeat the process to continue the conversation.</li>
				</ol>
			</div>
		</section>
	);
}
