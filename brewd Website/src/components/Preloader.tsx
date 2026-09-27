import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";
import SteamVapour from "./SteamVapour";

type PreloaderProps = {
  onDone: () => void;
};

/**
 * Animated logo preloader: the Brew'd PNG logo fades in with a rising
 * decoction wipe effect plus subtle steam. Then it fades out into the hero.
 */
export default function Preloader({ onDone }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const fillDuration = reduced ? 400 : 2200;
    const t1 = setTimeout(() => setVisible(false), fillDuration);
    const t2 = setTimeout(() => onDone(), fillDuration + 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone, reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-roasted"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-label="Loading Brew'd"
          role="status"
        >
          <div className="relative w-64 sm:w-80">
            {/* Logo with rising clip reveal */}
            <div className="relative overflow-hidden">
              {/* Decoction wipe: a colored block rises from bottom to top to reveal the logo */}
              <motion.div
                className="absolute inset-0 bg-roasted"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: reduced ? 0.3 : 2,
                  ease: [0.45, 0, 0.2, 1],
                }}
              />
              <img
                src="/brewd-logo.png"
                alt="Brew'd"
                className="relative w-full h-auto"
              />
            </div>

            {/* Rising steam vapour */}
            <SteamVapour className="pointer-events-none absolute -top-16 left-1/2 h-28 w-28 -translate-x-1/2" />
          </div>

          <p className="mt-8 font-body text-sm uppercase tracking-[0.3em] text-amber-400/80">
            Pouring the decoction
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
