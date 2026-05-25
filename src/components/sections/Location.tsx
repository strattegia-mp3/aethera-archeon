"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, ArrowRight, Square } from "lucide-react";
import { LOCATION_CONTENT } from "@/lib/constants";
import { WhatsAppIcon } from "../ui/SocialIcons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const softFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const MapPlaceholder = () => (
  <div
    className="w-full h-full relative overflow-hidden bg-surface border border-surface flex flex-col items-center justify-center group rounded-[var(--radius-card)]"
    role="img"
    aria-label="Mapa de localização da Aethera Archeon"
  >
    <svg
      className="absolute inset-0 w-full h-full opacity-10 text-foreground transition-opacity duration-500 group-hover:opacity-20"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <pattern
        id="arch-grid"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <rect
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#arch-grid)" />

      <line
        x1="300"
        y1="0"
        x2="300"
        y2="600"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <line
        x1="0"
        y1="200"
        x2="800"
        y2="200"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />

      <rect
        x="320"
        y="80"
        width="120"
        height="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="180"
        y="220"
        width="100"
        height="140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M 320 80 L 440 180"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>

    <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-gold)] bg-background shadow-lg rounded-[calc(var(--radius-card)-8px)]">
        <MapPin
          size={20}
          className="text-[var(--color-gold)]"
          strokeWidth={1.5}
        />
      </div>

      <div className="text-center px-6 py-3 bg-background/90 backdrop-blur-md border border-border/50 rounded-[calc(var(--radius-card)-8px)]">
        <p className="font-semibold text-base md:text-lg font-display text-foreground">
          {LOCATION_CONTENT.map.pinTitle}
        </p>
        <p className="text-[10px] md:text-xs mt-1 text-foreground/60 tracking-widest uppercase font-body">
          {LOCATION_CONTENT.map.pinSub}
        </p>
      </div>

      <a
        href={LOCATION_CONTENT.contact[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white mt-2 font-body transition-[filter,box-shadow,background-color] duration-300 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(201,168,76,0.4)]"
        style={{
          background: "var(--color-gold)",
          borderRadius: "var(--radius-btn)",
        }}
      >
        {LOCATION_CONTENT.map.buttonLabel}
        <ArrowRight size={14} strokeWidth={1.5} />
      </a>
    </div>

    <p className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-foreground/40 font-mono px-4">
      {LOCATION_CONTENT.map.placeholderNote}
    </p>
  </div>
);

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px 0px -80px 0px",
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      id="localizacao"
      aria-labelledby="location-heading"
      className="section-padding bg-background transition-colors duration-300"
    >
      <div className="container-nexus">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 border border-surface bg-surface shadow-sm rounded-full"
          >
            <MapPin
              size={14}
              className="text-[var(--color-gold)]"
              strokeWidth={1.5}
            />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-foreground/80 font-body">
              {LOCATION_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            id="location-heading"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance leading-tight mb-5 font-display text-foreground mx-auto"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "800px" }}
          >
            {LOCATION_CONTENT.heading.start}
            <em className="not-italic text-gradient-gold">
              {LOCATION_CONTENT.heading.highlight}
            </em>
          </motion.h2>

          <motion.p
            variants={softFadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.18 }}
            className="text-sm md:text-base max-w-xl mx-auto text-foreground/70 font-body px-4"
          >
            {LOCATION_CONTENT.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {LOCATION_CONTENT.contact.map(
              ({ icon: Icon, label, value, sub, href }) => (
                <motion.a
                  key={label}
                  variants={itemVariants}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-surface border border-surface shadow-sm group rounded-[var(--radius-card)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[var(--color-gold)] hover:shadow-md"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-surface bg-background rounded-[calc(var(--radius-card)-8px)] group-hover:border-[var(--color-gold)] transition-colors duration-300">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--color-gold)]"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest mb-1 text-foreground/50 font-body truncate">
                      {label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-foreground font-display tracking-wide break-words">
                      {value}
                    </p>
                    <p className="text-[11px] sm:text-xs mt-0.5 text-foreground/60 font-body truncate">
                      {sub}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="hidden sm:block flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--color-gold)]"
                    strokeWidth={1.5}
                  />
                </motion.a>
              ),
            )}

            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 bg-surface border border-surface shadow-sm flex flex-col items-center text-center rounded-[var(--radius-card)]"
            >
              <div className="flex items-center justify-center gap-3 mb-6 border-b border-border pb-4 w-full mx-auto">
                <Clock
                  size={16}
                  className="text-[var(--color-gold)]"
                  strokeWidth={1.5}
                />
                <p className="text-xs uppercase tracking-widest font-semibold text-foreground/80 font-body">
                  {LOCATION_CONTENT.hours.title}
                </p>
              </div>

              <address className="not-italic w-full max-w-[90%] sm:max-w-[80%] mx-auto space-y-3 font-body">
                {LOCATION_CONTENT.hours.schedule.map(
                  ({ days, hours, open }) => (
                    <div
                      key={days}
                      className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0 gap-1"
                    >
                      <span className="text-foreground/60">{days}</span>
                      <span
                        className={`font-medium tracking-wide ${
                          open ? "text-foreground" : "text-foreground/40"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ),
                )}
              </address>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href={LOCATION_CONTENT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="flex items-center justify-center gap-3 w-full py-4 px-4 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider font-body shadow-md transition-[filter,box-shadow] duration-300 hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] hover:brightness-110 rounded-[var(--radius-btn)]"
              style={{ background: "var(--color-gold)" }}
            >
              <WhatsAppIcon size={18} />
              {LOCATION_CONTENT.whatsapp.label}
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.16, staggerChildren: 0.08 }}
            className="lg:col-span-7 flex flex-col h-full mt-6 lg:mt-0"
          >
            <motion.div
              variants={softFadeVariants}
              className="flex-grow min-h-[400px] lg:min-h-[550px] w-full relative"
            >
              <MapPlaceholder />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-2"
            >
              {LOCATION_CONTENT.benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <Square
                    size={8}
                    className="text-[var(--color-gold)] flex-shrink-0"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  <span className="text-xs sm:text-sm text-foreground/70 tracking-wide font-body">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
