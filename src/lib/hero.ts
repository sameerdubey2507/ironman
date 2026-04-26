export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "The best way to predict the future is to build it with the right team.",
    speaker: "Sarah Jenkins",
    film: "CEO, TECHSTART — 2024",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Finding elite developers used to take months. Now it takes minutes.",
    speaker: "Marcus Chen",
    film: "CTO, GLOBALFLOW — 2025",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Success isn't just about the idea, it's about the people who execute it.",
    speaker: "Elena Rodriguez",
    film: "FOUNDER, NEXTGEN — 2026",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
