import SteamVapour from "./SteamVapour";

type SteamPlaceholderProps = {
  className?: string;
  label?: string;
};

/**
 * Animated steam placeholder. Used where a media / image asset will go later.
 * Shows the brand's rising vapour animation over a warm cup silhouette.
 * SteamVapour internally respects reduced-motion (renders nothing).
 */
export default function SteamPlaceholder({
  className = "",
  label = "Coming soon",
}: SteamPlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-brass/25 bg-gradient-to-br from-beige to-sand ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Rising vapour above the cup */}
      <SteamVapour className="absolute top-[8%] h-1/2 w-1/2" />

      {/* Warm cup silhouette at the base */}
      <svg viewBox="0 0 200 220" className="h-2/3 w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="cupGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7A5C24" />
            <stop offset="100%" stopColor="#4E2A16" />
          </linearGradient>
        </defs>

        {/* Tumbler */}
        <path
          d="M64 130 h72 l-10 74 a10 10 0 0 1 -10 8 h-32 a10 10 0 0 1 -10 -8 z"
          fill="url(#cupGrad)"
        />
        <ellipse cx="100" cy="130" rx="36" ry="8" fill="#2A160D" />
        {/* Dabarah */}
        <path
          d="M52 210 q48 -20 96 0 l-8 18 q-40 16 -80 0 z"
          fill="url(#cupGrad)"
        />
      </svg>

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-xs uppercase tracking-[0.2em] text-coffee-mid/60">
        {label}
      </span>
    </div>
  );
}
