import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { eventProductOptions, howHeardOptions } from "../content/site";

type EventForm = {
  name: string;
  contact: string;
  requirement: string;
  howHeard: string;
  products: string[];
  location: string;
  subscribe: boolean;
};

const initialForm: EventForm = {
  name: "",
  contact: "",
  requirement: "",
  howHeard: howHeardOptions[0],
  products: [],
  location: "",
  subscribe: true,
};

export default function Events() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EventForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof EventForm>(key: K, value: EventForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleProduct(product: string) {
    setForm((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: backend integration. Send `form` to the events / CRM endpoint.
    console.log("Event inquiry submission:", form);
    setSubmitted(true);
  }

  function close() {
    setOpen(false);
    // Reset after the close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 300);
  }

  const fieldClass =
    "w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-terracotta";
  const labelClass =
    "mb-1.5 block font-body text-sm font-medium text-coffee-brown";

  return (
    <Section id="events" ariaLabel="Events and community" className="bg-beige/40">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coffee-brown to-roasted px-8 py-10 text-center sm:px-14 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brass-light">
            Events and community
          </p>
          <h2 className="heading-serif mx-auto mt-4 max-w-3xl text-3xl text-cream sm:text-4xl lg:text-5xl">
            Brew'd belongs where people gather.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            House parties and wedding events, tasting parties and pop-up shows,
            business and wholesale. We are excited and interested in exploring
            all of it. Tell us what you have in mind.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-brass mt-9"
          >
            Invite Brew'd to your next event
          </button>
        </div>
      </div>

      {/* Inquiry modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-roasted/70 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Event inquiry form"
          >
            <motion.div
              className="relative my-8 w-full max-w-lg rounded-3xl bg-cream p-7 shadow-2xl sm:p-9"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 text-2xl leading-none text-coffee-mid hover:text-terracotta"
              >
                &times;
              </button>

              {submitted ? (
                <div className="py-8 text-center" role="status">
                  <h3 className="font-serif text-2xl text-coffee-brown">
                    Thank you. We have it.
                  </h3>
                  <p className="mt-3 font-body text-coffee-mid">
                    We will get back to you soon about bringing Brew'd to your
                    event.
                  </p>
                  <button type="button" onClick={close} className="btn-primary mt-6">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="kicker mb-2">Tell us about it</p>
                  <h3 className="font-serif text-2xl font-bold text-coffee-brown">
                    Invite Brew'd to your next event
                  </h3>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                    <div>
                      <label htmlFor="ev-name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="ev-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="ev-contact" className={labelClass}>
                        Contact or email
                      </label>
                      <input
                        id="ev-contact"
                        type="text"
                        required
                        value={form.contact}
                        onChange={(e) => update("contact", e.target.value)}
                        className={fieldClass}
                        placeholder="Email or phone"
                      />
                    </div>

                    <div>
                      <label htmlFor="ev-req" className={labelClass}>
                        Tell us briefly about your requirement
                      </label>
                      <textarea
                        id="ev-req"
                        rows={3}
                        value={form.requirement}
                        onChange={(e) => update("requirement", e.target.value)}
                        className={`${fieldClass} resize-none`}
                        placeholder="What is the occasion, roughly how many people, and what you are hoping for"
                      />
                    </div>

                    <div>
                      <label htmlFor="ev-heard" className={labelClass}>
                        How did you hear of us?
                      </label>
                      <select
                        id="ev-heard"
                        value={form.howHeard}
                        onChange={(e) => update("howHeard", e.target.value)}
                        className={fieldClass}
                      >
                        {howHeardOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <fieldset>
                      <legend className={labelClass}>
                        What products are you interested in?
                      </legend>
                      <div className="flex flex-col gap-2">
                        {eventProductOptions.map((product) => (
                          <label
                            key={product}
                            className="flex cursor-pointer items-center gap-2 font-body text-coffee-brown"
                          >
                            <input
                              type="checkbox"
                              checked={form.products.includes(product)}
                              onChange={() => toggleProduct(product)}
                              className="accent-terracotta"
                            />
                            {product}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="ev-location" className={labelClass}>
                        Location
                      </label>
                      <input
                        id="ev-location"
                        type="text"
                        value={form.location}
                        onChange={(e) => update("location", e.target.value)}
                        className={fieldClass}
                        placeholder="City and State"
                      />
                    </div>

                    <label className="flex cursor-pointer items-center gap-2 font-body text-sm text-coffee-brown">
                      <input
                        type="checkbox"
                        checked={form.subscribe}
                        onChange={(e) => update("subscribe", e.target.checked)}
                        className="accent-terracotta"
                      />
                      Keep me subscribed for updates and news
                    </label>

                    <button type="submit" className="btn-primary w-full">
                      Send inquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
