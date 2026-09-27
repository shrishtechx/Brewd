import { motion } from "framer-motion";
import Section from "./Section";

// Points on the bean, labeled by ingredient. We avoid naming specific estates
// or suppliers here, keeping the sourcing detail minimal.
// `anchor` controls which side the label sits so it never runs off the bean.
const points = [
  { name: "Arabica", x: 150, y: 140, anchor: "end" as const },
  { name: "Robusta", x: 175, y: 235, anchor: "start" as const },
  { name: "Chicory", x: 150, y: 320, anchor: "end" as const },
];

export default function SourcingStory() {
  return (
    <Section id="sourcing" ariaLabel="Sourcing story" className="bg-coffee-brown text-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brass-light">
            Where it comes from
          </p>
          <h2 className="heading-serif mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Grown in South India, where this cup has always belonged.
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/80">
            Our Arabica, Robusta, and Chicory come from the coffee-growing
            regions of Coorg, Karnataka (South India), where filter coffee has
            been a way of life for generations. That heritage is part of what
            makes this cup taste like nothing else.
          </p>
        </div>

        {/* Stylized coffee bean illustration */}
        <div className="relative mx-auto w-full max-w-sm">
          <svg viewBox="0 0 320 420" className="w-full" role="img" aria-label="Coffee bean illustration representing sourcing">
            {/* Bean outline */}
            <motion.ellipse
              cx="160"
              cy="210"
              rx="100"
              ry="170"
              fill="rgba(212,175,90,0.06)"
              stroke="#D4AF5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Bean center crease */}
            <motion.path
              d="M160 50 Q130 130 160 210 Q190 290 160 370"
              fill="none"
              stroke="#D4AF5A"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
            />

            {points.map((p, i) => (
              <g key={p.name}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  fill="#D4AF5A"
                  opacity="0.18"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [1, 1.6, 1] }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  fill="#E7C879"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.3 }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <motion.text
                  x={p.anchor === "end" ? p.x - 16 : p.x + 16}
                  y={p.y + 5}
                  textAnchor={p.anchor}
                  fill="#F7F1E6"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="18"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.3 }}
                >
                  {p.name}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </Section>
  );
}
