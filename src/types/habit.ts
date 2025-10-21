export interface Habit {
  id: string;
  name: string;
  emoji: string;
  color: string;
  createdAt: string;
  currentStreak: number;
  longestStreak: number;
  completedDates: string[]; // ISO date strings
  allowOneMissPerWeek: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  threshold: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export const ACHIEVEMENTS: Omit<Achievement, "unlocked" | "unlockedAt">[] = [
  {
    id: "week",
    title: "7 дней подряд",
    description: "Первая неделя",
    emoji: "🏅",
    threshold: 7,
  },
  {
    id: "month",
    title: "30 дней подряд",
    description: "Целый месяц!",
    emoji: "🔥",
    threshold: 30,
  },
  {
    id: "hundred",
    title: "100 дней подряд",
    description: "Невероятное упорство",
    emoji: "💎",
    threshold: 100,
  },
];

export const HABIT_COLORS = [
  "#EF4444", // red
  "#F97316", // orange
  "#F59E0B", // amber
  "#10B981", // emerald
  "#06B6D4", // cyan
  "#3B82F6", // blue
  "#8B5CF6", // violet
  "#EC4899", // pink
];

export const HABIT_EMOJIS = [
  "💪",
  "📚",
  "🏃",
  "🧘",
  "💤",
  "🥗",
  "💧",
  "🎯",
  "✍️",
  "🎨",
  "🎵",
  "🌱",
  "🧠",
  "❤️",
  "☀️",
  "🌙",
];
