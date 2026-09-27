/**
 * Lightweight SVG fallback for the hero 3D scene.
 * Shown on mobile and for reduced-motion users.
 * A brass South Indian filter with a decoction stream into a tumbler,
 * plus a few static coffee beans.
 */
export default function HeroFallback({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 460"
      className={className}
      role="img"
      aria-label="A brass South Indian coffee filter pouring decoction into a tumbler"
    >
      <defs>
        <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7C879" />
          <stop offset="45%" stopColor="#B08A3E" />
          <stop offset="100%" stopColor="#7A5C24" />
        </linearGradient>
        <linearGradient id="brassG2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF5A" />
          <stop offset="100%" stopColor="#8A6A2C" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D4AF5A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4AF5A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="200" rx="180" ry="180" fill="url(#glow)" />

      {/* Filter lid knob */}
      <rect x="188" y="42" width="24" height="14" rx="6" fill="url(#brassG2)" />
      <ellipse cx="200" cy="42" rx="14" ry="6" fill="#E7C879" />

      {/* Upper chamber */}
      <path
        d="M150 70 h100 a8 8 0 0 1 8 8 v54 h-116 v-54 a8 8 0 0 1 8 -8 z"
        fill="url(#brassG)"
      />
      <ellipse cx="200" cy="70" rx="50" ry="10" fill="#E7C879" />

      {/* Perforated press band */}
      <rect x="146" y="134" width="108" height="10" rx="4" fill="#7A5C24" />

      {/* Lower chamber (collector) */}
      <path
        d="M152 146 h96 l-12 70 a10 10 0 0 1 -10 8 h-52 a10 10 0 0 1 -10 -8 z"
        fill="url(#brassG2)"
      />

      {/* Decoction stream */}
      <rect x="197" y="226" width="6" height="120" rx="3" fill="#3A2317" opacity="0.85">
        <animate
          attributeName="opacity"
          values="0.4;0.9;0.4"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Tumbler */}
      <path
        d="M168 350 h64 l-8 70 a8 8 0 0 1 -8 7 h-32 a8 8 0 0 1 -8 -7 z"
        fill="url(#brassG)"
      />
      <ellipse cx="200" cy="350" rx="32" ry="8" fill="#3A2317" />
      <ellipse cx="200" cy="350" rx="32" ry="8" fill="#5A3A26" opacity="0.6" />

      {/* Coffee beans */}
      <g fill="#3A2317">
        <g transform="translate(96 150) rotate(20)">
          <ellipse cx="0" cy="0" rx="13" ry="8" />
          <path d="M0 -8 Q3 0 0 8" stroke="#7A5C24" strokeWidth="1.4" fill="none" />
        </g>
        <g transform="translate(308 120) rotate(-25)">
          <ellipse cx="0" cy="0" rx="13" ry="8" />
          <path d="M0 -8 Q3 0 0 8" stroke="#7A5C24" strokeWidth="1.4" fill="none" />
        </g>
        <g transform="translate(320 260) rotate(40)">
          <ellipse cx="0" cy="0" rx="11" ry="7" />
          <path d="M0 -7 Q3 0 0 7" stroke="#7A5C24" strokeWidth="1.2" fill="none" />
        </g>
        <g transform="translate(82 290) rotate(-15)">
          <ellipse cx="0" cy="0" rx="11" ry="7" />
          <path d="M0 -7 Q3 0 0 7" stroke="#7A5C24" strokeWidth="1.2" fill="none" />
        </g>
      </g>
    </svg>
  );
}
