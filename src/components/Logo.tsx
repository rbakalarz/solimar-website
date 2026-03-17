interface LogoProps {
  className?: string;
  color?: "dark" | "light";
}

export default function Logo({ className = "", color = "dark" }: LogoProps) {
  const textColor = color === "dark" ? "#1A1612" : "#F9F5EF";

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sun/wave icon */}
      <circle cx="16" cy="20" r="8" fill="#C0562A" />
      <path
        d="M16 8V6M16 34v-2M8 20H6M26 20h-2M10.34 14.34l-1.41-1.41M22.07 14.34l1.41-1.41M10.34 25.66l-1.41 1.41M22.07 25.66l1.41 1.41"
        stroke="#C0562A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Wave under sun */}
      <path
        d="M4 30c4-3 8 0 12-3s8 0 12-3"
        stroke="#C0562A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* SOLIMAR text */}
      <text
        x="38"
        y="27"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="22"
        fill={textColor}
        letterSpacing="3"
      >
        SOLIMAR
      </text>
    </svg>
  );
}
