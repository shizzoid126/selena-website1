import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  phase: number;
  speed: number;
  warm: boolean;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let frame = 0;
    let nextMeteorAt = 260;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, cx: 0, cy: 0 };
    let stars: Star[] = [];
    const meteors: Meteor[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(240, Math.floor((width * height) / 7000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        r: 0.3 + Math.random() * 1.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.4,
        warm: Math.random() < 0.28,
      }));
    };

    const onMove = (e: MouseEvent) => {
      if (width === 0) return;
      mouse.x = e.clientX / width - 0.5;
      mouse.y = e.clientY / height - 0.5;
    };

    const draw = () => {
      frame += 1;
      mouse.cx += (mouse.x - mouse.cx) * 0.04;
      mouse.cy += (mouse.y - mouse.cy) * 0.04;
      ctx.clearRect(0, 0, width, height);

      const t = frame / 60;
      for (const s of stars) {
        const tw = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const alpha = 0.12 + tw * (0.3 + s.z * 0.5);
        const px = s.x - mouse.cx * (10 + s.z * 26);
        const py = s.y - mouse.cy * (10 + s.z * 26);
        ctx.beginPath();
        ctx.fillStyle = s.warm
          ? `rgba(232,196,138,${alpha})`
          : `rgba(214,208,235,${alpha})`;
        ctx.arc(px, py, s.r * (0.7 + tw * 0.6), 0, Math.PI * 2);
        ctx.fill();

        if (s.z > 0.86 && tw > 0.93) {
          ctx.strokeStyle = `rgba(240,217,168,${(tw - 0.93) * 8})`;
          ctx.lineWidth = 0.6;
          const len = 4 + s.r * 3;
          ctx.beginPath();
          ctx.moveTo(px - len, py);
          ctx.lineTo(px + len, py);
          ctx.moveTo(px, py - len);
          ctx.lineTo(px, py + len);
          ctx.stroke();
        }
      }

      if (frame > nextMeteorAt) {
        nextMeteorAt = frame + 380 + Math.random() * 520;
        meteors.push({
          x: Math.random() * width * 0.7 + width * 0.15,
          y: Math.random() * height * 0.28,
          vx: 6 + Math.random() * 4,
          vy: 2.4 + Math.random() * 1.6,
          life: 0,
          max: 70 + Math.random() * 40,
        });
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += 1;
        m.x += m.vx;
        m.y += m.vy;
        if (m.life >= m.max) {
          meteors.splice(i, 1);
          continue;
        }
        const fade = Math.sin((m.life / m.max) * Math.PI);
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.vx * 14,
          m.y - m.vy * 14
        );
        grad.addColorStop(0, `rgba(242,221,176,${0.85 * fade})`);
        grad.addColorStop(1, "rgba(242,221,176,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(109,66,193,0.16),transparent_65%)]" />
      <div className="absolute top-1/3 -left-40 h-[70vh] w-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(216,178,110,0.07),transparent_60%)]" />
      <div className="absolute -right-40 bottom-0 h-[70vh] w-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(76,42,133,0.18),transparent_60%)]" />
    </div>
  );
}
