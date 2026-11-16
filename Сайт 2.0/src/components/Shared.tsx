import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MoonMini({ className = "text-gold" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export function GoldRule({ center = true }: { center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
      <MoonMini />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <span className="font-script text-2xl text-gold sm:text-3xl">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl leading-[1.05] font-medium text-bone sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-sm leading-relaxed text-mist sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <GoldRule center={align === "center"} />
      </Reveal>
    </div>
  );
}
