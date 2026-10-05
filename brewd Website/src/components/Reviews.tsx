import { useState, type FormEvent } from "react";
import Section from "./Section";
import { seedReviews } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-brass">
      {"\u2605".repeat(rating)}
      <span className="text-brass/30">{"\u2605".repeat(5 - rating)}</span>
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="mx-3 flex w-80 shrink-0 flex-col rounded-3xl border border-brass/25 bg-off-white p-7 shadow-sm">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 font-body leading-relaxed text-coffee-mid">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 font-serif text-coffee-brown">
        {review.name}
        <span className="font-body text-sm text-coffee-mid/70">
          {" "}
          &middot; {review.location}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const reduced = usePrefersReducedMotion();
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const [form, setForm] = useState({ name: "", location: "", rating: 5, text: "" });
  const [thanks, setThanks] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.text.trim() || !form.name.trim()) return;
    // TODO: backend integration. Persist reviews server-side and moderate
    // before display. For now we add it to the live list in state.
    const newReview: Review = {
      name: form.name.trim(),
      location: form.location.trim() || "Somewhere in the US",
      rating: form.rating,
      text: form.text.trim(),
    };
    setReviews((prev) => [newReview, ...prev]);
    setForm({ name: "", location: "", rating: 5, text: "" });
    setThanks(true);
    window.setTimeout(() => setThanks(false), 4000);
  }

  // Duplicate the list so the marquee loop is seamless.
  const track = [...reviews, ...reviews];

  const fieldClass =
    "w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-terracotta";
  const labelClass =
    "mb-1.5 block font-body text-sm font-medium text-coffee-brown";

  return (
    <Section id="reviews" ariaLabel="Reviews">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker mb-4">What people are saying</p>
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            Loved cup after cup.
          </h2>
          <p className="mt-5 font-body text-lg text-coffee-mid">
            Real words from the people drinking Brew'd. Add yours below.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel of reviews */}
      <div
        className="group relative mt-12 overflow-hidden"
        aria-label="Customer reviews carousel"
      >
        <div
          className={`flex w-max ${reduced ? "" : "animate-marquee-slow"} group-hover:[animation-play-state:paused]`}
        >
          {track.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Submit a review */}
      <div className="container-x">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-2xl rounded-3xl border border-brass/25 bg-off-white p-7 shadow-sm sm:p-9"
          noValidate
        >
          <h3 className="font-serif text-xl font-bold text-coffee-brown">
            Leave a review
          </h3>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rev-name" className={labelClass}>
                Name
              </label>
              <input
                id="rev-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={fieldClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="rev-location" className={labelClass}>
                City and State
              </label>
              <input
                id="rev-location"
                type="text"
                value={form.location}
                onChange={(e) =>
                  setForm((f) => ({ ...f, location: e.target.value }))
                }
                className={fieldClass}
                placeholder="Austin, TX"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="rev-rating" className={labelClass}>
              Rating
            </label>
            <select
              id="rev-rating"
              value={form.rating}
              onChange={(e) =>
                setForm((f) => ({ ...f, rating: Number(e.target.value) }))
              }
              className={fieldClass}
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="rev-text" className={labelClass}>
              Your review
            </label>
            <textarea
              id="rev-text"
              rows={3}
              required
              value={form.text}
              onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
              className={`${fieldClass} resize-none`}
              placeholder="Tell us about your cup"
            />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="btn-primary">
              Post review
            </button>
            {thanks && (
              <span role="status" className="font-body text-sm text-terracotta">
                Thanks! Your review is live.
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
