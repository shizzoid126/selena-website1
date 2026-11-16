import { useState } from "react";
import type { FormEvent } from "react";
import {
  MessageCircle,
  MoonStar,
  Send,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeader } from "./Shared";

const CHANNELS: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  {
    icon: Send,
    label: "Telegram",
    value: "@O17chz",
    href: "https://t.me/O17chz",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+7 747 629-96-25",
    href: "https://wa.me/77476299625",
  },
];

const STEPS = [
  "Вы пишете вопрос — я мягко уточняю детали",
  "Делаю расклад и записываю подробный разбор",
  "Отвечаем на уточнения — и находим решение",
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-void/60 px-4 py-3.5 text-sm text-bone placeholder:text-mist/40 outline-none transition-all duration-300 focus:border-gold/60 focus:ring-2 focus:ring-gold/20";

export function Contact() {
  const [form, setForm] = useState({ name: "", link: "", question: "" });
  const [sent, setSent] = useState(false);

 
const submit = (e: FormEvent) => {
  e.preventDefault();

  const message = `
🌙 Новая заявка с сайта Селена

👤 Имя: ${form.name}
📱 Контакт: ${form.link}

✨ Вопрос:
${form.question}
  `.trim();

  const whatsappUrl = `https://wa.me/77476299625?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(109,66,193,0.12),transparent_62%)]" />

      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        {/* ----- left ----- */}
        <div className="flex flex-col items-start gap-9">
          <SectionHeader
            align="left"
            eyebrow="связаться"
            title={
              <>
                Задайте свой вопрос
                <br />
                <em className="italic text-gold-grad">Вселенной</em>
              </>
            }
            description="Расскажите, что тревожит: любовь, выбор, перемены или смутное чувство, которое не даёт покоя. Отвечаю лично — обычно в течение часа."
          />

          <div className="flex w-full flex-col gap-3">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={0.06 * i}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center gap-5 rounded-2xl border border-white/5 bg-surface/60 px-6 py-4 transition-all duration-400 hover:border-gold/30 hover:bg-royal/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/8 text-gold transition-transform duration-500 group-hover:scale-110">
                    <c.icon size={18} />
                  </span>
                  <span className="flex-1">
                    <b className="block text-sm font-bold uppercase tracking-[0.15em] text-bone">
                      {c.label}
                    </b>
                    <span className="mt-0.5 block text-xs text-mist">
                      {c.value}
                    </span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold/0 transition-colors duration-400 group-hover:text-gold">
                    написать →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="w-full rounded-2xl border border-white/5 bg-abyss/60 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
                как пройдёт консультация
              </p>
              <ol className="mt-5 flex flex-col gap-4">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="font-display text-lg font-semibold leading-none text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-mist">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* ----- right: form ----- */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] border border-gold/20 bg-surface/80 p-7 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-[linear-gradient(140deg,rgba(216,178,110,0.12),transparent_30%,transparent_70%,rgba(216,178,110,0.12))]" />

            {sent ? (
              <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-6 text-center">
                <span className="relative grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                  <span className="absolute inset-0 animate-ring-pulse rounded-full bg-gold/40" />
                  <Sparkles size={28} />
                </span>
                <h3 className="font-display text-3xl font-medium text-bone">
                  Послание отправлено
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-mist">
                  {form.name ? `${form.name}, ` : ""}я получила ваше послание и
                  отвечу лично — обычно в течение часа. Звёзды уже смотрят на
                  ваш вопрос.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", link: "", question: "" });
                  }}
                  className="mt-2 rounded-full border border-gold/30 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-bright transition-colors hover:border-gold/70 hover:bg-gold/5"
                >
                  Написать ещё одно
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="relative flex flex-col gap-6">
                <div className="text-center">
                  <MoonStar className="mx-auto text-gold" size={22} />
                  <h3 className="mt-4 font-display text-3xl font-medium text-bone">
                    Форма послания
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-mist/60">
                    конфиденциально · без спама
                  </p>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                    Ваше имя
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className={inputCls}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                    Telegram или телефон
                  </span>
                  <input
                    required
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    placeholder="@username или +7 ..."
                    className={inputCls}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                    Ваш вопрос
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.question}
                    onChange={(e) =>
                      setForm({ ...form, question: e.target.value })
                    }
                    placeholder="Что вас тревожит? Любовь, выбор, перемены..."
                    className={`${inputCls} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group relative mt-1 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1c1026] shadow-[0_18px_50px_-14px_rgba(216,178,110,0.7)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Отправить послание
                  <Send size={15} />
                </button>

                <p className="text-center text-[11px] leading-relaxed text-mist/50">
                  Нажимая кнопку, вы доверяете звёздам — а я бережно храню
                  вашу тайну.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOT_LINKS = [
  { href: "#knowledge", label: "Знания" },
  { href: "#card", label: "Знамение дня" },
  { href: "#works", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

export function Footer() {
  const phases = [0.15, 0.35, 0.6, 0.85, 1, 0.85, 0.6, 0.35, 0.15];
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex items-center justify-center gap-3 pb-10" aria-hidden="true">
          {phases.map((o, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-gold"
              style={{ opacity: o }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-script text-4xl text-gold">Селена</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-mist/60">
              таро · астрология · руны · ритуалы
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FOOT_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist transition-colors hover:text-gold-bright"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/5 pt-7 text-center text-xs leading-relaxed text-mist/45">
          © 2026 Селена · таро и астрология. Предсказание — это карта, а не
          приговор: финальный выбор всегда остаётся за вами.
        </div>
      </div>
    </footer>
  );
}
