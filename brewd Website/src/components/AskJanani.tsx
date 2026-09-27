import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { faqs } from "../content/site";

/** Renders simple **bold** markdown in FAQ answers. */
function renderAnswer(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-coffee-brown">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function AskJanani() {
  const [open, setOpen] = useState<number | null>(0);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <Section id="ask" ariaLabel="Ask Janani">
      <div className="container-x mx-auto max-w-3xl">
        <div className="text-center">
          <p className="kicker mb-4">Ask Janani</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            Straight from the founder
          </h2>
          <p className="mt-5 font-body text-lg text-coffee-mid">
            Every question about South Indian filter coffee, answered by the
            person who loved it enough to build a company around it.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-terracotta bg-terracotta/5"
                    : "border-brass/20 bg-off-white"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`font-serif text-lg font-semibold transition-colors ${
                        isOpen ? "text-terracotta" : "text-coffee-brown"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-2xl transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-terracotta" : "text-coffee-mid"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 font-body leading-relaxed text-coffee-mid">
                        {renderAnswer(faq.a)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
