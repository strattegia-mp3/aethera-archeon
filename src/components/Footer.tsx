import { MapPin, Phone, Mail } from "lucide-react";
import { FOOTER_CONTENT } from "@/lib/constants";
import { Logo } from "./ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: FOOTER_CONTENT.headings.expertise,
      links: FOOTER_CONTENT.links.servicos,
    },
    {
      title: FOOTER_CONTENT.headings.studio,
      links: FOOTER_CONTENT.links.escritorio,
    },
  ];

  return (
    <footer
      role="contentinfo"
      className="bg-surface border-t border-surface transition-colors duration-300"
    >
      <div className="container-nexus py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 md:gap-12 xl:gap-14">
          {/* Brand */}
          <div className="xl:col-span-4 flex flex-col items-center text-center md:items-center md:text-center xl:items-start xl:text-left">
            <div className="flex items-center justify-center xl:justify-start gap-3 mb-5">
              <Logo />

              <div>
                <span className="block text-lg sm:text-xl font-semibold font-display text-foreground leading-none">
                  {FOOTER_CONTENT.brand.name}
                </span>

                <span
                  className="block text-[9px] tracking-widest uppercase mt-1.5 text-foreground/50"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {FOOTER_CONTENT.brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mb-6 text-foreground/60 font-body max-w-md">
              {FOOTER_CONTENT.brand.description}
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start gap-3">
              {FOOTER_CONTENT.socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-surface bg-background text-foreground/50 transition-[color,border-color,box-shadow,background-color] duration-300 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:shadow-sm rounded-full"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col items-center text-center xl:items-start xl:text-left"
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-5 text-[var(--color-gold)]"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-foreground/60 transition-colors duration-200 hover:text-[var(--color-gold)] font-body inline-block"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="xl:col-span-3 flex flex-col items-center text-center xl:items-start xl:text-left">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5 text-[var(--color-gold)]"
              style={{ letterSpacing: "0.14em" }}
            >
              {FOOTER_CONTENT.headings.contact}
            </h3>

            <address className="not-italic space-y-5 font-body w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center xl:justify-start gap-3 text-center sm:text-left">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-[var(--color-gold)]"
                  strokeWidth={1.5}
                />

                <span className="text-sm text-foreground/60 leading-relaxed">
                  {FOOTER_CONTENT.contact.address[0]}
                  <br />
                  {FOOTER_CONTENT.contact.address[1]}
                  <br />
                  {FOOTER_CONTENT.contact.address[2]}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 text-center sm:text-left">
                <Phone
                  size={16}
                  className="flex-shrink-0 text-[var(--color-gold)]"
                  strokeWidth={1.5}
                />

                <a
                  href={FOOTER_CONTENT.contact.phoneLink}
                  className="text-sm text-foreground/60 transition-colors duration-200 hover:text-[var(--color-gold)]"
                >
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 text-center sm:text-left">
                <Mail
                  size={16}
                  className="flex-shrink-0 text-[var(--color-gold)]"
                  strokeWidth={1.5}
                />

                <a
                  href={FOOTER_CONTENT.contact.emailLink}
                  className="text-sm text-foreground/60 transition-colors duration-200 hover:text-[var(--color-gold)] break-all sm:break-normal"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="h-px w-full my-8 sm:my-10 bg-border opacity-50" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 text-xs text-foreground/50 font-body text-center lg:text-left">
          <p>
            © {currentYear} {FOOTER_CONTENT.copyright}
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a
              href={FOOTER_CONTENT.legal.privacyHref}
              className="hover:text-foreground transition-colors"
            >
              {FOOTER_CONTENT.legal.privacy}
            </a>

            <a
              href={FOOTER_CONTENT.legal.termsHref}
              className="hover:text-foreground transition-colors"
            >
              {FOOTER_CONTENT.legal.terms}
            </a>
          </div>

          <p>
            {FOOTER_CONTENT.legal.credits}{" "}
            <span className="text-[var(--color-gold)] font-medium">
              {FOOTER_CONTENT.legal.developer}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
