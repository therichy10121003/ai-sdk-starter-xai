import { xai } from "@ai-sdk/xai";
import { customProvider } from "ai";

const languageModels = {
  "grok-2-1212": xai("grok-2-1212"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "grok-2-1212";
