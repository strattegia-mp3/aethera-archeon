"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "../../lib/constants";

/* ─── Stars Component ─── */
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1" aria-label={`${count} estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < count
            ? "fill-[var(--color-gold)] text-[var(--color-gold)]"
            : "text-border"
        }
      />
    ))}
  </div>
);

/* ─── Testimonial Card ─── */
const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS_CONTENT.testimonials)[0];
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    className="relative p-8 bg-background border border-border flex flex-col h-full group hover:border-[var(--color-gold)] transition-colors duration-300"
    style={{ borderRadius: "var(--radius-card)" }}
    aria-label={`Depoimento de ${testimonial.name}`}
  >
    <Quote
      size={32}
      className="absolute top-6 right-6 opacity-10 text-[var(--color-gold)] transition-opacity duration-300 group-hover:opacity-20"
      aria-hidden="true"
    />

    <div className="flex items-center gap-4 mb-6">
      {/* Avatar (Estilo Monograma) */}
      <div className="w-12 h-12 flex items-center justify-center text-sm font-semibold text-background bg-foreground flex-shrink-0 font-display tracking-widest border border-transparent group-hover:border-[var(--color-gold)] transition-colors">
        {testimonial.avatar}
      </div>
      <div>
        <p className="text-sm font-semibold leading-tight text-foreground font-display tracking-wide">
          {testimonial.name}
        </p>
        <p className="text-xs text-foreground/60 mt-0.5 font-body uppercase tracking-wider">
          {testimonial.role}
        </p>
      </div>
    </div>

    <Stars count={testimonial.rating} />

    <p className="text-sm leading-relaxed mt-4 mb-6 text-foreground/70 font-body flex-grow">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    <div className="flex items-center justify-between pt-4 border-t border-border/50">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-gold)] font-body">
        {testimonial.service}
      </span>
      <span className="text-[10px] text-foreground/40 font-mono">
        {testimonial.date}
      </span>
    </div>
  </motion.article>
);

/* ─── Section ─── */
export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePage, setActivePage] = useState(0);

  const perPage = 3;
  const totalPages = Math.ceil(
    TESTIMONIALS_CONTENT.testimonials.length / perPage,
  );
  const visible = TESTIMONIALS_CONTENT.testimonials.slice(
    activePage * perPage,
    activePage * perPage + perPage,
  );

  return (
    <section
      ref={ref}
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-surface transition-colors duration-300"
    >
      <div className="container-nexus">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 border border-border bg-background shadow-sm"
          >
            <Star
              size={12}
              className="fill-[var(--color-gold)] text-[var(--color-gold)]"
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/80 font-body">
              {TESTIMONIALS_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance leading-tight mb-6 font-display text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {TESTIMONIALS_CONTENT.heading.start}
            <em className="not-italic text-gradient-gold">
              {TESTIMONIALS_CONTENT.heading.highlight}
            </em>
            {TESTIMONIALS_CONTENT.heading.end}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold font-display text-foreground">
                {TESTIMONIALS_CONTENT.stats.rating}
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>
            </div>
            <span className="text-sm text-foreground/60 font-body">
              {TESTIMONIALS_CONTENT.stats.text}
            </span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
          >
            {visible.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination (Architectural Line Style) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-20">
            <button
              onClick={() => setActivePage((p) => Math.max(0, p - 1))}
              disabled={activePage === 0}
              aria-label="Página anterior"
              className="p-2 border border-border text-foreground/60 transition-all hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] disabled:opacity-20 disabled:hover:border-border disabled:hover:text-foreground/60 bg-background"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i)}
                  aria-label={`Ir para página ${i + 1}`}
                  className="h-[2px] transition-all duration-300"
                  style={{
                    width: activePage === i ? "24px" : "12px",
                    background:
                      activePage === i
                        ? "var(--color-gold)"
                        : "var(--color-border)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActivePage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={activePage === totalPages - 1}
              aria-label="Próxima página"
              className="p-2 border border-border text-foreground/60 transition-all hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] disabled:opacity-20 disabled:hover:border-border disabled:hover:text-foreground/60 bg-background"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Partners / Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12"
        >
          <p className="text-center text-xs uppercase tracking-widest mb-8 text-foreground/50 font-body">
            {TESTIMONIALS_CONTENT.partners.label}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {TESTIMONIALS_CONTENT.partners.list.map(({ name, initials }) => (
              <motion.div
                key={name}
                whileHover={{ y: -4 }}
                className="px-6 py-4 bg-background border border-border transition-colors duration-300 hover:border-[var(--color-gold)] group"
                title={name}
              >
                <span className="text-sm font-semibold tracking-widest text-foreground/60 font-display transition-colors group-hover:text-[var(--color-gold)]">
                  {name.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
