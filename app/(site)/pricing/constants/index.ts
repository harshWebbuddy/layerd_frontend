export const appFeatures = [
	{
		name: "Free",
		features: [
			{
				title: "AI Voice",
				peer: [
					"Speech to Text (10 Mins Per Month)",
					"Text to Speech (1000 Words Per Month)",
				],
			},
			{
				title: "AI Chat (25 Queries Per Month)",
				peer: [
					"GPT 3.5 Turbo",
					"Google Bard",
					"Anthropic Claude",
					"Duck Duck Go",
				],
			},
			{
				title: "AI Code (10 Codes Per Month)",
				peer: [
					"Code Writing",
					"Code Converter",
					"Code Explainer",
					"Code Refactor",
				],
			},
			{
				title: "Personalized AI (10 Queries Per Month)",
				peer: [
					"Interior AI",
					"Movie AI",
					"Age AI",
					"Weather AI",
					"Interview AI",
				],
			},
			{
				title: "Create Your Own GPT",
				peer: ["Train Up to 10 Documents", "Up to 2 Links", "Up to 2 Brains"],
			},
		],
	},
	{
		name: "Standard",
		features: [
			{
				title: "AI Voice",
				peer: [
					"Speech to Text (100 Mins Per Month)",
					"Text to Speech (10,000 Words Per Month)",
				],
			},
			{
				title: "AI Chat (1,000 Queries Per Month)",
				peer: [
					"GPT 4",
					"Anthropic Claude 2.0",
					"GPT 3.5 Turbo",
					"Google Bard",
					"Anthropic Claude",
					"Duck Duck Go",
				],
			},
			{
				title: "AI Code (1,000 Codes Per Month)",
				peer: [
					"Code Writing",
					"Code Converter",
					"Code Explainer",
					"Code Refactor",
					"Code Rewriter",
				],
			},
			{
				title: "Personalized AI (1,000 Queries Per Month)",
				peer: [
					"Interior AI",
					"Movie AI",
					"Age AI",
					"Weather AI",
					"Interview AI",
					"Create your own avatar",
				],
			},
			{
				title: "Create Your Own GPT",
				peer: [
					"Train Up to 100 Documents",
					"Up to 20 Links",
					"Up to 10 Brains",
				],
			},
		],
	},
	{
		name: "Truly unlimited",
		features: [
			{
				title: "AI Voice",
				peer: [
					"Speech to Text (Unlimited Mins Per Month)",
					"Text to Speech (Unlimited Words Per Month)",
				],
			},
			{
				title: "AI Chat (Unlimited Queries Per Month)",
				peer: [
					"GPT 4",
					"Anthropic Claude 2.0",
					"GPT 3.5 Turbo",
					"Google Bard",
					"Anthropic Claude",
					"Duck Duck Go",
				],
			},
			{
				title: "AI Code (Unlimited Codes Per Month)",
				peer: [
					"Code Writing",
					"Code Converter",
					"Code Explainer",
					"Code Refactor",
					"Code Rewriter",
				],
			},
			{
				title: "Personalized AI (Unlimited Queries Per Month)",
				peer: [
					"Interior AI",
					"Movie AI",
					"Age AI",
					"Weather AI",
					"Interview AI",
					"Create your own avatar",
				],
			},
			{
				title: "Create Your Own GPT",
				peer: [
					"Train Up to Unlimited Documents",
					"Up to Unlimited Brains",
					"Up to Unlimited Brains",
				],
			},
		],
	},
];

export const packageData = [
	{
		name: "Free",
		price: 0,
		image: "/star 1.svg",
		features: [
			{
				title: "Free 25 queries per month",
				peer: ["Ai Search Engine"],
			},
			{
				title: "Ai Writing (10,000 Words Per Month)",
				peer: [
					"120 Ai Templates for Writing ",
					"Save, Download your generated",
					"Custom Templates (Coming Soon)",
				],
			},
			{
				title: "Ai Images (25 Images Per Month)",
				peer: ["Dalle-2 ", "Stable Diffusion (Advanced)", "MidJourney"],
			},
		],
		gradient: "from-[#4B4B4B] to-[black]",
		accentColor: "border-[#3BF5BD]",
		isPremium: false,
		buttonTitle: "Buy Starter",
		isCurrent: true,
	},
	{
		name: "Standard",
		price: 20,
		image: "/key 1.svg",
		features: [
			{
				title: "1000 queries per month",
				peer: ["Ai Search Engine"],
			},
			{
				title: "Ai Writing (50,000 Words Per Month)",
				peer: [
					"120 Ai Templates for Writing ",
					"Save, Download your generated",
					"Custom Templates (Coming Soon)",
				],
			},
			{
				title: "Ai Images (150 Images Per Month)",
				peer: ["Dalle-2 ", "Stable Diffusion (Advanced)", "MidJourney"],
			},
		],
		gradient: "from-[#4B4B4B] to-[black]",
		accentColor: "border-[#3BA7F5]",
		isPremium: false,
		buttonTitle: "Buy Express",
		isCurrent: false,
	},
	{
		name: "Truly unlimited",
		price: 49,
		image: "/crown 1.svg",
		features: [
			{
				title: "unlimited queries per month",
				peer: ["Ai Search Engine"],
			},
			{
				title: "Ai Writing (Unlimited)",
				peer: [
					"120 Ai Templates for Writing ",
					"Save, Download your generated",
					"Custom Templates (Coming Soon)",
				],
			},
			{
				title: "Ai Images (Unlimited Images Per Month)",
				peer: ["Dalle-2 ", "Stable Diffusion (Advanced)", "MidJourney"],
			},
		],
		gradient: "from-primary-red to-primary-yellow",
		accentColor: "border-[#F6844B]",
		isPremium: true,
		buttonTitle: "Buy Premium",
		isCurrent: false,
	},
];
