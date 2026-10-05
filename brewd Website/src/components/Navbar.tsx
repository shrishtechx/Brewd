import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Our Story", href: "#/our-story" },
  { label: "Products", href: "#/products" },
  { label: "How To Brew", href: "#/how-to-brew" },
  { label: "Blend", href: "#blend" },
  { label: "Ask Janani", href: "#ask" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-brass/20 bg-cream/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <a href="#/" aria-label="Brew'd home" onClick={() => setOpen(false)}>
          <img src="/brewd-logo.png" alt="Brew'd" className="h-9 w-auto sm:h-12" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm font-medium transition-colors hover:text-terracotta ${
                solid ? "text-coffee-brown" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Hamburger (mobile / tablet only) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
              solid ? "text-coffee-brown" : "text-cream"
            }`}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brass/20 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-x flex flex-col py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-brass/10 py-3.5 font-serif text-lg text-coffee-brown transition-colors hover:text-terracotta"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
