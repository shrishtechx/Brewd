import { motion } from "framer-motion";
import WordCycler from "./WordCycler";
import HeroVideo from "./HeroVideo";

/**
 * Hero: the brand video now fills the first screen as a full-bleed background
 * (coffee "throughout the first part of the page"), with the Brew'd headline
 * and CTAs layered on top. The old Arabica/Robusta/chicory paragraph has been
 * removed per the corrections.
 */
export default function Hero() {
  return (
    <header
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Brew'd hero"
    >
      {/* Full-bleed background video */}
      <div className="absolute inset-0 -z-0">
        <HeroVideo />
        {/* Readability overlay so the copy stays legible over the footage */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-coffee-brown/80 via-coffee-brown/55 to-coffee-brown/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coffee-brown/70 via-transparent to-coffee-brown/40" />
      </div>

      {/* Copy layered over the video */}
      <div className="container-x relative z-10 pt-24 pb-16 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="kicker mb-5 text-brass-light">Real Kaapi · Now in the US</p>
          <h1 className="heading-serif text-4xl text-cream drop-shadow-sm sm:text-5xl lg:text-6xl">
            South India has been{" "}
            <WordCycler
              words={["perfecting", "brewing", "refining"]}
              className="text-brass-light"
            />{" "}
            this cup for over a century. Your morning is about to find out why.
          </h1>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#/order" className="btn-brass">
              Shop Now
            </a>
            <a href="#blend" className="btn-ghost border-cream/50 text-cream hover:border-cream hover:bg-cream/10">
              What goes into it
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/50 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-cream/70" />
        </motion.div>
      </div>
    </header>
  );
}
