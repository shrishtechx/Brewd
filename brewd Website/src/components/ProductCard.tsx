import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Product } from "../content/site";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useMediaPreferences";
import SteamVapour from "./SteamVapour";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const enableTilt = !isMobile && !reduced;
  const [active, setActive] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!enableTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
    setActive(false);
  }

  const highlighted = product.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="relative"
    >
      {/* Steam / aroma vapour behind active card */}
      {active && enableTilt && (
        <SteamVapour className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-24 w-24" />
      )}

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={handleLeave}
        style={enableTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className={[
          "flex h-full flex-col rounded-3xl border p-8 transition-shadow duration-300",
          highlighted
            ? "border-brass bg-gradient-to-br from-roasted to-coffee-brown text-cream shadow-2xl shadow-coffee-brown/40 lg:scale-[1.04]"
            : "border-brass/25 bg-off-white text-coffee-brown shadow-lg shadow-coffee-brown/5",
        ].join(" ")}
      >
        {highlighted && (
          <span className="mb-4 inline-block w-fit rounded-full bg-brass-light px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-roasted">
            Most loved
          </span>
        )}
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            highlighted ? "text-brass-light" : "text-terracotta"
          }`}
        >
          {product.kicker}
        </p>
        <h3
          className={`mt-3 font-serif text-lg font-bold ${
            highlighted ? "text-cream" : "text-coffee-brown"
          }`}
        >
          {product.name}
        </h3>
        <p
          className={`mt-2 font-serif text-xl italic leading-snug ${
            highlighted ? "text-brass-light" : "text-terracotta"
          }`}
        >
          {product.title}
        </p>
        <p
          className={`mt-4 flex-1 font-body text-[0.95rem] leading-relaxed ${
            highlighted ? "text-cream/85" : "text-coffee-mid"
          }`}
        >
          {product.description}
        </p>

        <div
          className={`mt-7 flex items-end justify-between border-t pt-5 ${
            highlighted ? "border-brass-light/30" : "border-brass/20"
          }`}
        >
          <div>
            <p
              className={`text-xs uppercase tracking-wide ${
                highlighted ? "text-cream/60" : "text-coffee-mid/70"
              }`}
            >
              {product.size}
            </p>
            <p
              className={`font-serif text-xl ${
                highlighted ? "text-brass-light" : "text-coffee-brown"
              }`}
            >
              {product.price}
            </p>
          </div>
          <a
            href="#preorder"
            className={highlighted ? "btn-brass" : "btn-ghost"}
          >
            Pre-order
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
