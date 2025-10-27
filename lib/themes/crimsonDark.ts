import type { ThemeOption } from "@openai/chatkit";

export const crimsonDark: ThemeOption = {
  colorScheme: "dark",
  radius: "round",
  density: "normal",
  color: {
    accent: { primary: "#C8102E", level: 1 },
    surface: {
      background: "#0A1E3F",
      foreground: "#13294B",
    },
  },
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Italic.woff2",
        weight: 400,
        style: "italic",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Medium.woff2",
        weight: 500,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-MediumItalic.woff2",
        weight: 500,
        style: "italic",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Semibold.woff2",
        weight: 600,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-SemiboldItalic.woff2",
        weight: 600,
        style: "italic",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Bold.woff2",
        weight: 700,
        style: "normal",
        display: "swap",
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-BoldItalic.woff2",
        weight: 700,
        style: "italic",
        display: "swap",
      },
    ],
  },
};


