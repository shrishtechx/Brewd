import { motion } from "framer-motion";
import Section from "./Section";
import SteamPlaceholder from "./SteamPlaceholder";

export default function FounderStory() {
  return (
    <Section id="founder" ariaLabel="Founder story">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Portrait + brass filter */}
        <div className="relative">
          {/* TODO: replace with Janani's real portrait. Provide descriptive alt text. */}
          <SteamPlaceholder
            className="mx-auto aspect-[4/5] w-full max-w-md shadow-xl"
            label="Portrait of Janani coming soon"
          />

          {/* Personal brass filter, sitting on the portrait corner */}
          <motion.div
            className="absolute -bottom-6 -right-2 sm:-right-6"
            initial={{ opacity: 0, y: 20, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="120" height="150" viewBox="0 0 120 150" aria-hidden="true">
              <defs>
                <linearGradient id="founderBrass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E7C879" />
                  <stop offset="100%" stopColor="#7A5C24" />
                </linearGradient>
              </defs>
              <rect x="50" y="6" width="20" height="10" rx="4" fill="url(#founderBrass)" />
              <path d="M30 22 h60 a6 6 0 0 1 6 6 v30 h-72 v-30 a6 6 0 0 1 6 -6 z" fill="url(#founderBrass)" />
              <rect x="26" y="60" width="68" height="7" rx="3" fill="#7A5C24" />
              <path d="M32 68 h56 l-8 50 a8 8 0 0 1 -8 6 h-24 a8 8 0 0 1 -8 -6 z" fill="url(#founderBrass)" />
            </svg>
          </motion.div>
        </div>

        {/* Story */}
        <div>
          <p className="kicker mb-5">The founder</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            She packed a piece of home. Brew'd is what it grew into.
          </h2>
          <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-coffee-mid">
            <p>
              Janani moved to the United States with 100 pounds of luggage and
              one quiet promise to herself. A piece of home was coming along for
              the ride, no matter what had to be left behind.
            </p>
            <p>
              Brew'd is how she keeps that promise. It is her way of honoring
              where she comes from and holding onto her culture, even as
              everything else in life keeps moving faster than it should.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
