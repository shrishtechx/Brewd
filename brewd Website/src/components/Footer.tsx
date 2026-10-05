import { useState, type FormEvent } from "react";
import BrandMark from "./BrandMark";
import SocialIcon, { type IconName } from "./SocialIcon";
import { social, footerLinks, contact } from "../content/site";

const socialLinks: { name: IconName; label: string; href: string }[] = [
  { name: "instagram", ...social.instagram },
  { name: "facebook", ...social.facebook },
  { name: "tiktok", ...social.tiktok },
  { name: "email", ...social.email },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: backend integration. Add `email` to the newsletter list.
    console.log("Newsletter signup:", email);
    setSubscribed(true);
  }

  return (
    <footer className="relative overflow-hidden bg-roasted text-cream" aria-label="Footer">
      {/* Davara signature mark as a faint background watermark */}
      <BrandMark
        className="pointer-events-none absolute -bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 opacity-[0.06] sm:h-96 sm:w-96"
        rounded
      />

      {/* Newsletter band */}
      <div className="border-b border-cream/15">
        <div className="container-x relative flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brass-light">
              Stay in the loop
            </p>
            <p className="mt-2 max-w-xl font-serif text-xl text-cream sm:text-2xl">
              Be the first to hear about fresh batches, new arrivals and
              exclusive offers at Brew'd.
            </p>
          </div>

          {subscribed ? (
            <p className="font-body text-brass-light">You are on the list. Talk soon.</p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-brass/40 bg-cream/95 px-5 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-brass-light"
              />
              <button type="submit" className="btn-brass shrink-0">
                Notify me
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container-x relative py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left: logo + tagline */}
          <div className="max-w-sm">
            <img
              src="/brewd-logo.png"
              alt="Brew'd"
              className="h-10 w-auto brightness-110"
            />
            <p className="mt-5 font-serif text-lg italic leading-relaxed text-cream/80">
              For everyone who missed traditional coffee, and for everyone
              willing to try something new.
            </p>
          </div>

          {/* Middle: follow + company */}
          <nav className="flex flex-wrap gap-x-10 gap-y-6" aria-label="Footer links">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-brass-light">
                Follow
              </span>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream/85 transition-colors hover:border-brass-light hover:bg-brass-light hover:text-roasted"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-brass-light">
                Company
              </span>
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-body text-cream/80 transition-colors hover:text-brass-light"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right: contact */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-brass-light">
              Get in touch
            </span>
            <div>
              <a
                href={contact.phone.href}
                className="font-body text-cream/85 transition-colors hover:text-brass-light"
              >
                {contact.phone.label}
              </a>
              <p className="font-body text-xs text-cream/50">{contact.phone.note}</p>
            </div>
            <div>
              <a
                href={contact.email.href}
                className="font-body text-cream/85 transition-colors hover:text-brass-light"
              >
                {contact.email.label}
              </a>
              <p className="font-body text-xs text-cream/50">{contact.email.note}</p>
            </div>
            <p className="font-body text-cream/60">{contact.address}</p>
          </div>
        </div>

        {/* Signature with the davara set brand mark */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-sm text-cream/60 sm:flex-row">
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9" rounded />
            <p>&copy; {new Date().getFullYear()} Brew'd. All rights reserved.</p>
          </div>
          <p>Brewed in South India. Served across the US.</p>
        </div>
      </div>
    </footer>
  );
}
