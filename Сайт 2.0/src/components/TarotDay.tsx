import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";
import { EASE, MoonMini, Reveal, SectionHeader } from "./Shared";

type CardT = {
  roman: string;
  name: string;
  text: string;
  keys: string[];
};

const DECK: CardT[] = [
  {
    roman: "I",
    name: "Маг",
    text: "День возможностей: всё нужное уже в ваших руках. Начните — мир подыграет.",
    keys: ["воля", "старт", "мастерство"],
  },
  {
    roman: "II",
    name: "Верховная Жрица",
    text: "Слушайте интуицию — сегодня она звучит громче логики. Ответ придёт в тишине.",
    keys: ["интуиция", "тайна", "тишина"],
  },
  {
    roman: "III",
    name: "Императрица",
    text: "День изобилия и заботы. Позвольте себе удовольствие — это часть большого замысла.",
    keys: ["изобилие", "забота", "красота"],
  },
  {
    roman: "VI",
    name: "Влюблённые",
    text: "Перед вами выбор сердца. Оно уже всё решило — осталось прислушаться.",
    keys: ["выбор", "союз", "сердце"],
  },
  {
    roman: "VII",
    name: "Колесница",
    text: "Действуйте смело: дорога открыта, а вожжи — в ваших руках. Не выпускайте направление.",
    keys: ["движение", "победа", "контроль"],
  },
  {
    roman: "VIII",
    name: "Сила",
    text: "Мягкость сегодня сильнее давления. Укротите ситуацию терпением, а не криком.",
    keys: ["терпение", "мягкость", "характер"],
  },
  {
    roman: "IX",
    name: "Отшельник",
    text: "Пауза и одиночество принесут ответ. Выключите шум — и услышите себя.",
    keys: ["тишина", "поиск", "мудрость"],
  },
  {
    roman: "X",
    name: "Колесо Фортуны",
    text: "Судьба делает поворот. Замечайте знаки: случайность сегодня — это подсказка.",
    keys: ["поворот", "шанс", "знаки"],
  },
  {
    roman: "XVII",
    name: "Звезда",
    text: "Надежда оправдана. Загадайте желание — Вселенная сегодня особенно внимательна.",
    keys: ["надежда", "мечта", "свет"],
  },
  {
    roman: "XVIII",
    name: "Луна",
    text: "Не всё то, чем кажется. Отложите выводы до утра — туман рассеется сам.",
    keys: ["туман", "сны", "осторожность"],
  },
  {
    roman: "XIX",
    name: "Солнце",
    text: "Светлый, щедрый день. Делитесь теплом — оно вернётся умноженным.",
    keys: ["радость", "тепло", "ясность"],
  },
  {
    roman: "XXI",
    name: "Мир",
    text: "Цикл благополучно завершается. Поблагодарите путь — и откройте новую дверь.",
    keys: ["финал", "гармония", "награда"],
  },
];

const STORAGE_KEY = "selena_card_of_day";

const loadStoredIndex = (): number | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    const idx = Number(raw);
    return Number.isInteger(idx) && idx >= 0 && idx < DECK.length ? idx : null;
  } catch {
    return null;
  }
};

export function TarotDay() {
  const [card, setCard] = useState<CardT | null>(null);
  const [open, setOpen] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const idx = loadStoredIndex();
    if (idx !== null) {
      setCard(DECK[idx]);
      setOpen(true);
      setHasDrawn(true);
    }
  }, []);

  const draw = () => {
    if (hasDrawn) return;
    const idx = Math.floor(Math.random() * DECK.length);
    try {
      sessionStorage.setItem(STORAGE_KEY, String(idx));
    } catch {
      /* приватный режим — карта просто не запомнится */
    }
    setCard(DECK[idx]);
    setOpen(true);
    setHasDrawn(true);
  };

  return (
    <section id="card" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,66,193,0.12),transparent_62%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-7">
          <SectionHeader
            align="left"
            eyebrow="знамение дня"
            title={
              <>
                Вытяните свою
                <br />
                <em className="italic text-gold-grad">карту дня</em>
              </>
            }
            description="Маленький ритуал перед большим решением: сосредоточьтесь на вопросе, глубоко вдохните — и позвольте колоде ответить. Учтите: знамение открывается лишь один раз за заход."
          />

          <Reveal delay={0.1}>
            {hasDrawn ? (
              <div className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-gold/25 bg-surface/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-mist/70">
                <Lock size={15} className="text-gold/70" />
                Знамение уже получено
              </div>
            ) : (
              <button
                onClick={draw}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1c1026] shadow-[0_18px_50px_-14px_rgba(216,178,110,0.7)] transition-transform duration-300 hover:scale-[1.04]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Вытянуть карту
                <Sparkles size={15} />
              </button>
            )}
          </Reveal>

          <Reveal delay={0.18}>
            <p className="max-w-sm text-xs leading-relaxed tracking-wide text-mist/70">
              Старшие арканы · тасует судьба.{" "}
              {hasDrawn
                ? "Колода открывается лишь раз за заход — новое знамение ждёт вас при следующем визите."
                : "Ваша карта откроется только один раз — загадайте вопрос заранее и не торопитесь."}
            </p>
          </Reveal>
        </div>

        <Reveal className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(216,178,110,0.14),transparent_60%)] blur-md" />

            <div className="relative h-[400px] w-[258px] [perspective:1400px] sm:h-[440px] sm:w-[286px]">
              <motion.div
                className="preserve-3d relative h-full w-full"
                animate={{ rotateY: open ? 180 : 0 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                {/* ---- back of the card (рубашка) ---- */}
                <div className="backface-hidden absolute inset-0 overflow-hidden rounded-2xl border border-gold/45 bg-gradient-to-b from-royal via-surface to-abyss shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
                  <div className="absolute inset-2.5 rounded-xl border border-gold/25" />
                  <div className="absolute inset-5 rounded-lg border border-gold/15" />
                  <div className="flex h-full flex-col items-center justify-center gap-5">
                    <span className="text-[11px] uppercase tracking-[0.5em] text-gold/70">
                      selena
                    </span>
                    <span className="relative grid h-24 w-24 place-items-center rounded-full border border-gold/40">
                      <span className="absolute -top-1.5 text-[10px] text-gold/80">
                        ✦
                      </span>
                      <span className="absolute -bottom-1.5 text-[10px] text-gold/80">
                        ✦
                      </span>
                      <span className="absolute -left-1.5 text-[10px] text-gold/80">
                        ✦
                      </span>
                      <span className="absolute -right-1.5 text-[10px] text-gold/80">
                        ✦
                      </span>
                      <MoonMini className="h-9 w-9 text-gold" />
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.5em] text-gold/70">
                      tarot
                    </span>
                  </div>
                </div>

                {/* ---- face of the card ---- */}
                <div className="backface-hidden absolute inset-0 [transform:rotateY(180deg)] overflow-hidden rounded-2xl border border-[#b98b3e]/60 bg-gradient-to-b from-[#f6ecd6] via-[#efdfba] to-[#e0c892] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
                  <div className="absolute inset-2.5 rounded-xl border border-[#8a6a34]/40" />
                  <div className="flex h-full flex-col items-center justify-between px-6 py-7 text-center text-[#3a2352]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8a6a34]">
                      Старший аркан
                    </span>
                    <div>
                      <div className="font-display text-6xl font-semibold leading-none text-[#3a2352]">
                        {card?.roman ?? "·"}
                      </div>
                      <div className="mt-3 font-display text-3xl font-semibold italic leading-tight">
                        {card?.name ?? "…"}
                      </div>
                      <div className="mx-auto mt-4 h-px w-16 bg-[#8a6a34]/50" />
                      <p className="mt-4 text-[13px] leading-relaxed text-[#4d3560]">
                        {card?.text ??
                          "Сделайте вдох — и тяните карту."}
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {(card?.keys ?? ["судьба"]).map((k) => (
                        <span
                          key={k}
                          className="rounded-full border border-[#8a6a34]/45 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7a5a26]"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mx-auto mt-6 h-3 w-44 rounded-full bg-black/60 blur-md" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
