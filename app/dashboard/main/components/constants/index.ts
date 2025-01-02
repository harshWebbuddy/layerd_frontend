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
    link: "/dashboard/main/search-engine",
    theme: "#4266f5",
  },
  {
    icon: "/main/ai-chat.gif",
    title: "AI Chatbots",
    items: [
      {
        title: "Open AI",
        link: baseLink + "/chat-gpt4",
        icon: "/main/chagpt4-ai.png",
      },
      {
        title: "Gemini",
        link: baseLink + "/gemini",
        icon: "/main/chagpt3.5-ai.png",
      },

      {
        title: "Anthopic",
        link: baseLink + "/anthopic-ai",
        icon: "/main/anthopic-ai.svg",
      },
    ],
  },
  {
    icon: "/main/ai-image.gif",
    title: "AI Image",
    items: [
      {
        title: "Open AI",
        link: "/dashboard/main/ai-image/openai",
        icon: "/main/dalle-2.png",
      },
      {
        title: "Stable Diffusion",
        link: "/dashboard/main/ai-image/stable-diffusion",
        icon: "/main/stable-diffusion.png",
      },
      // {
      //   title: "Mid journey",
      //   link: "/dashboard/main/ai-image/midjourney",
      //   icon: "/main/midjourney.png",
      // },
      // {
      //   title: "Create Avatar",
      //   link: "/dashboard/main/ai-image/create-avatar",
      //   icon: "/main/create-avatar.png",
      // },
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
        link: "/dashboard/main/ai-voice/speech-to-text",
        icon: "/main/speech-text.png",
      },
      {
        title: "Text To Speech",
        link: "/dashboard/main/ai-voice/text-to-speech",
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
        items: [
          {
            title: "Explain Code",
            link: "/dashboard/main/ai-code/code-guru/code-explain",
            icon: "/main/code-explain.png",
          },
          {
            title: "Code Refactor",
            link: "/dashboard/main/ai-code/code-guru/code-refactor",
            icon: "/main/code-refactor.png",
          },
          // {
          //   title: "Code Review",
          //   link: "/dashboard/main/ai-code/code-guru/code-review",
          //   icon: "/main/code-review.png",
          // },
        ],
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
    icon: "/main/document.gif",
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
        icon: "/main/images-docs.png",
      },
      {
        title: "Workbooks",
        link: "/dashboard/documents/work-books",
        icon: "/main/documents-blue.png",
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

export const programmingLanguages = [
  { label: "Python", value: "python" },
  { label: "Node.js", value: "nodejs" },
  { label: "JavaScript", value: "javascript" },
  { label: "Java", value: "java" },
  { label: "C", value: "c" },
  { label: "C++", value: "cpp" },
  { label: "C#", value: "csharp" },
  { label: "Ruby", value: "ruby" },
  { label: "PHP", value: "php" },
  { label: "Go", value: "go" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kotlin" },
  { label: "TypeScript", value: "typescript" },
  { label: "Dart", value: "dart" },
  { label: "R", value: "r" },
  { label: "Rust", value: "rust" },
  { label: "Scala", value: "scala" },
  { label: "Perl", value: "perl" },
  { label: "Bash", value: "bash" },
  { label: "Shell", value: "shell" },
  { label: "SQL", value: "sql" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JSON", value: "json" },
  { label: "XML", value: "xml" },
  { label: "YAML", value: "yaml" },
];
