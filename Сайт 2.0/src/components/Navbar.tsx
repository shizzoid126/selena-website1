import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, Send, Sparkles, X } from "lucide-react";
import { EASE } from "./Shared";

const LINKS = [
  { href: "#knowledge", label: "Мои знания" },
  { href: "#card", label: "Знамение дня" },
  { href: "#works", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-void/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:rotate-[20deg]">
              <MoonStar size={18} />
            </span>
            <span className="leading-none">
              <span className="font-display text-2xl font-semibold tracking-wide text-gold-bright">
                Селена
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.3em] text-mist/70">
                таро · астрология
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[12px] font-semibold uppercase tracking-[0.18em] text-mist transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold-bright hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#1c1026] shadow-[0_10px_30px_-10px_rgba(216,178,110,0.6)] transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
            >
              Связаться
              <Send size={13} />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-surface/60 text-gold lg:hidden"
              aria-label="Открыть меню"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-2xl"
          >
            <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">
              <span className="font-display text-2xl font-semibold text-gold-bright">
                Селена
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-gold"
                aria-label="Закрыть меню"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: EASE }}
                  className="py-3 font-display text-4xl font-medium text-bone transition-colors hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1c1026]"
              >
                Связаться
                <Send size={15} />
              </motion.a>
            </nav>
            <p className="pb-10 text-center text-xs uppercase tracking-[0.3em] text-mist/50">
              звёзды уже говорят
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href="#contact"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 26,
        scale: visible ? 1 : 0.9,
      }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed bottom-6 right-6 z-40 ${visible ? "" : "pointer-events-none"}`}
      aria-label="Связаться со мной"
    >
      <span className="absolute inset-0 animate-ring-pulse rounded-full bg-gold/50" />
      <span className="relative flex items-center gap-2.5 rounded-full bg-gradient-to-br from-gold-bright via-gold to-ember px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#1c1026] shadow-[0_16px_45px_-12px_rgba(216,178,110,0.65)] transition-transform duration-300 hover:scale-[1.05]">
        <Sparkles size={16} />
        Связаться
      </span>
    </motion.a>
  );
}
