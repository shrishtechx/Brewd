import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

type WordCyclerProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/**
 * Cycles between words using fade + vertical slide (no typewriter effect).
 * The container smoothly animates its width to match each word.
 * Respects reduced-motion by showing only the first word.
 */
export default function WordCycler({
  words,
  interval = 2400,
  className = "",
}: WordCyclerProps) {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | "auto">("auto");

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, words.length, reduced]);

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [index, words]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <motion.span
      className={`relative inline-block align-baseline ${className}`}
      animate={{ width }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hidden measurer for current word */}
      <span
        ref={measureRef}
        className="invisible absolute left-0 top-0 whitespace-nowrap"
        aria-hidden="true"
      >
        {words[index]}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block whitespace-nowrap"
          initial={{ y: "0.4em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.4em", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
