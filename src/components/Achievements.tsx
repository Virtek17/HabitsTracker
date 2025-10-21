"use client";

import type { Achievement } from "../types/habit";

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const unlocked = achievements.filter((a) => a.unlocked);
  const locked = achievements.filter((a) => !a.unlocked);

  return (
    <div className="space-y-6" data-oid="0:70i.n">
      {/* Header Card */}
      <div
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c4ff61] transition-all"
        data-oid="aiua_y0"
      >
        <div
          className="flex items-center justify-between mb-6"
          data-oid="i:llkis"
        >
          <div data-oid="8e-_y-7">
            <h2
              className="text-5xl font-bold mb-2 text-white uppercase tracking-tight"
              data-oid="w.fyxe4"
            >
              Достижения
            </h2>
            <p
              className="text-[#8a8a8a] text-sm uppercase tracking-wider"
              data-oid="idtx58v"
            >
              Ваши награды за упорство
            </p>
          </div>
          <div className="text-7xl" data-oid="r4avpzd">
            🏆
          </div>
        </div>
        <div className="pt-6 border-t border-[#2a2a2a]" data-oid="yfm.qsl">
          <div className="flex items-baseline gap-3" data-oid="6fj2050">
            <span
              className="text-6xl font-bold text-[#c4ff61]"
              data-oid="l8_bi9h"
            >
              {unlocked.length}
            </span>
            <span className="text-[#8a8a8a] text-xl" data-oid="_cmyr9g">
              из {achievements.length} открыто
            </span>
          </div>
        </div>
      </div>

      {/* Unlocked Achievements */}
      {unlocked.length > 0 && (
        <div className="space-y-4" data-oid="kvlduwz">
          <h3
            className="text-xs font-bold text-[#8a8a8a] uppercase tracking-wider px-2"
            data-oid="1vn1cc1"
          >
            Получено ({unlocked.length})
          </h3>
          <div className="space-y-3" data-oid="23va-vw">
            {unlocked.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-[#1a1a1a] border-2 border-[#c4ff61] rounded-2xl p-6 hover-lift accent-glow"
                data-oid="1kep4o2"
              >
                <div className="flex items-center gap-5" data-oid="g50vpli">
                  <div
                    className="text-7xl bg-[#c4ff61]/10 w-24 h-24 flex items-center justify-center rounded-2xl"
                    data-oid="w3q:9wa"
                  >
                    {achievement.emoji}
                  </div>
                  <div className="flex-1" data-oid="c4:lwpw">
                    <div
                      className="font-bold text-2xl text-white mb-1 uppercase tracking-tight"
                      data-oid="0y2w_n6"
                    >
                      {achievement.title}
                    </div>
                    <div
                      className="text-sm text-[#8a8a8a] mb-2"
                      data-oid="c:jb5v1"
                    >
                      {achievement.description}
                    </div>
                    {achievement.unlockedAt && (
                      <div
                        className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
                        data-oid="r7fpnak"
                      >
                        {new Date(achievement.unlockedAt).toLocaleDateString(
                          "ru-RU",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    className="bg-[#c4ff61] text-[#0a0a0a] px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
                    data-oid=":m:09u-"
                  >
                    Открыто
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked Achievements */}
      {locked.length > 0 && (
        <div className="space-y-4" data-oid="2aj0qnv">
          <h3
            className="text-xs font-bold text-[#8a8a8a] uppercase tracking-wider px-2"
            data-oid="fp6ggh0"
          >
            Заблокировано ({locked.length})
          </h3>
          <div className="space-y-3" data-oid="povb_dn">
            {locked.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-[#1a1a1a] border-2 border-dashed border-[#2a2a2a] rounded-2xl p-6 opacity-60"
                data-oid="ciqplzq"
              >
                <div className="flex items-center gap-5" data-oid="tu:h834">
                  <div
                    className="text-7xl grayscale bg-[#0a0a0a] w-24 h-24 flex items-center justify-center rounded-2xl"
                    data-oid="rq9kw63"
                  >
                    {achievement.emoji}
                  </div>
                  <div className="flex-1" data-oid="6nut8rq">
                    <div
                      className="font-bold text-2xl text-white mb-1 uppercase tracking-tight"
                      data-oid="uj0t1df"
                    >
                      {achievement.title}
                    </div>
                    <div
                      className="text-sm text-[#8a8a8a] mb-2"
                      data-oid="i_ynf::"
                    >
                      {achievement.description}
                    </div>
                    <div
                      className="text-xs text-[#8a8a8a] uppercase tracking-wider font-semibold"
                      data-oid="54pyl68"
                    >
                      Требуется: {achievement.threshold} дней подряд
                    </div>
                  </div>
                  <div className="text-5xl text-[#8a8a8a]" data-oid="zfnzao0">
                    🔒
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {unlocked.length === 0 && (
        <div
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-12 text-center"
          data-oid="::ask4t"
        >
          <div className="text-8xl mb-6" data-oid="3rmp99v">
            🎯
          </div>
          <h3
            className="text-3xl font-bold text-white mb-3 uppercase tracking-tight"
            data-oid="2eu2-sn"
          >
            Пока нет достижений
          </h3>
          <p className="text-[#8a8a8a]" data-oid="a8vd244">
            Продолжайте выполнять привычки и получайте награды!
          </p>
        </div>
      )}
    </div>
  );
}
