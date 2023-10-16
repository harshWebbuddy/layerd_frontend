export const defaultDisplay = [
	{
		icon: "/main/bulb.svg",
		title: "Examples",
		lists: [
			'"Explain quantum computing in simple terms"',
			'"Got any creative ideas for a 10 year old’s birthday?"',
			'"How do I make an HTTP request in JavaScript?"',
		],
	},
	{
		icon: "/main/lightning-bolt.svg",
		title: "Capabilities",
		lists: [
			'"Remembers what user said earlier in the conversation"',
			'"Allows user to provide follow up correction"',
			'"Trained to decline inappropriate requests"',
		],
	},
	{
		icon: "/main/warning.svg",
		title: "Limitations",
		lists: [
			'"May occasionally generate incorrect information "',
			'"May occasionally produce harmful instructions or biased"',
			'"Limited knowledge of world and events after 2023"',
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
				link: baseLink + "/anthopic-ai",
				icon: "/main/anthopic-ai.svg",
			},
			{
				title: "Duck Duck Go",
				link: baseLink + "/duck-duck-go",
				icon: "/main/duckduckgo.svg",
			},
			{
				title: "Bing Chat",
				link: baseLink + "/bing-chat",
				icon: "/main/bing-ai.svg",
			},
		],
	},
	{
		icon: "/main/ai-image.gif",
		title: "AI Image",
		items: [
			{
				title: "Dalle - 2 ",
				link: "#",
				icon: "/main/dalle-2.png",
			},
			{
				title: "Stable Diffusion",
				link: "#",
				icon: "/main/stable-diffusion.png",
			},
			{
				title: "Google Bard",
				link: "#",
				icon: "/main/midjourney.png",
			},
			{
				title: "Create Avatar",
				link: "#",
				icon: "/main/create-avatar.png",
			},
		],
	},
	{
		icon: "/main/ai-writing.gif",
		title: "AI Writing",
		link: "/dashboard/main/ai-writing",
	},
	{
		icon: "/main/ai-voice.gif",
		title: "AI Voice",
		items: [
			{
				title: "Speech To Text ",
				link: "#",
				icon: "/main/speech-text.png",
			},
			{
				title: "Text To Speech",
				link: "#",
				icon: "/main/text-speech.png",
			},
		],
	},
	{
		icon: "/main/ai-code.gif",
		title: "AI Code",
		items: [
			{
				title: "Code Writing",
				link: "/dashboard/main/ai-code/code-writing",
				icon: "/main/code-writing.png",
			},
			{
				title: "Code Converter",
				link: "/dashboard/main/ai-code/code-converter",
				icon: "/main/code-converter.png",
			},
			{
				title: "Code Guru",
				link: "/dashboard/main/ai-code/code-guru",
				icon: "/main/code-guru.png",
			},
		],
	},
	{
		icon: "/main/ai-person.gif",
		title: "Personalized AI",
		items: [
			{
				title: "Interior AI",
				link: "/dashboard/main/personalized/interior-ai",
				icon: "/main/interior-ai.png",
			},
			{
				title: "Movie AI",
				link: "/dashboard/main/personalized/movie-ai",
				icon: "/main/movie-ai.png",
			},
			{
				title: "Age AI",
				link: "/dashboard/main/personalized/age-ai",
				icon: "/main/age-ai.png",
			},
			{
				title: "Weather GPT",
				link: "/dashboard/main/personalized/weather-gpt",
				icon: "/main/weather-gpt.png",
			},
			{
				title: "Interview AI",
				link: "/dashboard/main/personalized/interview-ai",
				icon: "/main/interview-ai.png",
			},
		],
	},
	{
		icon: "/main/add-list.gif",
		title: "Create Your Own GPT",
		link: "/dashboard/main/create-your-own",
	},
	{
		icon: "/main/ai-tools.gif",
		title: "AI tools",
	},
	{
		icon: "/main/ai-person.gif",
		title: "Documents",
		items: [
			{
				title: "All Documents",
				link: "/dashboard/documents/all",
				icon: "/main/documents-blue.png",
			},
			{
				title: "All Images",
				link: "/dashboard/documents/images",
				icon: "/main/images-docs.png",
			},
			{
				title: "All Voiceovers",
				link: "/dashboard/documents/voice-overs",
				icon: "/main/voiceovers-docs.png",
			},
			{
				title: "All Transcripts",
				link: "/dashboard/documents/transcripts",
				icon: "/main/voice-docs.png",
			},
			{
				title: "Workbooks",
				link: "/dashboard/documents/work-books",
				icon: "/main/code-docs.png",
			},
			{
				title: "All Codes",
				link: "/dashboard/documents/codes",
				icon: "/main/interior-ai.png",
			},
		],
	},
];

export const bingChatCapabilities = [
	{
		icon: "/main/68b8ab37a21afaab7837b90c4b7a60aa.png",
		title: "Ask Complex Questions",
		exampleQuery:
			'"What are some meals I can make for my picky toddler who only eats orange-colored food?"',
	},
	{
		icon: "/main/3f3c24224519745528b0972d9e8cc76f.png",
		title: "Get Better Answers",
		exampleQuery:
			'"What are the pros and cons of the top 3 selling pet vacuums?"',
	},
	{
		icon: "/main/57b1cc1b0ed68cddda6b451594b4fa90.png",
		title: "Get Creative Inspiration",
		exampleQuery:
			'"Write a haiku about crocodiles in outer space in the voice of a pirate"',
	},
];

export const anthopicAiCapabilities = [
	{
		title: "Analyzing Documents",
		lists: [
			"Extracting Exact Quotes",
			"Discussing an Essay",
			"Summarizing a News Article",
			"Prescreening User Queries",
			"Summarize Product Reviews",
			"English Dialogues for Spanish Speakers",
		],
	},
	{
		title: "Writing and Conversation",
		lists: [
			"Write a Blog Post",
			"Reply to Emails",
			"Flash Fiction",
			"Construct and Fill Templates",
			"Continue the Story",
			"Three Character Script",
			"Handling a Difficult Conversation",
			"Text from Bullet Points",
		],
	},
	{
		title: "Learning",
		lists: [
			"English Dialogues for Spanish Speakers",
			"Teach Me About GANs",
			"Sentence-by-Sentence Critique",
			"Learning French Dialogue",
		],
	},
	{
		title: "Code",
		lists: [
			"Python VIM Clone",
			"Command Line Help",
			"Make a List of Dictionaries",
		],
	},
];

export const dummyChatHistory = [
	"UX UI Design Details",
	"UI and UX difference",
	"User Persona Defination",
	"UI and UX difference",
	"User Persona Defination",
];
