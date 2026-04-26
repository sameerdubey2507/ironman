export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Hire Talent",
    quote: "Access a global pool of elite professionals across all industries.",
    speaker: "Hire Experts",
    film: "POST A JOB",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Find Work",
    quote: "Work on projects that matter to you, from anywhere in the world.",
    speaker: "Get Hired",
    film: "BROWSE JOBS",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Scale Up",
    quote: "Build your startup team and turn your vision into reality.",
    speaker: "Launch Startup",
    film: "CREATE TEAM",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
