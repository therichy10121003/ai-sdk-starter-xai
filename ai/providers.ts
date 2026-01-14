import { createXai } from "@ai-sdk/xai";

if (!process.env.XAI_API_KEY) {
  throw new Error("XAI_API_KEY environment variable is required");
}

export const model = createXai({
  apiKey: process.env.XAI_API_KEY,
});

export const MODELS = [
  "grok-2-1212",
  "grok-2-vision-1212",
  "grok-beta",
  "grok-vision-beta",
] as const;

export type modelID = (typeof MODELS)[number];

export const defaultModel: modelID = "grok-2-1212";

/**
 * Array of agent use cases that can integrate with xAI models
 */
export const agents = [
  {
    name: "Chat Support Widget",
    description: "Embeds an intelligent chatbot on a website to answer customer queries.",
    useCase: "customer-support",
  },
  {
    name: "Code Autocompletion Plugin",
    description: "Provides AI-powered suggestions in a code editor like VS Code.",
    useCase: "development-tools",
  },
  {
    name: "Language Translation App",
    description: "Translates text in real-time for mobile or web users.",
    useCase: "translation",
  },
  {
    name: "Voice Assistant Agent",
    description: "Integrates speech-to-text and text-to-speech with AI responses.",
    useCase: "voice-assistant",
  },
  {
    name: "Email Drafting Tool",
    description: "Suggests and auto-completes professional email responses.",
    useCase: "productivity",
  },
  {
    name: "Personalized Study Tutor",
    description: "Helps students learn by answering questions and providing explanations.",
    useCase: "education",
  },
  {
    name: "Meeting Notes Summarizer",
    description: "Generates summaries and action items from meeting transcripts.",
    useCase: "productivity",
  },
  {
    name: "Social Media Content Generator",
    description: "Drafts posts, comments, and captions with AI assistance.",
    useCase: "content-creation",
  },
  {
    name: "Customer Feedback Analyzer",
    description: "Processes and categorizes customer feedback for insights.",
    useCase: "analytics",
  },
  {
    name: "E-commerce Product Recommender",
    description: "Suggests products to users based on queries or preferences.",
    useCase: "e-commerce",
  },
] as const;

  