import { useHabits } from "./hooks/useHabits";
import { HabitCard } from "./components/HabitCard";
import { Calendar } from "./components/Calendar";
import { Statistics } from "./components/Statistics";
import { Achievements } from "./components/Achievements";
import { AddHabitModal } from "./components/AddHabitModal";
import { EmptyState } from "./components/EmptyState";
import { useEffect, useState } from "react";

function App() {
  const {
    habits,
    achievements,
    addHabit,
    deleteHabit,
    toggleHabitToday,
    isHabitCompletedToday,
    getHabitCompletionRate,
    isLoaded,
  } = useHabits();

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);
  const [view, setView] = useState<
    "today" | "calendar" | "stats" | "achievements"
  >("today");

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      console.log("Telegram WebApp активен:", tg.initDataUnsafe);
    } else {
      console.log("Приложение запущено вне Telegram");
    }
  }, []);

  if (!isLoaded) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center bg-[#0a0a0a]"
        data-oid="x5qvz6l"
      >
        <div className="text-center" data-oid="_txcm9p">
          <div
            className="text-6xl mb-6 animate-bounce-scale"
            data-oid="z-m1b2o"
          >
            ⏳
          </div>
          <p className="text-[#8a8a8a] font-medium text-lg" data-oid="5js8von">
            Загрузка...
          </p>
        </div>
      </div>
    );
  }

  const selectedHabitData = habits.find((h) => h.id === selectedHabit);
  const totalStreak = habits.reduce((sum, h) => sum + h.currentStreak, 0);

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]" data-oid="qty26cc">
      {/* Header */}
      <header
        className="border-b border-[#2a2a2a] bg-[#0a0a0a]"
        data-oid="xzp6r84"
      >
        <div className="max-w-7xl mx-auto px-6 py-10" data-oid="1pmkr-1">
          <div
            className="flex items-start justify-between flex-wrap gap-6"
            data-oid="5u:ece."
          >
            <div data-oid="7vy4arz">
              <h1
                className="text-5xl md:text-6xl font-bold mb-3 tracking-tight"
                data-oid="0h22gqg"
              >
                <span className="text-white" data-oid="9yt8nhx">
                  ТРЕКЕР
                </span>{" "}
                <span className="text-[#c4ff61]" data-oid="wyo6h_f">
                  ПРИВЫЧЕК
                </span>
              </h1>
              <p className="text-[#8a8a8a] text-base" data-oid="bsur_vp">
                Формируй привычки • Отслеживай прогресс • Достигай целей
              </p>
            </div>
            <div
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-8 py-5"
              data-oid="oy54g27"
            >
              <div
                className="text-5xl font-bold text-[#c4ff61] mb-2"
                data-oid="3zw_dix"
              >
                {totalStreak}
              </div>
              <div
                className="text-[#8a8a8a] text-sm uppercase tracking-wider"
                data-oid="liu7k73"
              >
                Всего дней
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8" data-oid="z2qfnpf">
        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mb-8" data-oid="nrrdqyy">
          <button
            onClick={() => setView("today")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              view === "today"
                ? "bg-[#c4ff61] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#8a8a8a] border border-[#2a2a2a] hover:border-[#c4ff61] hover:text-white"
            }`}
            data-oid="wuf3_.w"
          >
            Сегодня
          </button>
          <button
            onClick={() => setView("calendar")}
            disabled={!selectedHabit}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              view === "calendar"
                ? "bg-[#c4ff61] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#8a8a8a] border border-[#2a2a2a] hover:border-[#c4ff61] hover:text-white"
            } ${
              !selectedHabit
                ? "opacity-40 cursor-not-allowed hover:border-[#2a2a2a] hover:text-[#8a8a8a]"
                : ""
            }`}
            data-oid="i_jaw_h"
          >
            Календарь
          </button>
          <button
            onClick={() => setView("stats")}
            disabled={!selectedHabit}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              view === "stats"
                ? "bg-[#c4ff61] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#8a8a8a] border border-[#2a2a2a] hover:border-[#c4ff61] hover:text-white"
            } ${
              !selectedHabit
                ? "opacity-40 cursor-not-allowed hover:border-[#2a2a2a] hover:text-[#8a8a8a]"
                : ""
            }`}
            data-oid="t6pv1:3"
          >
            Статистика
          </button>
          <button
            onClick={() => setView("achievements")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              view === "achievements"
                ? "bg-[#c4ff61] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#8a8a8a] border border-[#2a2a2a] hover:border-[#c4ff61] hover:text-white"
            }`}
            data-oid="d4mal1k"
          >
            Достижения
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6" data-oid="pce1mc3">
          {view === "today" && (
            <>
              {habits.length === 0 ? (
                <EmptyState
                  onAddHabit={() => setShowAddModal(true)}
                  data-oid="l-jz:t9"
                />
              ) : (
                <>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    data-oid=":14_.i2"
                  >
                    {habits.map((habit) => (
                      <div
                        key={habit.id}
                        onClick={() => setSelectedHabit(habit.id)}
                        className={`cursor-pointer transition-all ${
                          selectedHabit === habit.id
                            ? "ring-2 ring-[#c4ff61] rounded-2xl"
                            : ""
                        }`}
                        data-oid="cno0opz"
                      >
                        <HabitCard
                          habit={habit}
                          isCompletedToday={isHabitCompletedToday(habit.id)}
                          onToggle={() => toggleHabitToday(habit.id)}
                          onDelete={() => {
                            deleteHabit(habit.id);
                            if (selectedHabit === habit.id) {
                              setSelectedHabit(null);
                            }
                          }}
                          completionRate={getHabitCompletionRate(habit.id)}
                          data-oid="72ksa93"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="w-full py-6 bg-[#1a1a1a] border-2 border-dashed border-[#2a2a2a] rounded-2xl text-[#8a8a8a] hover:border-[#c4ff61] hover:text-[#c4ff61] transition-all font-semibold flex items-center justify-center gap-3"
                    data-oid="9ex2:10"
                  >
                    <span className="text-3xl" data-oid="39adnlu">
                      +
                    </span>
                    Добавить привычку
                  </button>
                </>
              )}
            </>
          )}

          {view === "calendar" && selectedHabitData && (
            <Calendar habit={selectedHabitData} data-oid="et5oj54" />
          )}

          {view === "stats" && selectedHabitData && (
            <Statistics
              habit={selectedHabitData}
              completionRate={getHabitCompletionRate(selectedHabitData.id)}
              data-oid="of:3bvb"
            />
          )}

          {view === "achievements" && (
            <Achievements achievements={achievements} data-oid="eo-.v7-" />
          )}
        </div>

        {/* Habit selector */}
        {(view === "calendar" || view === "stats") && habits.length > 0 && (
          <div
            className="mt-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
            data-oid="ud8wqc5"
          >
            <p
              className="text-sm font-semibold text-[#8a8a8a] mb-4 uppercase tracking-wider"
              data-oid="qs:z_hp"
            >
              Выберите привычку:
            </p>
            <div className="flex flex-wrap gap-3" data-oid="z5:c4uz">
              {habits.map((habit) => (
                <button
                  key={habit.id}
                  onClick={() => setSelectedHabit(habit.id)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    selectedHabit === habit.id
                      ? "bg-[#c4ff61] text-[#0a0a0a]"
                      : "bg-[#0a0a0a] text-[#8a8a8a] border border-[#2a2a2a] hover:border-[#c4ff61] hover:text-white"
                  }`}
                  data-oid="jibtu_."
                >
                  <span className="text-xl" data-oid="n6l5t25">
                    {habit.emoji}
                  </span>
                  <span data-oid=".bd:baw">{habit.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showAddModal && (
        <AddHabitModal
          onAdd={(habit) => {
            addHabit(habit);
            setShowAddModal(false);
          }}
          onClose={() => setShowAddModal(false)}
          data-oid="sj2ycno"
        />
      )}
    </div>
  );
}

export default App;
