export const defaultDisplay = [
	{
		icon: "/main/bulb.svg",
		title: "Examples",
		lists: [
			"Explain quantum computing in simple terms",
			"Got any creative ideas for a 10 year old’s birthday?",
			"How do I make an HTTP request in JavaScript?",
		],
	},
	{
		icon: "/main/lightning-bolt.svg",
		title: "Capabilities",
		lists: [
			"Remembers what user said earlier in the conversation",
			"Allows user to provide follow up correction",
			"Trained to decline inappropriate requests",
		],
	},
	{
		icon: "/main/warning.svg",
		title: "Limitations",
		lists: [
			"May occasionally generate incorrect information ",
			"May occasionally produce harmful instructions or biased",
			"Limited knowledge of world and events after 2023",
		],
	},
];
const baseLink = "/dashboard/main/ai-chat";
export const navObjects = [
	{
		icon: "/main/search-list.gif",
		title: "AI Search Engine",
	},
	{
		icon: "/main/ai-chat.gif",
		title: "AI Chatbots",
		items: [
			{
				title: "Chat GPT4",
				link: baseLink + "/chat-gpt4",
				icon: "/main/chagpt4-ai.png",
			},
			{
				title: "Chat GPT3.5",
				link: baseLink + "/chat-gpt3.5",
				icon: "/main/chagpt3.5-ai.png",
			},
			{
				title: "Google Bard",
				link: baseLink + "/google-bard",
				icon: "/main/googlebard-ai.svg",
			},
			{
				title: "Anthopic’s Claude 2.0",
				link: baseLink + "/anthopic",
				icon: "/main/anthopic-ai.svg",
			},
			{
				title: "Duck Duck Go",
				link: baseLink + "/duck-duck-go",
				icon: "/main/duckduckgo.svg",
			},
			{
				title: "Bing Chat",
				link: baseLink + "/bing",
				icon: "/main/bing-ai.svg",
			},
		],
	},
	{
		icon: "/main/ai-image.gif",
		title: "AI Image",
		items: [
			{
				title: "Chat GPT4",
				link: "/",
				icon: "/main/chagpt4-ai.png",
			},
			{
				title: "Chat GPT3.5",
				link: "/",
				icon: "/main/chagpt3.5-ai.png",
			},
			{
				title: "Google Bard",
				link: "/",
				icon: "/main/googlebard-ai.svg",
			},
			{
				title: "Anthopic’s Claude 2.0",
				link: "/",
				icon: "/main/anthopic-ai.svg",
			},
			{
				title: "Duck Duck Go",
				link: "/",
				icon: "/main/duckduckgo.svg",
			},
			{
				title: "Bing Chat",
				link: "",
				icon: "/main/bing-ai.svg",
			},
		],
	},
	{
		icon: "/main/ai-writing.gif",
		title: "AI Writing",
	},
	{
		icon: "/main/ai-voice.gif",
		title: "AI Voice",
	},
	{
		icon: "/main/ai-code.gif",
		title: "AI Code",
	},
	{
		icon: "/main/ai-person.gif",
		title: "Personalized AI",
	},
	{
		icon: "/main/add-list.gif",
		title: "Create Your Own GPT",
	},
	{
		icon: "/main/ai-tools.gif",
		title: "AI tools",
	},
	{
		icon: "/main/drawing-tools.gif",
		title: "AI tools",
	},
	{
		icon: "/main/document.gif",
		title: "Documents",
	},
];
