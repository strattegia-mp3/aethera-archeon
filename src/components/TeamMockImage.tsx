import { ABOUT_CONTENT } from "@/lib/constants";

export const TeamMockImage = () => (
  <div
    className="relative w-full aspect-[4/5] overflow-hidden border border-surface bg-surface group"
    style={{ borderRadius: "var(--radius-card)" }}
  >
    {/* Stylized placeholder image representing an Architect */}
    <svg
      viewBox="0 0 400 500"
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      aria-label="Arquiteto Principal da Aethera Archeon"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-surface)" />
          <stop offset="100%" stopColor="var(--color-background)" />
        </linearGradient>
        <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0e12" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="500" fill="url(#bgGrad)" />

      {/* Architectural Elements in Background (Arches and Grids) */}
      <path
        d="M 100 500 L 100 200 A 100 100 0 0 1 300 200 L 300 500"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="50"
        y1="150"
        x2="350"
        y2="150"
        stroke="var(--color-border)"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="250"
        x2="350"
        y2="250"
        stroke="var(--color-border)"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Stylized figure — Architect silhouette */}
      {/* Head */}
      <ellipse
        cx="200"
        cy="140"
        rx="45"
        ry="55"
        fill="var(--color-foreground)"
        opacity="0.9"
      />
      {/* Turtleneck Collar */}
      <rect x="175" y="190" width="50" height="30" rx="4" fill="#000" />
      {/* Blazer / Suit */}
      <path
        d="M80 340 Q95 225 135 215 Q165 210 175 220 L200 240 L225 220 Q235 210 265 215 Q305 225 320 340 L340 500 L60 500 Z"
        fill="url(#suitGrad)"
      />
      {/* Blueprint / Tablet folder in arm */}
      <path
        d="M 120 350 L 170 340 L 150 500 L 100 500 Z"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="2"
        opacity="0.8"
      />
    </svg>

    {/* Overlay Gradient */}
    <div
      className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, var(--color-background) 0%, transparent 100%)",
      }}
    />

    {/* Name label */}
    <div className="absolute bottom-6 left-6 right-6">
      <p className="font-display font-semibold text-lg md:text-xl text-foreground">
        {ABOUT_CONTENT.architect.name}
      </p>
      <p className="text-xs md:text-sm mt-1 text-foreground/70 font-body">
        {ABOUT_CONTENT.architect.role}
      </p>
    </div>

    {/* Experience badge */}
    <div
      className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-2 md:px-4 md:py-3 text-center border-surface border shadow-sm backdrop-blur-md"
      style={{
        background: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
      }}
    >
      <p className="font-display font-bold text-xl md:text-2xl leading-none text-foreground">
        {ABOUT_CONTENT.architect.experience}
      </p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-widest leading-tight mt-1 text-foreground/70">
        {ABOUT_CONTENT.architect.experienceText.split(" ").map((word, i) => (
          <span key={i}>
            {word}
            <br />
          </span>
        ))}
      </p>
    </div>
  </div>
);
