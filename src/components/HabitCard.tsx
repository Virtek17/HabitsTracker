import type { Habit } from "../types/habit";
import { useState } from "react";

interface HabitCardProps {
  habit: Habit;
  isCompletedToday: boolean;
  onToggle: () => void;
  onDelete: () => void;
  completionRate: number;
}

export function HabitCard({
  habit,
  isCompletedToday,
  onToggle,
  onDelete,
  completionRate,
}: HabitCardProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleToggle = () => {
    if (!isCompletedToday) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
    }
    onToggle();
  };

  return (
    <div
      className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#c4ff61] hover-lift"
      data-oid="r57l9:k"
    >
      {/* Animation overlay */}
      {showAnimation && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-[#c4ff61]/10 animate-fade-out pointer-events-none"
          data-oid="lyfu4it"
        >
          <div
            className="text-8xl animate-bounce-scale drop-shadow-[0_0_30px_rgba(196,255,97,0.5)]"
            data-oid=":3_a142"
          >
            {habit.emoji}
          </div>
        </div>
      )}

      <div className="p-6" data-oid="-jubcji">
        {/* Header */}
        <div
          className="flex items-start justify-between mb-6"
          data-oid="i1hp57a"
        >
          <div className="flex items-center gap-4" data-oid="ecn_coq">
            <div className="text-5xl" data-oid="iuk_6_a">
              {habit.emoji}
            </div>
            <div data-oid="92d671_">
              <h3
                className="text-2xl font-bold text-white mb-1"
                data-oid="qmf6s41"
              >
                {habit.name}
              </h3>
              <p
                className="text-sm text-[#8a8a8a] font-medium"
                data-oid="89r8eh3"
              >
                {completionRate}% выполнено
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-[#8a8a8a] hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-[#2a2a2a]"
            data-oid="zbcdllc"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="s9slv30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                data-oid="j-slj3t"
              />
            </svg>
          </button>
        </div>

        {/* Streak Display */}
        <div
          className="mb-6 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6"
          data-oid="dmzyrh1"
        >
          <div className="flex items-center justify-between" data-oid="3n.nsip">
            <div data-oid="poduo0k">
              <div
                className="flex items-baseline gap-3 mb-2"
                data-oid="7x998tr"
              >
                <span
                  className="text-6xl font-bold text-[#c4ff61]"
                  data-oid=".1gdm-i"
                >
                  {habit.currentStreak}
                </span>
                <span className="text-3xl" data-oid="id9h.ji">
                  🔥
                </span>
              </div>
              <div
                className="text-sm text-[#8a8a8a] font-semibold uppercase tracking-wider"
                data-oid="wn1vfv2"
              >
                Дней подряд
              </div>
            </div>

            <div className="text-right" data-oid="5ek6f63">
              <div
                className="text-4xl font-bold text-white mb-1"
                data-oid="tf5h:uy"
              >
                {habit.longestStreak}
              </div>
              <div
                className="text-xs text-[#8a8a8a] uppercase tracking-wider font-medium"
                data-oid="2jcoxye"
              >
                Рекорд
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleToggle}
          disabled={showAnimation}
          className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-200 ${
            isCompletedToday
              ? "bg-[#0a0a0a] border border-[#2a2a2a] text-[#8a8a8a]"
              : "bg-[#c4ff61] text-[#0a0a0a] hover:bg-[#9ed631] accent-glow active:scale-[0.98]"
          }`}
          data-oid="1mup4ww"
        >
          {isCompletedToday ? "✓ Выполнено" : "Отметить день"}
        </button>

        {habit.allowOneMissPerWeek && (
          <div className="mt-4 text-center" data-oid="fq.gcu6">
            <span
              className="text-xs text-[#8a8a8a] font-medium"
              data-oid="a-f6zqc"
            >
              📦 Режим милосердия активен
            </span>
          </div>
        )}
      </div>

      {/* Delete confirmation */}
      {showDeleteConfirm && (
        <div
          className="absolute inset-0 bg-[#1a1a1a]/98 backdrop-blur-sm flex items-center justify-center z-30 rounded-2xl"
          data-oid="dvdd3jb"
        >
          <div className="text-center p-6" data-oid="5yis17x">
            <div className="text-5xl mb-4" data-oid="5icxrx2">
              ⚠️
            </div>
            <p className="text-xl font-bold mb-6 text-white" data-oid="vo4faf9">
              Удалить привычку?
            </p>
            <div className="flex gap-3" data-oid="n8cl.sd">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-6 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl hover:border-[#c4ff61] transition-all font-semibold text-white"
                data-oid="zmlg.3v"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  onDelete();
                  setShowDeleteConfirm(false);
                }}
                className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-semibold"
                data-oid="g7b2r7o"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
