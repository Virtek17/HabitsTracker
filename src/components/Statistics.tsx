import type { Habit } from "../types/habit";

interface StatisticsProps {
  habit: Habit;
  completionRate: number;
}

export function Statistics({ habit, completionRate }: StatisticsProps) {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split("T")[0];
  });

  const weeklyCompletion = last7Days.filter((date) =>
    habit.completedDates.includes(date)
  ).length;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthlyCompletion = habit.completedDates.filter((date) => {
    const d = new Date(date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysSinceCreated =
    Math.floor(
      (new Date().getTime() - new Date(habit.createdAt).getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  return (
    <div className="space-y-6" data-oid="khc844_">
      {/* Top Stats */}
      <div className="grid md:grid-cols-2 gap-6" data-oid="lf4n5ld">
        {/* Current Streak */}
        <div
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c4ff61] transition-all hover-lift"
          data-oid="50jrk9f"
        >
          <div className="flex items-center justify-between" data-oid="x7fhy7b">
            <div data-oid="6g.02xh">
              <div
                className="text-sm font-bold uppercase tracking-wider text-[#8a8a8a] mb-2"
                data-oid="sj7hq0g"
              >
                Текущий Streak
              </div>
              <div
                className="text-7xl font-bold mb-2 text-[#c4ff61]"
                data-oid=".ba9p3_"
              >
                {habit.currentStreak}
              </div>
              <div
                className="text-[#8a8a8a] text-sm uppercase tracking-wider"
                data-oid="gb-1i.6"
              >
                Дней подряд
              </div>
            </div>
            <div className="text-7xl" data-oid="e4q54pc">
              🔥
            </div>
          </div>
        </div>

        {/* Best Streak */}
        <div
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c4ff61] transition-all hover-lift"
          data-oid="_1kyvr7"
        >
          <div className="flex items-center justify-between" data-oid="h.1z8e4">
            <div data-oid="4vped68">
              <div
                className="text-sm font-bold uppercase tracking-wider text-[#8a8a8a] mb-2"
                data-oid="tkyqk_4"
              >
                Лучший Streak
              </div>
              <div
                className="text-7xl font-bold mb-2 text-white"
                data-oid="1nel0:4"
              >
                {habit.longestStreak}
              </div>
              <div
                className="text-[#8a8a8a] text-sm uppercase tracking-wider"
                data-oid="ao4yzhx"
              >
                Рекорд
              </div>
            </div>
            <div className="text-7xl" data-oid="hpyzc.w">
              💎
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
        data-oid="a2rdum_"
      >
        <div
          className="flex items-center justify-between mb-6"
          data-oid="mcuahph"
        >
          <div data-oid="w.tjdm-">
            <h3
              className="text-xl font-bold text-white uppercase tracking-tight"
              data-oid="wj2r262"
            >
              Последняя неделя
            </h3>
            <p
              className="text-sm text-[#8a8a8a] mt-1 font-medium"
              data-oid="20hdxam"
            >
              {weeklyCompletion} из 7 дней
            </p>
          </div>
          <div className="text-4xl font-bold text-[#c4ff61]" data-oid="z_zf8-j">
            {Math.round((weeklyCompletion / 7) * 100)}%
          </div>
        </div>
        <div className="flex gap-2" data-oid="y-4xdcu">
          {last7Days.map((date) => {
            const isCompleted = habit.completedDates.includes(date);
            const dayName = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][
              new Date(date).getDay()
            ];

            return (
              <div key={date} className="flex-1" data-oid="age90o8">
                <div
                  className={`h-24 rounded-xl flex items-end justify-center pb-2 transition-all relative overflow-hidden border ${
                    isCompleted
                      ? "bg-[#c4ff61] border-[#c4ff61]"
                      : "bg-[#0a0a0a] border-[#2a2a2a]"
                  }`}
                  data-oid="b-7lu_."
                >
                  {isCompleted && (
                    <div
                      className="absolute inset-0 flex items-center justify-center text-3xl opacity-20"
                      data-oid="ylraqx2"
                    >
                      {habit.emoji}
                    </div>
                  )}
                  <span
                    className={`text-xs font-bold uppercase tracking-wider relative z-10 ${
                      isCompleted ? "text-[#0a0a0a]" : "text-[#8a8a8a]"
                    }`}
                    data-oid="89ree57"
                  >
                    {dayName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Progress */}
      <div
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
        data-oid="cvf0-.4"
      >
        <div
          className="flex items-center justify-between mb-6"
          data-oid="58wmu0_"
        >
          <div data-oid="xxwf_k:">
            <h3
              className="text-xl font-bold text-white uppercase tracking-tight"
              data-oid="7d92rwz"
            >
              Этот месяц
            </h3>
            <p
              className="text-sm text-[#8a8a8a] mt-1 font-medium"
              data-oid="qelpe7o"
            >
              {monthlyCompletion} из {daysInMonth} дней
            </p>
          </div>
          <div className="text-4xl font-bold text-[#c4ff61]" data-oid="e:h936e">
            {Math.round((monthlyCompletion / daysInMonth) * 100)}%
          </div>
        </div>
        <div
          className="relative h-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full overflow-hidden"
          data-oid="k7fy658"
        >
          <div
            style={{ width: `${(monthlyCompletion / daysInMonth) * 100}%` }}
            className="absolute inset-y-0 left-0 bg-[#c4ff61] transition-all duration-500 rounded-full accent-glow"
            data-oid="dzsqmk5"
          />
        </div>
      </div>

      {/* Overall Stats */}
      <div
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
        data-oid="3zfz22:"
      >
        <div className="text-center mb-8" data-oid="omlcuzy">
          <div
            className="text-8xl font-bold text-[#c4ff61] mb-3"
            data-oid="9gqpre-"
          >
            {completionRate}%
          </div>
          <div
            className="text-sm text-[#8a8a8a] uppercase tracking-wider font-bold"
            data-oid="2r3c7o0"
          >
            Общий процент выполнения
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4" data-oid="qszidm7">
          <div
            className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-5 text-center hover:border-[#c4ff61] transition-all"
            data-oid="g-37crc"
          >
            <div
              className="text-4xl font-bold text-white mb-2"
              data-oid="sf54.:h"
            >
              {habit.completedDates.length}
            </div>
            <div
              className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
              data-oid="g57..3f"
            >
              Всего дней
            </div>
          </div>
          <div
            className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-5 text-center hover:border-[#c4ff61] transition-all"
            data-oid="96qxe3g"
          >
            <div
              className="text-4xl font-bold text-white mb-2"
              data-oid="03_y9-8"
            >
              {daysSinceCreated}
            </div>
            <div
              className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
              data-oid="wjrexfi"
            >
              С создания
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
