import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeader } from "./Shared";

const STATS = [
  { v: "12", label: "лет практики и обучения" },
  { v: "4 900+", label: "личных консультаций" },
  { v: "68", label: "городов и стран мира" },
  { v: "98%", label: "клиентов возвращаются вновь" },
];

type Review = {
  name: string;
  meta: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Марина К.",
    meta: "34 года · Москва · расклад на отношения",
    text: "Селена назвала месяц и обстоятельства встречи — всё сошлось до деталей, у меня до сих пор мурашки. Пришла скептиком, а ушла с подробной картой своей жизни. Теперь советуюсь по каждому важному шагу.",
  },
  {
    name: "Олег В.",
    meta: "41 год · Санкт-Петербург · карьера",
    text: "Расклад про смену работы исполнился за два месяца — вплоть до описания будущего руководителя. Очень прямой разговор: без воды, страшилок и накруток. Редкий уровень честности в этом деле.",
  },
  {
    name: "Анна С.",
    meta: "27 лет · Казань · натальная карта",
    text: "Это было будто кто-то прочитал мою душу и выдал инструкцию по эксплуатации. Два часа консультации дали мне больше ясности, чем годы размышлений. Бесконечно благодарна и всем рекомендую.",
  },
  {
    name: "Дмитрий Л.",
    meta: "38 лет · Новосибирск · руны",
    text: "Спрашивал по рунам про переезд — ответ был резким и точным. Послушался и не пожалел: всё развернулось именно так, как легли знаки. Отдельное спасибо за оберег, сделан лично под мою ситуацию.",
  },
  {
    name: "Елизавета М.",
    meta: "45 лет · Екатеринбург · ритуал очищения",
    text: "После чистки дома впервые за годы сплю спокойно, ушло тяжёлое ощущение. Селена всё объяснила по шагам и ничего лишнего не навязывала. Чувствуется большой опыт, такт и доброе отношение.",
  },
  {
    name: "Игорь П.",
    meta: "30 лет · онлайн · быстрый вопрос",
    text: "Написал поздно вечером с тревожным вопросом — утром получил подробный аудиоразбор с фото расклада. Карта сыгралась ровно через неделю. Мистика? Не знаю. Факт — всё совпало.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[50vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(216,178,110,0.06),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="отзывы клиентов"
          title={
            <>
              Истории тех, кто уже
              <br />
              <em className="italic text-gold-grad">получил ответы</em>
            </>
          }
          description="Я не прошу верить на слово. Вот что говорят люди, которым карты и звёзды уже помогли."
        />

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl font-medium text-gold-grad sm:text-6xl">
                {s.v}
              </div>
              <div className="mx-auto mt-3 h-px w-8 bg-gold/40" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* reviews */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.09} className="h-full">
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/25 hover:bg-royal/40">
                <Quote
                  size={72}
                  className="absolute -right-3 -top-3 rotate-12 text-gold/6"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-bone/85">
                  «{r.text}»
                </p>
                <div className="mt-7 flex items-center gap-4 border-t border-white/5 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 font-display text-xl font-semibold text-gold-bright">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <b className="font-display text-lg text-bone">{r.name}</b>
                    <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-mist/70">
                      {r.meta}
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
