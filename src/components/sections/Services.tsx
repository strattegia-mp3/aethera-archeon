"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";
import { SERVICES_CONTENT } from "../../lib/constants";

/* ─── Card Component ─── */
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof SERVICES_CONTENT.services)[0];
  index: number;
}) => {
  const { icon: Icon, title, description, highlight, featured, tag } = service;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative group p-8 md:p-10 transition-colors duration-300 flex flex-col h-full border ${
        featured
          ? "bg-foreground border-foreground text-background"
          : "bg-surface border-surface text-foreground"
      }`}
      style={{ borderRadius: "var(--radius-card)" }}
      aria-label={`Serviço: ${title}`}
    >
      {featured && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-background) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        />
      )}

      {tag && (
        <span className="absolute top-6 right-6 text-[9px] font-semibold px-3 py-1 uppercase tracking-widest bg-[var(--color-gold)] text-background">
          {tag}
        </span>
      )}

      <div
        className={`w-12 h-12 flex items-center justify-center mb-8 border ${
          featured
            ? "border-background/20 bg-background text-[var(--color-gold)]"
            : "border-border bg-background text-[var(--color-gold)]"
        }`}
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      <div className="flex-grow z-10 relative">
        <h3
          className={`text-xl font-semibold mb-4 leading-tight font-display ${
            featured ? "text-background" : "text-foreground"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-8 font-body ${
            featured ? "text-background/80" : "text-foreground/70"
          }`}
        >
          {description}
        </p>
      </div>

      {highlight && (
        <div className="mt-auto pt-4 relative z-10">
          <span
            className={`inline-flex items-center text-[10px] uppercase tracking-widest font-semibold font-body ${
              featured ? "text-[var(--color-gold)]" : "text-foreground/60"
            }`}
          >
            <span className="w-4 h-[1px] mr-2 bg-current" />
            {highlight}
          </span>
        </div>
      )}
    </motion.article>
  );
};

/* ─── Section ─── */
export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="section-padding bg-surface transition-colors duration-300"
    >
      <div className="container-nexus">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 border border-surface bg-surface shadow-sm"
          >
            <Compass
              size={14}
              className="text-[var(--color-gold)]"
              strokeWidth={1.5}
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80 font-body">
              {SERVICES_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance leading-tight mb-6 font-display text-foreground"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {SERVICES_CONTENT.heading.start}
            <em className="not-italic text-gradient-gold">
              {SERVICES_CONTENT.heading.highlight}
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-foreground/70 font-body"
          >
            {SERVICES_CONTENT.description}
          </motion.p>
        </div>

        {/* Grid (Estilo Bento Misto / Minimalista) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES_CONTENT.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 flex flex-col items-center"
        >
          <p className="text-sm mb-3 text-foreground/60 font-body">
            {SERVICES_CONTENT.footer.text}
          </p>
          <a
            href={SERVICES_CONTENT.footer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] font-body group"
          >
            {SERVICES_CONTENT.footer.linkText}
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
