import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import StarField from "./components/StarField";
import { FloatingCTA, Navbar } from "./components/Navbar";
import { Hero, Marquee } from "./components/Hero";
import { Knowledge } from "./components/Knowledge";
import { TarotDay } from "./components/TarotDay";
import { Works } from "./components/Works";
import { Testimonials } from "./components/Testimonials";
import { Contact, Footer } from "./components/Contact";

function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 110, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 110, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 170);
      y.set(e.clientY - 170);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[65] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(216,178,110,0.075),transparent_62%)] mix-blend-screen"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-void font-body text-bone antialiased">
      <StarField />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Knowledge />
        <TarotDay />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <div className="vignette" />
      <div className="grain-overlay" />
    </div>
  );
}
