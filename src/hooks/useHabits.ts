import { useState, useEffect } from "react";
import {ACHIEVEMENTS } from "../types/habit";
import type { Habit } from "../types/habit";
import type { Achievement } from "../types/habit";

const STORAGE_KEY = "habits-tracker-data";

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setHabits(data.habits || []);
        setAchievements(data.achievements || initAchievements());
      } catch (e) {
        console.error("Failed to parse stored data", e);
        setAchievements(initAchievements());
      }
    } else {
      setAchievements(initAchievements());
    }
    setIsLoaded(true);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ habits, achievements }),
      );
    }
  }, [habits, achievements, isLoaded]);

  function initAchievements(): Achievement[] {
    return ACHIEVEMENTS.map((a) => ({ ...a, unlocked: false }));
  }

  function addHabit(
    habit: Omit<
      Habit,
      "id" | "createdAt" | "currentStreak" | "longestStreak" | "completedDates"
    >,
  ) {
    const newHabit: Habit = {
      ...habit,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      currentStreak: 0,
      longestStreak: 0,
      completedDates: [],
    };
    setHabits((prev) => [...prev, newHabit]);
  }

  function deleteHabit(id: string) {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }

  function updateHabit(id: string, updates: Partial<Habit>) {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...updates } : h)),
    );
  }

  function toggleHabitToday(habitId: string) {
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return;

    const today = getTodayDateString();
    const isCompleted = habit.completedDates.includes(today);

    if (isCompleted) {
      // Uncheck today
      const newCompletedDates = habit.completedDates.filter((d) => d !== today);
      const newStreak = calculateStreak(
        newCompletedDates,
        habit.allowOneMissPerWeek,
      );
      updateHabit(habitId, {
        completedDates: newCompletedDates,
        currentStreak: newStreak,
      });
    } else {
      // Mark today as completed
      const newCompletedDates = [...habit.completedDates, today].sort();
      const newStreak = calculateStreak(
        newCompletedDates,
        habit.allowOneMissPerWeek,
      );
      const newLongestStreak = Math.max(habit.longestStreak, newStreak);

      updateHabit(habitId, {
        completedDates: newCompletedDates,
        currentStreak: newStreak,
        longestStreak: newLongestStreak,
      });

      // Check for achievements
      checkAchievements(habitId, newStreak);
    }
  }

  function checkAchievements(habitId: string, streak: number) {
    const newAchievements = achievements.map((ach) => {
      if (!ach.unlocked && streak >= ach.threshold) {
        return {
          ...ach,
          unlocked: true,
          unlockedAt: new Date().toISOString(),
        };
      }
      return ach;
    });
    setAchievements(newAchievements);
  }

  function isHabitCompletedToday(habitId: string): boolean {
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return false;
    return habit.completedDates.includes(getTodayDateString());
  }

  function getHabitCompletionRate(habitId: string): number {
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return 0;

    const createdDate = new Date(habit.createdAt);
    const today = new Date();
    const daysSinceCreation =
      Math.floor(
        (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24),
      ) + 1;

    return Math.round((habit.completedDates.length / daysSinceCreation) * 100);
  }

  return {
    habits,
    achievements,
    addHabit,
    deleteHabit,
    updateHabit,
    toggleHabitToday,
    isHabitCompletedToday,
    getHabitCompletionRate,
    isLoaded,
  };
}

function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function calculateStreak(
  completedDates: string[],
  allowOneMiss: boolean,
): number {
  if (completedDates.length === 0) return 0;

  const sortedDates = [...completedDates].sort().reverse();
  const today = getTodayDateString();

  let streak = 0;
  const currentDate = new Date(today);
  let missedDaysThisWeek = 0;
  let daysCheckedThisWeek = 0;

  for (let i = 0; i < 365; i++) {
    const dateString = currentDate.toISOString().split("T")[0];
    const isCompleted = sortedDates.includes(dateString);

    if (isCompleted) {
      streak++;
      daysCheckedThisWeek = 0;
      missedDaysThisWeek = 0;
    } else {
      daysCheckedThisWeek++;

      if (
        allowOneMiss &&
        missedDaysThisWeek === 0 &&
        daysCheckedThisWeek <= 7
      ) {
        missedDaysThisWeek++;
      } else {
        break;
      }
    }

    currentDate.setDate(currentDate.getDate() - 1);
  }

  return streak;
}
