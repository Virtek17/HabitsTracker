interface EmptyStateProps {
  onAddHabit: () => void;
}

export function EmptyState({ onAddHabit }: EmptyStateProps) {
  return (
    <div
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-12"
      data-oid="j13bmf."
    >
      <div className="max-w-3xl mx-auto text-center" data-oid="xs:9qz0">
        {/* Hero */}
        <div className="mb-10" data-oid="sn.gl04">
          <div
            className="mb-8 flex justify-center gap-6 text-5xl sm:text-7xl"
            data-oid="px86r::"
          >
            <span
              className="animate-float"
              style={{ animationDelay: "0ms" }}
              data-oid="dz:5:.:"
            >
              🌱
            </span>
            <span
              className="animate-float"
              style={{ animationDelay: "300ms" }}
              data-oid="8wnf-og"
            >
              💪
            </span>
            <span
              className="animate-float"
              style={{ animationDelay: "600ms" }}
              data-oid="cmrl_v2"
            >
              🎯
            </span>
          </div>

          <h2
            className="text-4xl font-bold text-white mb-4 sm:text-5xl"
            data-oid="ykg783o"
          >
            Добро пожаловать
          </h2>

          <p className="text-lg text-[#8a8a8a] mb-10" data-oid="gpd84rm">
            Начните формировать полезные привычки и отслеживайте свой прогресс
            каждый день
          </p>

          <button
            onClick={onAddHabit}
            className="px-3 py-2 bg-[#c4ff61] text-[#0a0a0a] rounded-xl font-bold hover:bg-[#9ed631] transition-all active:scale-[0.98] text-lg inline-flex items-center gap-3 accent-glow sm:px-10 py-5"
            data-oid="ynej85v"
          >
            <span className="text-2xl" data-oid="y8u7.dv">
              +
            </span>
            Создать первую привычку
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="18pbi84">
          <div
            className="bg-[#0a0a0a] border border-[#2a2a2a] p-6 rounded-xl hover:border-[#c4ff61] transition-all"
            data-oid="leph_.t"
          >
            <div className="text-5xl mb-4" data-oid="0gvgn5.">
              📅
            </div>
            <h3
              className="font-bold text-white mb-2 text-lg"
              data-oid="rb6pl.w"
            >
              Отмечайте дни
            </h3>
            <p className="text-sm text-[#8a8a8a]" data-oid="12x.2xf">
              Нажимайте кнопку каждый день и следите за streak
            </p>
          </div>

          <div
            className="bg-[#0a0a0a] border border-[#2a2a2a] p-6 rounded-xl hover:border-[#c4ff61] transition-all"
            data-oid="hy-rjdk"
          >
            <div className="text-5xl mb-4" data-oid="1rofp4_">
              📊
            </div>
            <h3
              className="font-bold text-white mb-2 text-lg"
              data-oid="p-9xpuu"
            >
              Следите за прогрессом
            </h3>
            <p className="text-sm text-[#8a8a8a]" data-oid="fmxvzld">
              Календарь и статистика покажут ваши достижения
            </p>
          </div>

          <div
            className="bg-[#0a0a0a] border border-[#2a2a2a] p-6 rounded-xl hover:border-[#c4ff61] transition-all"
            data-oid="9n4s.6c"
          >
            <div className="text-5xl mb-4" data-oid="wc-cayo">
              🏆
            </div>
            <h3
              className="font-bold text-white mb-2 text-lg"
              data-oid="ueug5h."
            >
              Получайте награды
            </h3>
            <p className="text-sm text-[#8a8a8a]" data-oid=".315st0">
              Открывайте достижения за выполнение целей
            </p>
          </div>
        </div>

        {/* Tips */}
        <div
          className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-8"
          data-oid="x46-vug"
        >
          <p
            className="text-sm font-bold mb-6 text-[#8a8a8a]"
            data-oid="6:q_i:y"
          >
            💡 СОВЕТЫ ДЛЯ УСПЕХА
          </p>
          <div
            className="grid md:grid-cols-2 gap-4 text-left"
            data-oid="id:0r3e"
          >
            <div className="flex gap-3 items-start" data-oid="mt93xoe">
              <span
                className="text-[#c4ff61] font-bold text-xl"
                data-oid="7g9xwex"
              >
                ✓
              </span>
              <span className="text-sm text-[#8a8a8a]" data-oid="::.f_2i">
                Начните с одной простой привычки
              </span>
            </div>
            <div className="flex gap-3 items-start" data-oid="yqz_221">
              <span
                className="text-[#c4ff61] font-bold text-xl"
                data-oid="et2vyre"
              >
                ✓
              </span>
              <span className="text-sm text-[#8a8a8a]" data-oid="vz.-uep">
                Отмечайте день сразу после выполнения
              </span>
            </div>
            <div className="flex gap-3 items-start" data-oid="90:a16x">
              <span
                className="text-[#c4ff61] font-bold text-xl"
                data-oid="uxo62vf"
              >
                ✓
              </span>
              <span className="text-sm text-[#8a8a8a]" data-oid="eqemc2y">
                Не пропускайте дни для роста streak
              </span>
            </div>
            <div className="flex gap-3 items-start" data-oid="0n2bt0n">
              <span
                className="text-[#c4ff61] font-bold text-xl"
                data-oid="td253_d"
              >
                ✓
              </span>
              <span className="text-sm text-[#8a8a8a]" data-oid="csl_kl-">
                Используйте режим милосердия для гибкости
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
