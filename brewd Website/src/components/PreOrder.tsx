import { useState, type FormEvent } from "react";
import Section from "./Section";
import SocialIcon from "./SocialIcon";
import { productInterestOptions, social } from "../content/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  cityState: string;
  productInterest: string;
  quantity: string;
  eventsOrBulk: "Yes" | "No";
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  cityState: "",
  productInterest: productInterestOptions[1],
  quantity: "",
  eventsOrBulk: "No",
};

export default function PreOrder() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: backend integration. Send `form` to the pre-order API / CRM
    // (e.g. POST /api/preorder) and handle success + error states.
    // For now we just log and show a confirmation.
    console.log("Pre-order submission:", form);
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-terracotta";
  const labelClass =
    "mb-1.5 block font-body text-sm font-medium text-coffee-brown";

  return (
    <Section id="preorder" ariaLabel="Pre-order" className="bg-beige/40">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="kicker mb-4">Pre-order</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            The first Brew'd batch is coming.
          </h2>
          <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-coffee-mid">
            Join the list and pick your product. Be the first to receive Brew'd
            and get priority when the first batch is ready to ship.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={social.instagram.href}
              aria-label="Follow Brew'd on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-brown/30 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href={social.tiktok.href}
              aria-label="Follow Brew'd on TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-brown/30 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              <SocialIcon name="tiktok" />
            </a>
            <a
              href={social.facebook.href}
              aria-label="Follow Brew'd on Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-brown/30 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              <SocialIcon name="facebook" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-brass/25 bg-off-white p-7 shadow-xl shadow-coffee-brown/5 sm:p-9">
          {submitted ? (
            <div role="status" className="py-10 text-center">
              <h3 className="font-serif text-2xl text-coffee-brown">
                You are on the list.
              </h3>
              <p className="mt-3 font-body text-coffee-mid">
                We will reach out the moment the first batch is ready. Welcome to
                Brew'd.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialState);
                  setSubmitted(false);
                }}
                className="btn-ghost mt-6"
              >
                Add another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClass}
                    placeholder="(555) 000 0000"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="cityState" className={labelClass}>
                    City and State
                  </label>
                  <input
                    id="cityState"
                    type="text"
                    value={form.cityState}
                    onChange={(e) => update("cityState", e.target.value)}
                    className={fieldClass}
                    placeholder="Austin, TX"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="productInterest" className={labelClass}>
                    Product interest
                  </label>
                  <select
                    id="productInterest"
                    value={form.productInterest}
                    onChange={(e) => update("productInterest", e.target.value)}
                    className={fieldClass}
                  >
                    {productInterestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className={labelClass}>
                    Quantity interest
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={(e) => update("quantity", e.target.value)}
                    className={fieldClass}
                    placeholder="e.g. 2 packs a month"
                  />
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>
                  Interested in events or bulk orders?
                </legend>
                <div className="flex gap-6">
                  {(["Yes", "No"] as const).map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2 font-body text-coffee-brown"
                    >
                      <input
                        type="radio"
                        name="eventsOrBulk"
                        value={opt}
                        checked={form.eventsOrBulk === opt}
                        onChange={() => update("eventsOrBulk", opt)}
                        className="accent-terracotta"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className="btn-primary w-full">
                Join the First Batch
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
