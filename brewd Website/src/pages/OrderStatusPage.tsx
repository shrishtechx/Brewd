import { useState, type FormEvent } from "react";
import PageShell from "./PageShell";

export default function OrderStatusPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: backend integration. Look up `orderId` + `email` against the
    // fulfilment system and show real status. Placeholder for now.
    setChecked(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-brass/30 bg-off-white px-4 py-3 font-body text-coffee-brown placeholder:text-coffee-mid/50 focus:border-terracotta";
  const labelClass =
    "mb-1.5 block font-body text-sm font-medium text-coffee-brown";

  return (
    <PageShell
      kicker="Order status"
      title="Track your order."
      intro="Enter your order number and email to see where your Brew'd is."
    >
      <div className="mt-12 max-w-lg rounded-3xl border border-brass/25 bg-off-white p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="order-id" className={labelClass}>
              Order number
            </label>
            <input
              id="order-id"
              type="text"
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className={fieldClass}
              placeholder="e.g. BRWD-10234"
            />
          </div>
          <div>
            <label htmlFor="order-email" className={labelClass}>
              Email on the order
            </label>
            <input
              id="order-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder="you@email.com"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Check status
          </button>
        </form>

        {checked && (
          <p className="mt-6 rounded-xl border border-terracotta/30 bg-terracotta/5 px-4 py-4 font-body text-sm text-coffee-brown">
            Order tracking is not live yet. Once orders begin shipping, your
            status and tracking details will appear here. Full order-status
            details to follow.
          </p>
        )}
      </div>
    </PageShell>
  );
}
