import { google } from "@ai-sdk/google";
import { customProvider } from "ai";
import { isTestEnvironment } from "../constants";

export const myProvider = isTestEnvironment ? customProvider({
  languageModels: {
    "chat-model": google('models/gemini-1.5-flash'),
    "title-model": google('models/gemini-1.5-flash'),
    "artifact-model": google('models/gemini-1.5-flash'),
  },
}) : null;

export function getLanguageModel(modelId: string) {
  return google('models/gemini-1.5-flash');
}

export function getTitleModel() {
  return google('models/gemini-1.5-flash');
}

export function getArtifactModel() {
  return google('models/gemini-1.5-flash');
}
