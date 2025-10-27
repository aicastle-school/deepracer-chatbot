import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "How should I answer a family member who says socialism is compassionate?",
    prompt: "How should I answer a family member who says socialism is compassionate?",
    icon: "circle-question",
  },
  {
    label: "Show me the video when Charlie debated a student on abortion.",
    prompt: "Show me the video when Charlie debated a student on abortion.",
    icon: "circle-question",
  },
  {
    label: "How can I debate with a friend who says Trump is Hitler?",
    prompt: "How can I debate with a friend who says Trump is Hitler?",
    icon: "circle-question",
  },
  {
    label: "What would Charlie say to people who think America’s best days are over?",
    prompt: "What would Charlie say to people who think America’s best days are over?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "What would Charlie say?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
});
