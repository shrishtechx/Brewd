import { forwardRef, type ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /** When true, the inner content reveals on scroll into view. */
  reveal?: boolean;
  ariaLabel?: string;
};

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, className = "", children, reveal = true, ariaLabel },
  ref
) {
  return (
    <section
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={`relative py-14 sm:py-20 ${className}`}
    >
      {reveal ? (
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
});

export default Section;
