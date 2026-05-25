"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_CONTENT } from "@/lib/constants";
import { TeamMockImage } from "../TeamMockImage";
import { Gem } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="sobre"
      aria-labelledby="about-heading"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-nexus relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <TeamMockImage />

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:absolute lg:bottom-[-2rem] lg:right-[-2rem] mt-6 lg:mt-0 p-5 md:p-6 bg-surface border border-surface shadow-lg cursor-default w-full lg:w-auto"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4">
                <div>
                  <p className="text-3xl md:text-4xl font-bold leading-none mb-1 font-display text-gradient-gold">
                    {ABOUT_CONTENT.stats.rating}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-semibold text-foreground tracking-wide uppercase font-body">
                    {ABOUT_CONTENT.stats.source}
                  </p>
                  <p className="text-[11px] md:text-xs text-foreground/60 mt-0.5 font-body">
                    {ABOUT_CONTENT.stats.reviews}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text Column ── */}
          <div className="flex flex-col justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-surface bg-surface shadow-sm w-fit"
            >
              <Gem
                size={13}
                className="text-[var(--color-gold)]"
                strokeWidth={1.5}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80 font-body">
                {ABOUT_CONTENT.label}
              </span>
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-balance leading-tight mb-6 font-display text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {ABOUT_CONTENT.heading.start}
              <em className="not-italic text-gradient-gold">
                {ABOUT_CONTENT.heading.highlight}
              </em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed mb-10 text-foreground/80 font-body"
            >
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>

            {/* Badges Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
            >
              {ABOUT_CONTENT.badges.map(
                ({ icon: Icon, title, subtitle }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: 0.45 + i * 0.07 }}
                    className="flex items-center gap-4 p-4 bg-surface border border-surface shadow-sm transition-colors hover:border-[var(--color-gold)] cursor-default"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-background border border-surface text-[var(--color-gold)]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight text-foreground font-display">
                        {title}
                      </p>
                      <p className="text-xs text-foreground/60 mt-0.5 font-body">
                        {subtitle}
                      </p>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
