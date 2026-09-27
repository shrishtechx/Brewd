import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { ingredients } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

export default function BlendPhilosophy() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="blend" ariaLabel="Blend philosophy">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker mb-4">What goes in</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            Three ingredients that have been making this cup irreplaceable since
            before anyone thought to question it.
          </h2>
          <p className="mt-5 font-body text-lg text-coffee-mid">
            Most coffees ask you to acquire a taste. This one asks you to
            remember one.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Orbit visual */}
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-visible">
            {/* The orbit ring (decorative) */}
            <div
              className={`absolute inset-[12%] rounded-full border border-brass/20 ${
                reduced ? "" : "animate-spin-slow"
              }`}
            />

            {/* Ingredient bubbles positioned statically inside the square */}
            {ingredients.map((ing, i) => {
              const angle = (i / ingredients.length) * Math.PI * 2 - Math.PI / 2;
              const r = 30; // percent radius from center
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              const isActive = i === active;
              return (
                <button
                  key={ing.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${ing.name}`}
                  aria-pressed={isActive}
                  className={`absolute z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-serif text-base font-bold transition-all duration-300 sm:h-24 sm:w-24 sm:text-lg ${
                    isActive
                      ? "scale-110 border-transparent text-cream shadow-xl"
                      : "border-brass/30 bg-off-white text-coffee-brown"
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    backgroundColor: isActive ? ing.color : undefined,
                  }}
                >
                  {ing.name}
                </button>
              );
            })}
            {/* Center cup */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-roasted text-center text-cream">
              <span className="font-serif text-2xl font-bold">Kaapi</span>
            </div>
          </div>

          {/* Active ingredient detail */}
          <div className="space-y-4">
            {ingredients.map((ing, i) => (
              <motion.button
                key={ing.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`block w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                  i === active
                    ? "border-transparent shadow-lg"
                    : "border-brass/20 bg-off-white"
                }`}
                style={{
                  backgroundColor: i === active ? `${ing.color}14` : undefined,
                  borderColor: i === active ? ing.color : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: ing.color }}
                  />
                  <h3 className="font-serif text-xl font-bold text-coffee-brown">
                    {ing.name}
                  </h3>
                </div>
                <p className="mt-2 font-body text-coffee-mid">{ing.note}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
