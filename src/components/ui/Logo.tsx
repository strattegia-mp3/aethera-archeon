import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = ({ className = "", ...props }: LogoProps) => {
  return (
    <div
      className="w-9 h-9 flex items-center justify-center border transition-colors duration-300 border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]"
      style={{ background: "transparent" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="transition-colors duration-300"
      >
        <path
          d="M12 2L2 22h4l2.5-5h7L18 22h4L12 2z"
          className="fill-[var(--color-gold)] group-hover:fill-background"
        />
        <path
          d="M12 7l-2 4h4l-2-4z"
          className="fill-background group-hover:fill-[var(--color-gold)]"
        />
      </svg>
    </div>
  );
};
