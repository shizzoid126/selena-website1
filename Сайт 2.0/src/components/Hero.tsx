import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MoonStar, Send, Sparkles, Star } from "lucide-react";
import { EASE } from "./Shared";

function ZodiacRing() {
  const glyphs = "♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ";
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[132%] w-[132%] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-spin-slower opacity-70"
      >
        <defs>
          <path
            id="zodiacPath"
            d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
            fill="none"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="rgba(216,178,110,0.22)"
          strokeWidth="0.5"
          strokeDasharray="1.5 4"
        />
        <circle
          cx="100"
          cy="100"
          r="97"
          fill="none"
          stroke="rgba(216,178,110,0.16)"
          strokeWidth="0.5"
        />
        <text fontSize="10.5" fill="#d8b26e" letterSpacing="4.5">
          <textPath href="#zodiacPath">{glyphs.repeat(3)}</textPath>
        </text>
      </svg>
    </div>
  );
}

function Chip({
  className,
  children,
  delay = "0s",
}: {
  className: string;
  children: ReactNode;
  delay?: string;
}) {
  return (
    <div className={`absolute z-20 ${className}`}>
      <div
        className="animate-float rounded-2xl border border-gold/25 bg-void/80 px-4 py-3 shadow-[0_24px_55px_-22px_rgba(0,0,0,0.95)] backdrop-blur-md"
        style={{ animationDelay: delay }}
      >
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* ---------- left: text ---------- */}
        <div className="relative z-10 flex flex-col items-start gap-7">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="font-script text-2xl text-gold sm:text-3xl">
              таролог · астролог · ведунья
            </span>
          </motion.p>

          <h1 className="font-display text-[13.5vw] leading-[0.98] font-medium text-bone sm:text-7xl lg:text-[5rem] xl:text-[5.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              Открой завесу
            </motion.span>
            <motion.span
              className="block italic text-gold-grad"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.32, ease: EASE }}
            >
              своей судьбы
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="max-w-lg text-sm leading-relaxed text-mist sm:text-base"
          >
            Меня зовут Селена. Двенадцать лет я читаю карты, звёзды и знаки —
            помогаю находить ответы там, где разум бессилен, а сердце просит
            подсказки. Любовь, выбор, перемены: приходите с вопросом — уйдёте
            с картой пути.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1c1026] shadow-[0_18px_50px_-14px_rgba(216,178,110,0.7)] transition-transform duration-300 hover:scale-[1.04]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Связаться
              <Send size={15} />
            </a>
            <a
              href="#knowledge"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-gold-bright transition-colors duration-300 hover:border-gold/70 hover:bg-gold/5"
            >
              Мои знания
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-[12px] uppercase tracking-[0.18em] text-mist/80"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-gold/70" />
                <span className="relative h-2 w-2 rounded-full bg-gold" />
              </span>
              отвечаю в течение часа
            </span>
            <span className="flex items-center gap-2">
              <Star size={12} className="fill-gold text-gold" />
              4,9 · 860+ отзывов
            </span>
            <span>4 900+ консультаций</span>
          </motion.div>
        </div>

        {/* ---------- right: portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-full max-w-md"
        >
          <ZodiacRing />
          <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(216,178,110,0.14),transparent_62%)] blur-md" />

          <div className="relative z-10 overflow-hidden rounded-b-[2.2rem] rounded-t-[999px] border border-gold/30 shadow-[0_50px_130px_-40px_rgba(0,0,0,0.95)]">
            <img
              src="/images/hero.jpg"
              alt="Селена — таролог и астролог"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/75 via-transparent to-void/10" />
          </div>
          <div className="pointer-events-none absolute inset-3 z-10 rounded-b-[1.8rem] rounded-t-[999px] border border-gold/20" />

          <Chip className="-left-2 top-12 sm:-left-6 lg:-left-12">
            <span className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <Sparkles size={15} />
              </span>
              <span>
                <b className="font-display text-lg leading-none text-gold-bright">
                  12 лет
                </b>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-mist">
                  практики таро
                </span>
              </span>
            </span>
          </Chip>

          <Chip className="-right-2 top-[46%] sm:-right-6 lg:-right-10" delay="1.4s">
            <span className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <Star size={15} className="fill-gold" />
              </span>
              <span>
                <b className="font-display text-lg leading-none text-gold-bright">
                  4,9 из 5
                </b>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-mist">
                  оценка клиентов
                </span>
              </span>
            </span>
          </Chip>

          <Chip className="bottom-[-14px] left-8" delay="2.6s">
            <span className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <MoonStar size={15} />
              </span>
              <span>
                <b className="font-display text-lg leading-none text-gold-bright">
                  онлайн и лично
                </b>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-mist">
                  Москва · весь мир
                </span>
              </span>
            </span>
          </Chip>
        </motion.div>
      </div>

      <motion.a
        href="#knowledge"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mx-auto mt-16 flex w-max flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-mist/60 transition-colors hover:text-gold"
      >
        листайте вниз
        <ArrowDown size={15} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

const WORDS = [
  "Таро",
  "Натальная карта",
  "Руны",
  "Нумерология",
  "Хиромантия",
  "Свечная магия",
  "Кофейная гуща",
  "Обереги",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-abyss/70 py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="mx-7 flex items-center gap-7">
            <span className="font-display text-xl uppercase tracking-[0.28em] text-mist/75 sm:text-2xl">
              {w}
            </span>
            <span className="text-sm text-gold">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
    </div>
  );
}
