interface LogoProps {
  className?: string;
  color?: "dark" | "light";
}

export default function Logo({ className = "", color = "dark" }: LogoProps) {
  const fill = color === "dark" ? "#1A1612" : "#F9F5EF";

  return (
    <svg
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SOLIMAR italic bold text — built from outlined paths for pixel-perfect rendering */}
      <g transform="skewX(-10) translate(30, 0)">
        {/* S */}
        <path
          d="M12 18c-4 0-8 3-8 8s3 7 8 7h4c3 0 5 2 5 5s-3 6-7 6c-5 0-8-3-8-3"
          stroke={fill}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* O */}
        <rect x="30" y="15" width="22" height="30" rx="11" stroke={fill} strokeWidth="7" fill="none" />
        {/* L */}
        <path d="M62 15v30h18" stroke={fill} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* I */}
        <line x1="90" y1="15" x2="90" y2="45" stroke={fill} strokeWidth="7" strokeLinecap="round" />
        {/* M */}
        <path d="M103 45V15l12 20 12-20v30" stroke={fill} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* A */}
        <path d="M140 45l11-30 11 30M145 36h12" stroke={fill} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* R */}
        <path d="M172 45V15h12c6 0 10 4 10 9s-4 8-10 8h-12M184 32l10 13" stroke={fill} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* ® symbol */}
      <circle cx="285" cy="18" r="10" stroke={fill} strokeWidth="2" fill="none" />
      <text x="285" y="23" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill={fill}>R</text>

      {/* Z swoosh / lightning bolt underneath */}
      <path
        d="M20 72L140 72L60 105L280 105"
        stroke={fill}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
