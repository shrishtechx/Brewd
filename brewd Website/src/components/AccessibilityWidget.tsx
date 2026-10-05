import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Floating accessibility widget. Each option toggles a data-attribute or class
 * on <html>, and the matching CSS (in index.css under the a11y-* selectors)
 * does the visual work. Preferences persist to localStorage.
 */

type Settings = {
  lineHeight: 0 | 1 | 2 | 3; // 0 = default
  hideImages: boolean;
  readableFont: boolean;
  dyslexicFont: boolean;
  stopAnimations: boolean;
  invert: boolean;
  contrast: boolean;
  saturation: "" | "grayscale" | "low" | "high";
};

const DEFAULTS: Settings = {
  lineHeight: 0,
  hideImages: false,
  readableFont: false,
  dyslexicFont: false,
  stopAnimations: false,
  invert: false,
  contrast: false,
  saturation: "",
};

const STORAGE_KEY = "brewd-a11y";

function apply(settings: Settings) {
  const root = document.documentElement;
  root.setAttribute("data-a11y-line-height", String(settings.lineHeight));
  root.toggleAttribute("data-a11y-hide-images", settings.hideImages);
  root.toggleAttribute("data-a11y-readable-font", settings.readableFont);
  root.toggleAttribute("data-a11y-dyslexic-font", settings.dyslexicFont);
  root.toggleAttribute("data-a11y-stop-animations", settings.stopAnimations);
  root.toggleAttribute("data-a11y-invert", settings.invert);
  root.toggleAttribute("data-a11y-contrast", settings.contrast);
  root.setAttribute("data-a11y-saturation", settings.saturation);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  // Load saved preferences once.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Apply + persist on change.
  useEffect(() => {
    apply(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* ignore quota / privacy mode errors */
    }
  }, [settings]);

  function set<K extends keyof Settings>(key: K, value: Settings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(key: keyof Settings) {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function reset() {
    setSettings(DEFAULTS);
  }

  const tileBase =
    "flex flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center text-sm font-medium transition-colors";
  const tileOff = "border-brass/25 bg-off-white text-coffee-brown hover:border-terracotta";
  const tileOn = "border-terracotta bg-terracotta/10 text-terracotta";

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open accessibility options"
        aria-haspopup="dialog"
        className="fixed bottom-5 left-5 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-coffee-brown text-cream shadow-lg shadow-coffee-brown/30 transition-transform hover:scale-105 focus-visible:scale-105"
      >
        {/* Universal accessibility glyph */}
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M5 8h14a1 1 0 0 1 0 2h-4.5l1.2 10.1a1 1 0 1 1-2 .24L12 14.5l-1.7 5.84a1 1 0 1 1-2-.24L9.5 10H5a1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[96] flex items-stretch justify-start bg-roasted/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility options"
          >
            <motion.div
              className="h-full w-full max-w-sm overflow-y-auto bg-cream shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-terracotta px-6 py-4 text-cream">
                <h2 className="font-serif text-lg font-bold">Accessibility Options</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close accessibility options"
                  className="text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-6 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {/* Line height cycles 0..3 */}
                  <button
                    type="button"
                    onClick={() =>
                      set("lineHeight", ((settings.lineHeight + 1) % 4) as Settings["lineHeight"])
                    }
                    aria-pressed={settings.lineHeight > 0}
                    className={`${tileBase} ${settings.lineHeight > 0 ? tileOn : tileOff}`}
                  >
                    <span aria-hidden="true" className="text-lg">≡</span>
                    Line Height
                    <span className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`h-1 w-4 rounded ${
                            settings.lineHeight >= n ? "bg-terracotta" : "bg-brass/30"
                          }`}
                        />
                      ))}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggle("hideImages")}
                    aria-pressed={settings.hideImages}
                    className={`${tileBase} ${settings.hideImages ? tileOn : tileOff}`}
                  >
                    <span aria-hidden="true" className="text-lg">🖼</span>
                    Hide Images
                  </button>

                  <button
                    type="button"
                    onClick={() => toggle("readableFont")}
                    aria-pressed={settings.readableFont}
                    className={`${tileBase} ${settings.readableFont ? tileOn : tileOff}`}
                  >
                    <span aria-hidden="true" className="text-lg">Aa</span>
                    Readable Fonts
                  </button>

                  <button
                    type="button"
                    onClick={() => toggle("dyslexicFont")}
                    aria-pressed={settings.dyslexicFont}
                    className={`${tileBase} ${settings.dyslexicFont ? tileOn : tileOff}`}
                  >
                    <span aria-hidden="true" className="text-lg">Aa</span>
                    Dyslexic Font
                  </button>

                  <button
                    type="button"
                    onClick={() => toggle("stopAnimations")}
                    aria-pressed={settings.stopAnimations}
                    className={`${tileBase} ${settings.stopAnimations ? tileOn : tileOff}`}
                  >
                    <span aria-hidden="true" className="text-lg">⏸</span>
                    Stop Animations
                  </button>
                </div>

                <div>
                  <h3 className="mb-3 font-serif text-base font-bold text-coffee-brown">
                    Colors
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => toggle("invert")}
                      aria-pressed={settings.invert}
                      className={`${tileBase} ${settings.invert ? tileOn : tileOff}`}
                    >
                      <span aria-hidden="true" className="text-lg">◐</span>
                      Invert Colors
                    </button>
                    <button
                      type="button"
                      onClick={() => toggle("contrast")}
                      aria-pressed={settings.contrast}
                      className={`${tileBase} ${settings.contrast ? tileOn : tileOff}`}
                    >
                      <span aria-hidden="true" className="text-lg">☼</span>
                      Contrast
                    </button>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="a11y-saturation" className="mb-1.5 block font-body text-sm font-medium text-coffee-brown">
                      Saturation
                    </label>
                    <select
                      id="a11y-saturation"
                      value={settings.saturation}
                      onChange={(e) =>
                        set("saturation", e.target.value as Settings["saturation"])
                      }
                      className="w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown"
                    >
                      <option value="">Default</option>
                      <option value="low">Low saturation</option>
                      <option value="high">High saturation</option>
                      <option value="grayscale">Grayscale</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={reset}
                  className="btn-ghost w-full"
                >
                  Reset all
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
