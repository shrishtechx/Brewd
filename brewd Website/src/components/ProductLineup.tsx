import Section from "./Section";
import ProductCard from "./ProductCard";
import { products } from "../content/site";

export default function ProductLineup() {
  return (
    <Section id="products" ariaLabel="Product lineup" reveal={false}>
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            Three ways into the same hundred-year-old cup.
          </h2>
          <p className="mt-5 font-body text-lg text-coffee-mid">
            Pick the one that fits your morning. They all end the same way, with
            a tumbler in your hand and no regrets about it.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3 md:items-stretch">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
