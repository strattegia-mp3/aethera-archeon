import type { ElementType } from "react";
import type { LucideIcon } from "lucide-react";

/* ─── Tipagem Universal de Ícones ─── */
// Permite o uso de LucideIcons ou componentes SVG customizados (ex: InstagramIcon)
export type IconType = LucideIcon | ElementType;

/* ==========================================================================
   BASE / COMPONENTES MENORES
   ========================================================================== */

export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLink extends LinkItem {
  icon: IconType;
}

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  sub: string;
  href: string;
}

export interface BusinessHour {
  days: string;
  hours: string;
  open: boolean;
}

export interface Service {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  highlight?: string;
  featured?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  service: string;
  date: string;
}

export interface Partner {
  name: string;
  initials: string;
}

export interface TrustBadge {
  icon: IconType;
  text?: string;
  title?: string;
  subtitle?: string;
}

/* ==========================================================================
   INTERFACES DE CONTEÚDO DAS SEÇÕES (PAGE SECTIONS)
   ========================================================================== */

export interface HeaderContent {
  logo: {
    name: string;
    tagline: string;
    ariaLabel: string;
  };
  navLinks: LinkItem[];
  cta: {
    label: string;
    href: string;
  };
  contact: {
    phone: string;
    phoneLink: string;
    ariaLabel: string;
  };
}

export interface HeroContent {
  badge: { highLevel: string };
  headline: { start: string; highlight: string; end: string };
  subheadline: string;
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  trustBadges: TrustBadge[];
  stats: Array<{ value: string; label: string }>;
  scrollText: string;
}

export interface ServicesContent {
  badge: string;
  heading: { start: string; highlight: string };
  description: string;
  services: Service[];
  footer: { text: string; linkText: string; href: string };
}

export interface AboutContent {
  label: string;
  heading: { start: string; highlight: string };
  paragraphs: string[];
  stats: { rating: string; source: string; reviews: string };
  architect: {
    name: string;
    role: string;
    experience: string;
    experienceText: string;
  };
  badges: TrustBadge[];
}

export interface TestimonialsContent {
  badge: string;
  heading: { start: string; highlight: string; end: string };
  stats: { rating: string; text: string };
  testimonials: Testimonial[];
  partners: { label: string; list: Partner[] };
}

export interface LocationContent {
  badge: string;
  heading: { start: string; highlight: string };
  description: string;
  hours: {
    title: string;
    schedule: BusinessHour[];
  };
  contact: ContactInfo[];
  map: {
    pinTitle: string;
    pinSub: string;
    buttonLabel: string;
    placeholderNote: string;
  };
  benefits: string[];
  whatsapp: { href: string; label: string };
}

export interface FooterContent {
  brand: { name: string; tagline: string; description: string };
  socials: SocialLink[];
  links: {
    servicos: LinkItem[];
    escritorio: LinkItem[];
  };
  contact: {
    address: string[];
    phone: string;
    phoneLink: string;
    email: string;
    emailLink: string;
  };
  headings: {
    expertise: string;
    studio: string;
    contact: string;
  };
  legal: {
    privacy: string;
    privacyHref: string;
    terms: string;
    termsHref: string;
    credits: string;
    developer: string;
  };
  copyright: string;
}

export interface WhatsAppFabContent {
  url: string;
  tooltip: string;
  ariaLabel: string;
  containerAriaLabel: string;
}
