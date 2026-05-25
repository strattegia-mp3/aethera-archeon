import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Cinzel, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────
   Configurações Globais e Variáveis de Ambiente
   ───────────────────────────────────────────────────────────── */
// Garante um fallback seguro caso a variável não esteja definida no ambiente local
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const GS_CT = process.env.GOOGLE_SEARCH_CONSOLE_TOKEN ?? "";

/* ─────────────────────────────────────────────────────────────
   SEO — Metadados otimizados para busca orgânica e compartilhamento
   ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aethera Archeon — Arquitetura de Alto Padrão",
    template: "%s | Aethera Archeon",
  },
  description:
    "Materializando o atemporal. Escritório de arquitetura focado em projetos residenciais de luxo, design de interiores e espaços comerciais. Agende sua consultoria exclusiva.",
  keywords: [
    "arquitetura de alto padrão",
    "escritório de arquitetura",
    "projetos residenciais luxo",
    "design de interiores",
    "arquitetura atemporal",
    "Aethera Archeon",
    "arquitetos premium",
    "projeto arquitetônico comercial",
    "decoração de interiores",
  ],
  authors: [{ name: "Aethera Archeon", url: siteUrl }],
  creator: "Aethera Archeon",
  publisher: "Aethera Archeon",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Aethera Archeon",
    title: "Aethera Archeon — Arquitetura de Herança",
    description:
      "Projetos arquitetônicos que transcendem o tempo. Especialistas em residências de luxo e espaços comerciais de alto impacto. Agende sua consultoria.",
    images: [
      {
        url: "/og/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aethera Archeon — Arquitetura de Alto Padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethera Archeon — Arquitetura Premium",
    description:
      "Materializando o atemporal. Projetos residenciais e comerciais de alto padrão.",
    images: ["/og/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: GS_CT,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aethera",
  },
};

/* ─── Viewport ─── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e12" },
  ],
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD — Schema.org ArchitecturalWorkspace
   ───────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalWorkspace",
  name: "Aethera Archeon",
  image: `${siteUrl}/og/og-image.webp`,
  url: siteUrl,
  telephone: "+55 00 00000-0000",
  email: "contato@aetheraarcheon.com.br",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Endereço do Escritório — Sala Cobertura",
    addressLocality: "Cidade",
    addressRegion: "Estado",
    postalCode: "00000-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.0,
    longitude: -0.0,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
  },
};

/* ─────────────────────────────────────────────────────────────
   Root Layout
   ───────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
