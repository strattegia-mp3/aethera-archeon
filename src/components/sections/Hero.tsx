"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";

const HeroStat = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="flex flex-col items-center md:items-start"
  >
    <span className="text-3xl md:text-4xl font-bold leading-none font-display text-gradient-gold">
      {value}
    </span>
    <span className="text-xs mt-2 tracking-widest uppercase text-foreground/60 font-body">
      {label}
    </span>
  </motion.div>
);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityParallax = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);

  const handleCTA = () => {
    const el = document.getElementById(
      HERO_CONTENT.cta.primaryHref.replace("#", ""),
    );
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Apresentação da Aethera Archeon"
      className="relative min-h-screen flex items-center overflow-hidden bg-background transition-colors duration-300"
    >
      {/* ── Architectural Background Abstract ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle dynamic gradients */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 20%, color-mix(in srgb, var(--color-gold) 8%, transparent) 0%, transparent 60%)",
          }}
        />

        {/* Architectural grid & lines (Blueprints style) */}
        <svg
          className="absolute right-[-10%] top-0 w-full md:w-[70%] h-full opacity-10 text-foreground"
          viewBox="0 0 800 800"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          {/* Main Arches and Golden Ratio Hints */}
          <circle
            cx="400"
            cy="400"
            r="300"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="100"
            y="100"
            width="600"
            height="600"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="100"
            x2="700"
            y2="700"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="700"
            y1="100"
            x2="100"
            y2="700"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M400 0 v800 M0 400 h800"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="400"
            cy="400"
            r="150"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>

        {/* Minimal dot grid */}
        <div
          className="absolute left-0 bottom-0 w-64 h-64 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="relative z-10 container-nexus w-full pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="max-w-3xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-surface border border-surface shadow-sm"
          >
            <TrendingUp
              size={13}
              className="text-[var(--color-gold)]"
              strokeWidth={1.5}
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80 font-body">
              {HERO_CONTENT.badge.highLevel}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-balance leading-[1.1] font-normal mb-6 font-display text-foreground"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            {HERO_CONTENT.headline.start}
            <span className="italic text-gradient-gold">
              {HERO_CONTENT.headline.highlight}
            </span>
            {HERO_CONTENT.headline.end}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-foreground/70 font-body"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-background font-semibold text-sm uppercase tracking-wider font-body transition-shadow hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
              style={{
                background: "var(--color-gold)",
                borderRadius: "var(--radius-btn)",
              }}
            >
              {HERO_CONTENT.cta.primaryLabel}
              <ArrowRight size={16} strokeWidth={1.5} />
            </motion.button>

            <motion.a
              href={HERO_CONTENT.cta.secondaryHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-wider text-foreground border transition-colors bg-surface border-surface hover:border-[var(--color-gold)] font-body"
              style={{ borderRadius: "var(--radius-btn)" }}
            >
              {HERO_CONTENT.cta.secondaryLabel}
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5 mb-14"
          >
            {HERO_CONTENT.trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-xs font-body text-foreground/60"
              >
                <Icon
                  size={14}
                  className="text-[var(--color-gold)]"
                  strokeWidth={1.5}
                />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-14 pt-4 border-t border-border/50">
            {HERO_CONTENT.stats.map((stat, idx) => (
              <div key={idx} className="flex gap-8 md:gap-14">
                <HeroStat
                  value={stat.value}
                  label={stat.label}
                  delay={0.7 + idx * 0.1}
                />
                {idx < HERO_CONTENT.stats.length - 1 && (
                  <div className="hidden sm:block w-px self-stretch bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-widest uppercase font-body text-foreground/40">
          {HERO_CONTENT.scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 border flex items-start justify-center pt-1.5 border-foreground/20"
          style={{ borderRadius: "10px" }}
        >
          <div
            className="w-[2px] h-2 bg-[var(--color-gold)]"
            style={{ borderRadius: "2px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
