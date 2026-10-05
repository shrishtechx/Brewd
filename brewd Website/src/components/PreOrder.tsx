import { useState, type FormEvent } from "react";
import Section from "./Section";
import SocialIcon from "./SocialIcon";
import {
  productInterestOptions,
  quantityOptions,
  subscriptionOptions,
  social,
} from "../content/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  productInterest: string;
  quantity: string;
  eventsOrBulk: "Yes" | "No";
  subscription: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  productInterest: productInterestOptions[1],
  quantity: quantityOptions[0],
  eventsOrBulk: "No",
  subscription: subscriptionOptions[0],
};

export default function PreOrder() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: backend integration. Send `form` to the order API / CRM
    // (e.g. POST /api/order) and handle success + error states.
    console.log("Order submission:", form);
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-terracotta";
  const labelClass =
    "mb-1.5 block font-body text-sm font-medium text-coffee-brown";

  return (
    <Section id="preorder" ariaLabel="Order" className="bg-beige/40">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          {/* Red kicker per the corrections */}
          <p className="kicker mb-4 text-terracotta">Take your first step here</p>
          <h2 className="heading-serif flex flex-wrap items-center gap-x-3 text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            <span>Your first</span>
            <img
              src="/brewd-logo.png"
              alt="Brew'd"
              className="inline-block h-9 w-auto align-middle sm:h-11 lg:h-14"
            />
            <span>moment starts here.</span>
          </h2>
          <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-coffee-mid">
            Enjoy 10% off your first order. Your first sip is just the beginning
            of the journey {"\u263A"}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={social.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Brew'd on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-brown/30 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href={social.tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Brew'd on TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-brown/30 text-coffee-brown transition-colors hover:bg-coffee-brown hover:text-cream"
            >
              <SocialIcon name="tiktok" />
            </a>
            <a
              href={social.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
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
                Welcome to the tribe.
              </h3>
              <p className="mt-3 font-body text-coffee-mid">
                We have your details and your 10% off is locked in. We will be
                in touch about your order. Welcome to Brew'd.
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

              {/* Full address block (replaces the old City and State field) */}
              <fieldset className="space-y-5">
                <legend className={labelClass}>Shipping address</legend>
                <div>
                  <label htmlFor="address1" className="sr-only">
                    Street address
                  </label>
                  <input
                    id="address1"
                    type="text"
                    autoComplete="address-line1"
                    value={form.address1}
                    onChange={(e) => update("address1", e.target.value)}
                    className={fieldClass}
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <label htmlFor="address2" className="sr-only">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    id="address2"
                    type="text"
                    autoComplete="address-line2"
                    value={form.address2}
                    onChange={(e) => update("address2", e.target.value)}
                    className={fieldClass}
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label htmlFor="city" className="sr-only">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                      className={fieldClass}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="sr-only">
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      autoComplete="address-level1"
                      value={form.state}
                      onChange={(e) => update("state", e.target.value)}
                      className={fieldClass}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="sr-only">
                      ZIP code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      autoComplete="postal-code"
                      value={form.zip}
                      onChange={(e) => update("zip", e.target.value)}
                      className={fieldClass}
                      placeholder="ZIP code"
                    />
                  </div>
                </div>
              </fieldset>

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
                  <select
                    id="quantity"
                    value={form.quantity}
                    onChange={(e) => update("quantity", e.target.value)}
                    className={fieldClass}
                  >
                    {quantityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
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

              {/* Subscription model appears only after "Yes" to events / bulk */}
              {form.eventsOrBulk === "Yes" && (
                <div>
                  <label htmlFor="subscription" className={labelClass}>
                    Subscription model
                  </label>
                  <select
                    id="subscription"
                    value={form.subscription}
                    onChange={(e) => update("subscription", e.target.value)}
                    className={fieldClass}
                  >
                    {subscriptionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Join the tribe
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
