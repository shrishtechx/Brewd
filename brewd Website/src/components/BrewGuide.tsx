import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { brewSteps } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

/** Small reusable brass defs so each illustration shares the gradient. */
function BrassDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E7C879" />
        <stop offset="55%" stopColor="#B08A3E" />
        <stop offset="100%" stopColor="#7A5C24" />
      </linearGradient>
    </defs>
  );
}

function StepArt({ n }: { n: number }) {
  const common = "h-40 w-40 sm:h-56 sm:w-56";
  if (n === 1) {
    return (
      <svg viewBox="0 0 120 120" className={common} aria-hidden="true">
        <BrassDefs id="bg1" />
        <rect x="50" y="14" width="20" height="9" rx="4" fill="url(#bg1)" />
        <path d="M34 26 h52 a6 6 0 0 1 6 6 v26 h-64 v-26 a6 6 0 0 1 6 -6 z" fill="url(#bg1)" />
        <ellipse cx="60" cy="26" rx="26" ry="5" fill="#E7C879" />
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={52 + i * 8}
            r="2.5"
            fill="#3A2317"
            initial={{ cy: 4, opacity: 0 }}
            animate={{ cy: 30, opacity: [0, 1, 0] }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 0.6 }}
          />
        ))}
        <rect x="30" y="58" width="60" height="6" rx="3" fill="#7A5C24" />
      </svg>
    );
  }
  if (n === 2) {
    return (
      <svg viewBox="0 0 120 120" className={common} aria-hidden="true">
        <BrassDefs id="bg2" />
        <path d="M34 18 h52 v26 h-64 v-20 a6 6 0 0 1 6 -6 z" fill="url(#bg2)" opacity="0.85" />
        <rect x="30" y="44" width="60" height="6" rx="3" fill="#7A5C24" />
        <motion.rect
          x="58" width="4" rx="2" fill="#3A2317"
          initial={{ y: 50, height: 0 }}
          animate={{ y: 50, height: 28 }}
          transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
        />
        <path d="M36 86 h48 l-6 18 a6 6 0 0 1 -6 4 h-24 a6 6 0 0 1 -6 -4 z" fill="url(#bg2)" />
        <ellipse cx="60" cy="86" rx="24" ry="5" fill="#2A160D" />
      </svg>
    );
  }
  if (n === 3) {
    return (
      <svg viewBox="0 0 120 120" className={common} aria-hidden="true">
        <BrassDefs id="bg3" />
        <g transform="rotate(-18 38 28)">
          <path d="M26 18 h24 l-3 22 a4 4 0 0 1 -4 3 h-10 a4 4 0 0 1 -4 -3 z" fill="url(#bg3)" />
          <ellipse cx="38" cy="18" rx="12" ry="3" fill="#2A160D" />
        </g>
        <motion.path
          d="M40 30 Q56 60 78 86"
          stroke="#5A3A26"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        />
        <path d="M64 84 h28 l-4 24 a5 5 0 0 1 -5 4 h-10 a5 5 0 0 1 -5 -4 z" fill="url(#bg3)" />
        <ellipse cx="78" cy="84" rx="14" ry="4" fill="#3A2317" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" className={common} aria-hidden="true">
      <BrassDefs id="bg4" />
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M${48 + i * 12} 40 q6 -10 0 -20`}
          stroke="#B08A3E"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 0.7, 0], y: -8 }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
      <path d="M40 46 h40 l-6 44 a8 8 0 0 1 -8 6 h-12 a8 8 0 0 1 -8 -6 z" fill="url(#bg4)" />
      <ellipse cx="60" cy="46" rx="20" ry="5" fill="#3A2317" />
      <path d="M80 54 q16 6 0 24" stroke="url(#bg4)" strokeWidth="5" fill="none" />
    </svg>
  );
}

const AUTO_MS = 4500;

export default function BrewGuide() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const total = brewSteps.length;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + total) % total);

  // Auto-advance the carousel unless paused or reduced-motion.
  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTO_MS);
    return () => clearInterval(id);
  }, [reduced, paused, total]);

  const step = brewSteps[index];

  return (
    <Section id="brew" ariaLabel="How to brew">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker mb-4">How to brew</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            The traditional way, step by step.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="How to brew steps"
        >
          <div className="overflow-hidden rounded-[2rem] border border-brass/20 bg-off-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-6 p-8 sm:grid-cols-2 sm:p-12"
                aria-roledescription="slide"
                aria-label={`Step ${step.n} of ${total}`}
              >
                <div className="flex justify-center">
                  <StepArt n={step.n} />
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-serif text-sm font-bold text-terracotta">
                    Step {step.n} of {total}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-coffee-brown sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-body leading-relaxed text-coffee-mid">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous step"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/40 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              &#8592;
            </button>

            <div className="flex gap-2.5" role="tablist" aria-label="Choose step">
              {brewSteps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to step ${s.n}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-terracotta"
                      : "w-2.5 bg-brass/40 hover:bg-brass"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next step"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/40 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* TODO: an infographic explainer video can replace or sit alongside this
            carousel once produced. Drop it in /public and swap this block. */}

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-terracotta/30 bg-terracotta/5 px-6 py-5 text-center font-body text-coffee-brown">
          <span className="font-semibold">The ratio that works best:</span> 1
          part decoction to 2 parts hot milk of your choice, preferably whole
          fat milk. Adjust to how strong or mild your cup should be.
        </p>
      </div>
    </Section>
  );
}
