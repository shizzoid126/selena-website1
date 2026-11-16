import { Flame, Gem, Hand, Hash, MoonStar, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeader } from "./Shared";

type Item = {
  icon: LucideIcon;
  num: string;
  title: string;
  text: string;
  tags: string[];
};

const ITEMS: Item[] = [
  {
    icon: Sparkles,
    num: "01",
    title: "Таро",
    text: "Классические и авторские расклады: от быстрого вопроса до «Кельтского креста». Карты говорят — я перевожу их язык на вашу жизнь.",
    tags: ["любовь", "карьера", "сроки"],
  },
  {
    icon: MoonStar,
    num: "02",
    title: "Астрология",
    text: "Натальная карта, соляры и транзиты. Небо в момент вашего рождения — это инструкция, которую я помогу прочитать.",
    tags: ["предназначение", "совместимость", "прогнозы"],
  },
  {
    icon: Hash,
    num: "03",
    title: "Нумерология",
    text: "Дата рождения как код личности: числа судьбы, души и пути. Точно, сухо и удивительно метко.",
    tags: ["матрица", "циклы", "коды"],
  },
  {
    icon: Gem,
    num: "04",
    title: "Руны",
    text: "Старший футарк — древние знаки Севера для коротких и очень честных ответов. Создаю рунические ставы и обереги.",
    tags: ["ставы", "защита", "решения"],
  },
  {
    icon: Hand,
    num: "05",
    title: "Хиромантия",
    text: "Ладонь — карта, начертанная при рождении. Линии жизни, сердца и судьбы рассказывают больше, чем кажется.",
    tags: ["характер", "таланты", "здоровье"],
  },
  {
    icon: Flame,
    num: "06",
    title: "Ритуалы и свечи",
    text: "Свечная магия, чистки и защита дома. Работаю мягко: ничего не навязываю и всегда объясняю, что и зачем делаю.",
    tags: ["чистка", "обереги", "новолуние"],
  },
];

export function Knowledge() {
  return (
    <section id="knowledge" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="мои знания"
          title={
            <>
              Искусства, которыми
              <br />
              я <em className="italic text-gold-grad">владею</em>
            </>
          }
          description="Двенадцать лет практики, десятки колод и тысячи судьбоносных вопросов — каждое знание отточено на реальных историях моих клиентов."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.num} delay={(i % 3) * 0.09} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-royal/50 hover:shadow-[0_35px_70px_-35px_rgba(216,178,110,0.25)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/0 blur-2xl transition-all duration-700 group-hover:bg-gold/10" />

                <div className="flex items-start justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl border border-gold/25 bg-gold/8 text-gold transition-all duration-500 group-hover:rotate-6 group-hover:border-gold/50 group-hover:bg-gold/15">
                    <item.icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-5xl leading-none text-white/6 transition-colors duration-500 group-hover:text-gold/20">
                    {item.num}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-[1.7rem] font-medium text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                  {item.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mist/70 transition-colors duration-500 group-hover:border-gold/25 group-hover:text-gold-bright/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-white/5">
                  <div className="h-px w-0 bg-gradient-to-r from-gold to-gold-bright transition-all duration-700 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
