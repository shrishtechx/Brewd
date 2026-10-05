import PageShell from "./PageShell";

export default function OurStoryPage() {
  return (
    <PageShell
      kicker="Our story"
      title="She packed a piece of home. Brew'd is what it grew into."
      intro="A longer version of our story lives here. (Final copy to be refined — the founder will send an updated version.)"
    >
      <div className="mt-12 max-w-3xl space-y-6 font-body text-lg leading-relaxed text-coffee-mid">
        <p>
          Janani moved to the United States with 100 pounds of luggage and one
          quiet promise to herself. A piece of home was coming along for the
          ride, no matter what had to be left behind.
        </p>
        <p>
          Brew'd is how she keeps that promise. It is her way of honoring where
          she comes from and holding onto her culture, even as everything else
          in life keeps moving faster than it should.
        </p>
        <p className="rounded-2xl border border-terracotta/30 bg-terracotta/5 px-6 py-5 text-base text-coffee-brown">
          Placeholder: full "Our Story" copy will be dropped in here once the
          refined version is provided.
        </p>
      </div>
    </PageShell>
  );
}
