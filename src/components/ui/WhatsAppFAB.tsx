"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_FAB_CONTENT } from "@/lib/constants";
import { WhatsAppIcon } from "./SocialIcons";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Revela o botão após um pequeno delay para não conflitar com animações iniciais
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
          role="complementary"
          aria-label={WHATSAPP_FAB_CONTENT.containerAriaLabel}
        >
          {/* Tooltip (Anotação Arquitetônica) */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: 5 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 5, x: 5 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-background bg-foreground pointer-events-none font-body"
                style={{
                  borderRadius: "var(--radius-btn)",
                  boxShadow: "var(--shadow-card)",
                }}
                role="tooltip"
              >
                {WHATSAPP_FAB_CONTENT.tooltip}
                <span
                  className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-foreground"
                  aria-hidden="true"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB Button Geométrico */}
          <motion.a
            href={WHATSAPP_FAB_CONTENT.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={WHATSAPP_FAB_CONTENT.ariaLabel}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            className="pointer-events-auto relative w-14 h-14 flex items-center justify-center text-background bg-foreground transition-colors duration-300 hover:bg-[var(--color-gold)] border border-transparent hover:border-[var(--color-gold)]"
            style={{
              borderRadius: "var(--radius-btn)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <WhatsAppIcon size={24} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
