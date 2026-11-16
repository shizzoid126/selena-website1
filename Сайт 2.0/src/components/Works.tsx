import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Shared";

type Work = {
  img: string;
  title: string;
  tag: string;
  aspect: string;
};

const WORKS: Work[] = [
  {
    img: "/images/work-tarot.jpg",
    title: "Расклад «Кельтский крест»",
    tag: "таро · судьбоносный вопрос",
    aspect: "aspect-[3/4]",
  },
  {
    img: "/images/work-crystal.jpg",
    title: "Хрустальное видение",
    tag: "кристалломания · работа с дымом",
    aspect: "aspect-[4/5]",
  },
  {
    img: "/images/work-ritual.jpg",
    title: "Ритуал новолуния",
    tag: "свечная магия · чистка дома",
    aspect: "aspect-square",
  },
  {
    img: "/images/work-astro.jpg",
    title: "Разбор натальной карты",
    tag: "астрология · предназначение",
    aspect: "aspect-[4/5]",
  },
  {
    img: "/images/work-runes.jpg",
    title: "Рунический став",
    tag: "руны · оберег ручной работы",
    aspect: "aspect-[3/4]",
  },
  {
    img: "/images/work-coffee.jpg",
    title: "Кофейная гуща",
    tag: "тассеография · ближайшие события",
    aspect: "aspect-square",
  },
];

export function Works() {
  return (
    <section id="works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="мои работы"
          title={
            <>
              Атмосфера моей
              <br />
              <em className="italic text-gold-grad">практики</em>
            </>
          }
          description="Каждая встреча — маленький ритуал: свечи, колода, тишина и ваш вопрос. Загляните за кулисы моей работы."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {WORKS.map((w, i) => (
            <Reveal
              key={w.title}
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-3xl border border-white/5 transition-colors duration-500 hover:border-gold/30">
                <div className={`${w.aspect} w-full overflow-hidden`}>
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent" />

                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-void/70 text-gold opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>

                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/90">
                    {String(i + 1).padStart(2, "0")} · {w.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-bone">
                    {w.title}
                  </h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-bright transition-colors hover:text-gold"
          >
            Хотите такой же разбор
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
