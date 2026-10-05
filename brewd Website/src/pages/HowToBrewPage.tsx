import PageShell from "./PageShell";
import BrewGuide from "../components/BrewGuide";

export default function HowToBrewPage() {
  return (
    <PageShell
      kicker="How to brew"
      title="How To Brew"
      intro="The traditional South Indian filter method, step by step."
    >
      <div className="mt-6">
        <BrewGuide standalone />
      </div>
    </PageShell>
  );
}
