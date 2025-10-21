"use client";

import type { Habit } from "../types/habit";
import {
  getMonthDays,
  formatDate,
  isToday,
  getMonthName,
  getWeekDays,
} from "../utils/dateUtils";
import { useState } from "react";

interface CalendarProps {
  habit: Habit;
}

export function Calendar({ habit }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = getMonthDays(year, month);
  const weekDays = getWeekDays();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isDayCompleted = (day: Date): boolean => {
    return habit.completedDates.includes(formatDate(day));
  };

  const isCurrentMonth = (day: Date): boolean => {
    return day.getMonth() === month;
  };

  const completedDaysInMonth = habit.completedDates.filter((date) => {
    const d = new Date(date);
    return d.getMonth() === month && d.getFullYear() === year;
  }).length;

  return (
    <div
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
      data-oid="79l4_53"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-8"
        data-oid="j73.b7r"
      >
        <button
          onClick={goToPreviousMonth}
          className="p-3 hover:bg-[#2a2a2a] rounded-xl transition-colors text-white"
          data-oid="67vtdqs"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="6vddn8i"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
              data-oid="v6ggmur"
            />
          </svg>
        </button>

        <div className="text-center" data-oid="1i:b5ep">
          <h3 className="text-3xl font-bold text-white" data-oid="e7lhuk-">
            {getMonthName(month)}
          </h3>
          <p
            className="text-[#8a8a8a] text-sm font-medium mt-1"
            data-oid="aqjme9b"
          >
            {year}
          </p>
        </div>

        <button
          onClick={goToNextMonth}
          className="p-3 hover:bg-[#2a2a2a] rounded-xl transition-colors text-white"
          data-oid="mtg-:b8"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="ob47o:8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
              data-oid="mo_9kha"
            />
          </svg>
        </button>
      </div>

      {/* Week days header */}
      <div className="grid grid-cols-7 gap-3 mb-3" data-oid="2oxgsn4">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-bold text-[#8a8a8a] py-2 uppercase tracking-wider"
            data-oid="id.07tq"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-3 mb-8" data-oid="kjxvm9y">
        {days.map((day, index) => {
          const completed = isDayCompleted(day);
          const today = isToday(day);
          const inCurrentMonth = isCurrentMonth(day);

          return (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center rounded-xl text-sm font-semibold
                transition-all duration-200 relative
                ${inCurrentMonth ? "text-white" : "text-[#8a8a8a]"}
                ${
                  completed && inCurrentMonth
                    ? "bg-[#c4ff61] text-[#0a0a0a]"
                    : "bg-[#0a0a0a] border border-[#2a2a2a]"
                }
                ${today && !completed ? "ring-2 ring-[#c4ff61]" : ""}
                ${
                  today && completed
                    ? "ring-2 ring-[#c4ff61] animate-pulse-border"
                    : ""
                }
                ${completed && inCurrentMonth ? "accent-glow" : ""}
              `}
              data-oid="vk1e30p"
            >
              <span className="relative z-10" data-oid="_jj2zx3">
                {day.getDate()}
              </span>
              {completed && inCurrentMonth && (
                <div
                  className="absolute inset-0 flex items-center justify-center text-3xl opacity-20"
                  data-oid="g05s1xp"
                >
                  {habit.emoji}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 gap-4 pt-6 border-t border-[#2a2a2a]"
        data-oid="8:rz-pn"
      >
        <div
          className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-5 text-center hover:border-[#c4ff61] transition-all"
          data-oid="y4d4bv5"
        >
          <div
            className="text-5xl font-bold text-[#c4ff61] mb-2"
            data-oid="7_sq0h4"
          >
            {completedDaysInMonth}
          </div>
          <div
            className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
            data-oid="_eizrzo"
          >
            Дней в месяце
          </div>
        </div>
        <div
          className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-5 text-center hover:border-[#c4ff61] transition-all"
          data-oid="dyonnn."
        >
          <div
            className="text-5xl font-bold text-white mb-2"
            data-oid="cpiqon4"
          >
            {habit.completedDates.length}
          </div>
          <div
            className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
            data-oid="-3hufgw"
          >
            Всего дней
          </div>
        </div>
      </div>
    </div>
  );
}
