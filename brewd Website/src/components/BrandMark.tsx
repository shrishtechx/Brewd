type BrandMarkProps = {
  className?: string;
  /** Rounds the outer corners when true (nice for navbar / avatar use). */
  rounded?: boolean;
  title?: string;
};

// Brand colors sampled from the supplied four-quadrant icon.
const RED = "#AE3E29";
const AMBER = "#E8A012";
const BLUE = "#3C6E93";
const BROWN = "#4E2A16";

/** A short rising steam glyph (two wavy strokes). */
function SteamV({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 0 c -7,-10 7,-17 0,-27 c -7,-10 7,-17 0,-27"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M16 6 c -7,-10 7,-17 0,-27 c -7,-10 7,-17 0,-27"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </g>
  );
}

/** Short sideways steam glyph (two wavy strokes laid horizontally). */
function SteamH({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) ${flip ? "scale(-1 1)" : ""}`}>
      <path
        d="M0 0 c 10,-7 17,7 27,0 c 10,-7 17,7 27,0"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M0 16 c 10,-7 17,7 27,0 c 10,-7 17,7 27,0"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * Brew'd primary icon mark: four quadrants telling the filter-coffee story.
 * Top-left: filter on its side. Top-right: the filter cup dripping decoction.
 * Bottom-left: tumbler resting in a dabarah. Bottom-right: filter on its side.
 */
export default function BrandMark({
  className = "",
  rounded = false,
  title = "Brew'd",
}: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      role="img"
      aria-label={`${title} icon`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {rounded && (
        <defs>
          <clipPath id="bm-round">
            <rect x="0" y="0" width="1024" height="1024" rx="160" />
          </clipPath>
        </defs>
      )}

      <g clipPath={rounded ? "url(#bm-round)" : undefined}>
        {/* Quadrant backgrounds */}
        <rect x="0" y="0" width="512" height="512" fill={RED} />
        <rect x="512" y="0" width="512" height="512" fill={AMBER} />
        <rect x="0" y="512" width="512" height="512" fill={BLUE} />
        <rect x="512" y="512" width="512" height="512" fill={BROWN} />

        {/* TOP-LEFT: filter lying on its side, pointing right */}
        <g>
          <path
            d="M150 168 L330 206 Q352 256 330 306 L150 344 Q132 256 150 168 Z"
            fill="#fff"
          />
          <ellipse cx="150" cy="256" rx="22" ry="88" fill="#fff" />
          <ellipse cx="150" cy="256" rx="11" ry="70" fill={RED} />
          <ellipse cx="186" cy="256" rx="12" ry="80" fill="none" stroke="#fff" strokeWidth="10" />
          <ellipse cx="330" cy="256" rx="9" ry="50" fill="#fff" />
          <SteamH x={382} y={236} />
        </g>

        {/* TOP-RIGHT: filter upper cup, dripping decoction downward */}
        <g>
          <ellipse cx="768" cy="176" rx="128" ry="26" fill="#fff" />
          <ellipse cx="768" cy="176" rx="104" ry="18" fill={AMBER} />
          <path d="M648 176 L888 176 L834 332 L702 332 Z" fill="#fff" />
          <ellipse cx="768" cy="332" rx="66" ry="13" fill="#fff" />
          <ellipse cx="768" cy="332" rx="48" ry="8" fill={AMBER} />
          <SteamV x={760} y={446} scale={1.1} />
        </g>

        {/* BOTTOM-LEFT: tumbler standing in a dabarah, steam rising */}
        <g>
          <SteamV x={250} y={648} scale={1.05} />
          <path d="M198 690 L314 690 L296 838 L216 838 Z" fill="#fff" />
          <ellipse cx="256" cy="690" rx="58" ry="13" fill="#fff" />
          <ellipse cx="256" cy="690" rx="44" ry="9" fill={BLUE} />
          <path d="M168 838 Q256 800 344 838 L322 884 Q256 908 190 884 Z" fill="#fff" />
        </g>

        {/* BOTTOM-RIGHT: filter lying on its side, pointing left (mirror of TL) */}
        <g transform="translate(1024 0) scale(-1 1)">
          <path
            d="M150 680 L330 718 Q352 768 330 818 L150 856 Q132 768 150 680 Z"
            fill="#fff"
          />
          <ellipse cx="150" cy="768" rx="22" ry="88" fill="#fff" />
          <ellipse cx="150" cy="768" rx="11" ry="70" fill={BROWN} />
          <ellipse cx="186" cy="768" rx="12" ry="80" fill="none" stroke="#fff" strokeWidth="10" />
          <ellipse cx="330" cy="768" rx="9" ry="50" fill="#fff" />
        </g>
        <SteamH x={560} y={748} flip />
      </g>
    </svg>
  );
}
