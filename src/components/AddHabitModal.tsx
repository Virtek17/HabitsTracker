"use client";

import { useState } from "react";
import { HABIT_COLORS, HABIT_EMOJIS } from "../types/habit";

interface AddHabitModalProps {
  onAdd: (habit: {
    name: string;
    emoji: string;
    color: string;
    allowOneMissPerWeek: boolean;
  }) => void;
  onClose: () => void;
}

export function AddHabitModal({ onAdd, onClose }: AddHabitModalProps) {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState(HABIT_EMOJIS[0]);
  const [color, setColor] = useState(HABIT_COLORS[0]);
  const [allowOneMiss, setAllowOneMiss] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({
        name: name.trim(),
        emoji,
        color,
        allowOneMissPerWeek: allowOneMiss,
      });
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-slide-up"
      data-oid="e1kqe88"
    >
      <div
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        data-oid="gb_f1tc"
      >
        <div className="p-8" data-oid="1wzdc_m">
          {/* Header */}
          <div
            className="flex items-center justify-between mb-8"
            data-oid="opnl1hu"
          >
            <div data-oid="ck:1gs0">
              <h2
                className="text-3xl font-bold text-white mb-2"
                data-oid="_gsxq8j"
              >
                Новая привычка
              </h2>
              <p className="text-sm text-[#8a8a8a]" data-oid="_4q-ksp">
                Создайте и персонализируйте
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#8a8a8a] hover:text-white transition-colors p-2 hover:bg-[#2a2a2a] rounded-lg"
              data-oid="-m_nopn"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="afx47kc"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="8coeby5"
                />
              </svg>
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-oid="yalqlm_"
          >
            {/* Name input */}
            <div data-oid="t:clw6m">
              <label
                className="block text-sm font-semibold text-[#8a8a8a] mb-3"
                data-oid="5w-5vju"
              >
                Название привычки
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Утренняя пробежка"
                className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl focus:border-[#c4ff61] outline-none transition-all font-medium text-white placeholder:text-[#8a8a8a]"
                autoFocus
                data-oid="dkrhoc_"
              />
            </div>

            {/* Emoji picker */}
            <div data-oid="v_a.sbf">
              <label
                className="block text-sm font-semibold text-[#8a8a8a] mb-3"
                data-oid="u2t33-x"
              >
                Выберите эмодзи
              </label>
              <div
                className="grid grid-cols-4 gap-2 sm:grid-cols-6"
                data-oid="a2ndgq_"
              >
                {HABIT_EMOJIS.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => setEmoji(e)}
                    className={`p-3 text-xl rounded-xl transition-all sm:p-3 text-3xl ${
                      emoji === e
                        ? "bg-[#c4ff61] scale-105"
                        : "bg-[#0a0a0a] hover:bg-[#2a2a2a]"
                    }`}
                    data-oid="6qo8_hv"
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* Color picker */}
            <div data-oid="qut2.qx">
              <label
                className="block text-sm font-semibold text-[#8a8a8a] mb-3"
                data-oid="im:eue1"
              >
                Выберите цвет
              </label>
              <div
                className="flex gap-2 justify-start flex-wrap"
                data-oid="w8_ix8j"
              >
                {HABIT_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`w-12 h-12 rounded-xl transition-all hover:scale-110 ${
                      color === c
                        ? "ring-2 ring-[#c4ff61] ring-offset-2 ring-offset-[#1a1a1a]"
                        : ""
                    }`}
                    style={{ backgroundColor: c }}
                    data-oid="u9lmzq5"
                  />
                ))}
              </div>
            </div>

            {/* Mercy mode toggle */}
            <div
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-5"
              data-oid="r_hic6g"
            >
              <div
                className="flex items-center justify-between"
                data-oid="grnh.g3"
              >
                <div data-oid="9kb1c-c">
                  <div className="font-bold text-white mb-1" data-oid="xayymlz">
                    Режим милосердия
                  </div>
                  <div className="text-sm text-[#8a8a8a]" data-oid="oiyokr8">
                    1 пропуск в неделю без сброса
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAllowOneMiss(!allowOneMiss)}
                  className={`relative w-16 h-9 rounded-full transition-all ${
                    allowOneMiss ? "bg-[#c4ff61]" : "bg-[#2a2a2a]"
                  }`}
                  data-oid="a:i1:6b"
                >
                  <div
                    className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                      allowOneMiss ? "translate-x-8" : "translate-x-1"
                    }`}
                    data-oid="iju6m22"
                  />
                </button>
              </div>
            </div>

            {/* Submit buttons */}
            <div className="flex gap-3 pt-4" data-oid="v-1ydjg">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 px-6 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl font-bold hover:border-[#c4ff61] transition-all text-white"
                data-oid=".mxuykt"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={!name.trim()}
                className="flex-1 py-4 px-6 bg-[#c4ff61] text-[#0a0a0a] rounded-xl font-bold hover:bg-[#9ed631] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#c4ff61] active:scale-[0.98] accent-glow"
                data-oid="u._5vxj"
              >
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
