import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "딥레이서 보상함수 파라미터",
    prompt: "딥레이서 보상함수 (Reward Function)의 입력 파라미터 (params)에는 어떤 것들이 있는지 설명해주세요.",
    icon: "circle-question",
  },
  {
    label: "딥레이서 실제 차량의 LED 색깔",
    prompt: "딥레이서 실제 차량의 LED 색깔이 의미하는 것은 무엇인가요?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "딥레이서와 관련된 내용을 물어보세요";

export const GREETING = "안녕하세요. 에이아이캐슬에서 만든 딥레이서 챗봇입니다.";

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
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
