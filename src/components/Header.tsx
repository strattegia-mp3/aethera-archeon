"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { HEADER_CONTENT } from "@/lib/constants";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Logo } from "./ui/Logo";

const LogoHeader = () => (
  <a
    href="#"
    aria-label={HEADER_CONTENT.logo.ariaLabel}
    className="flex items-center gap-3 group"
  >
    <Logo />
    <div className="leading-tight">
      <span className="block text-lg font-semibold tracking-tight font-display text-foreground transition-colors">
        {HEADER_CONTENT.logo.name}
      </span>
      <span
        className="block text-[10px] tracking-widest uppercase text-foreground/50 transition-colors"
        style={{ letterSpacing: "0.18em" }}
      >
        {HEADER_CONTENT.logo.tagline}
      </span>
    </div>
  </a>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);

    // Active section tracking
    const sections = HEADER_CONTENT.navLinks.map((l) =>
      l.href.replace("#", ""),
    );
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "header-backdrop" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-nexus">
        <div className="flex items-center justify-between h-[72px] md:h-[84px]">
          {/* Logo */}
          <LogoHeader />

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-2"
          >
            {HEADER_CONTENT.navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer font-body"
                  style={{
                    color: isActive
                      ? "var(--color-gold)"
                      : "color-mix(in srgb, var(--color-foreground) 70%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--color-foreground)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color =
                        "color-mix(in srgb, var(--color-foreground) 70%, transparent)";
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-[1px]"
                      style={{ background: "var(--color-gold)" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-5">
            <ThemeToggle />
            <a
              href={HEADER_CONTENT.contact.phoneLink}
              aria-label={HEADER_CONTENT.contact.ariaLabel}
              className="flex items-center gap-2 text-sm transition-colors duration-200 text-foreground/60 hover:text-[var(--color-gold)] font-body"
            >
              <Phone size={14} strokeWidth={1.5} />
              <span className="hidden lg:inline">
                {HEADER_CONTENT.contact.phone}
              </span>
            </a>

            <motion.a
              href={HEADER_CONTENT.cta.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(HEADER_CONTENT.cta.href);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 text-sm font-semibold text-background transition-shadow duration-300 font-body uppercase tracking-wider"
              style={{
                background: "var(--color-gold)",
                borderRadius: "var(--radius-btn)",
              }}
            >
              {HEADER_CONTENT.cta.label}
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 transition-colors text-foreground focus:outline-none"
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-surface"
          >
            <nav
              aria-label="Navegação mobile"
              className="container-nexus py-6 flex flex-col gap-2"
            >
              {HEADER_CONTENT.navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-left px-4 py-3 text-base font-medium transition-colors cursor-pointer text-foreground hover:text-[var(--color-gold)] font-body border-l-2 border-transparent hover:border-[var(--color-gold)] bg-background/50 hover:bg-background"
                >
                  {label}
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center px-4 py-2">
                  <span className="text-sm font-body text-foreground/60">
                    Alternar Tema
                  </span>
                  <ThemeToggle />
                </div>
                <a
                  href={HEADER_CONTENT.cta.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(HEADER_CONTENT.cta.href);
                  }}
                  className="px-4 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-background transition-colors"
                  style={{
                    background: "var(--color-gold)",
                    borderRadius: "var(--radius-btn)",
                  }}
                >
                  {HEADER_CONTENT.cta.label}
                </a>
                <a
                  href={HEADER_CONTENT.contact.phoneLink}
                  className="flex items-center justify-center gap-2 py-3 text-sm text-foreground/60 hover:text-[var(--color-gold)] font-body"
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {HEADER_CONTENT.contact.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
