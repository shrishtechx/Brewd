import PageShell from "./PageShell";
import ProductCard from "../components/ProductCard";
import { products, brassProducts, giftAndSubscription } from "../content/site";

export default function ProductsPage() {
  return (
    <PageShell
      kicker="The lineup"
      title="Everything Brew'd, in one place."
      intro="Our coffee, our brass, and the ways to make it a habit. Pick what fits your morning."
    >
      {/* Coffee */}
      <section aria-label="Coffee" className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-coffee-brown sm:text-3xl">
          Coffee
        </h2>
        <div className="mt-7 grid gap-7 md:grid-cols-2 md:items-stretch lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Brass */}
      <section aria-label="Brass products" className="mt-20">
        <h2 className="font-serif text-2xl font-bold text-coffee-brown sm:text-3xl">
          Brass
        </h2>
        <p className="mt-3 max-w-2xl font-body text-coffee-mid">
          The traditional South Indian filter and tumbler-dabarah set, made in
          brass the way they always have been.
        </p>
        <div className="mt-7 grid gap-7 md:grid-cols-2 md:items-stretch lg:grid-cols-3">
          {brassProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Gift sets, bulk, subscriptions */}
      <section aria-label="Gift sets, bulk and subscriptions" className="mt-20">
        <h2 className="font-serif text-2xl font-bold text-coffee-brown sm:text-3xl">
          Gift sets, bulk and subscriptions
        </h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {giftAndSubscription.map((opt) => (
            <div
              key={opt.title}
              className="flex flex-col rounded-3xl border border-brass/25 bg-off-white p-8"
            >
              <h3 className="font-serif text-xl font-bold text-coffee-brown">
                {opt.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-coffee-mid">{opt.body}</p>
              <a href="#/order" className="btn-ghost mt-6 w-fit">
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
