import { google } from "@ai-sdk/google";

export function getLanguageModel(modelId: string) {
  return google('models/gemini-1.5-flash');
}

export function getTitleModel() {
  return google('models/gemini-1.5-flash');
}

export function getArtifactModel() {
  return google('models/gemini-1.5-flash');
}
