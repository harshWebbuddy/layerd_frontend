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
				icon: "/main/bing-chat.svg",
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
	"User Persona Defination"
]