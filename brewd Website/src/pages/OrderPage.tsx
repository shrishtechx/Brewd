import PageShell from "./PageShell";
import { allProducts } from "../content/site";

export default function OrderPage() {
  return (
    <PageShell
      kicker="Order"
      title="Pick your size."
      intro="Sizes and prices are being finalised. This information will be sent and listed here shortly — check back soon or join the list to be notified."
    >
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-3xl border border-brass/25 bg-off-white p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              {product.kicker}
            </p>
            <h2 className="mt-3 font-serif text-xl font-bold text-coffee-brown">
              {product.name}
            </h2>

            <div className="mt-6 flex-1 space-y-3">
              {/* Sizes are TBD; show a placeholder row until pricing lands. */}
              <div className="flex items-center justify-between rounded-xl border border-brass/20 px-4 py-3">
                <span className="font-body text-coffee-mid">{product.size}</span>
                <span className="font-serif text-coffee-brown">{product.price}</span>
              </div>
              <p className="font-body text-sm text-coffee-mid/80">
                More sizes and final pricing coming soon.
              </p>
            </div>

            <a href="#preorder" className="btn-primary mt-6 w-full">
              Notify me
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
