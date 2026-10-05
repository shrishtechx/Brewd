import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import FounderStory from "../components/FounderStory";
import ProductLineup from "../components/ProductLineup";
import PreOrder from "../components/PreOrder";
import BrewGuide from "../components/BrewGuide";
import BlendPhilosophy from "../components/BlendPhilosophy";
import SourcingStory from "../components/SourcingStory";
import Reviews from "../components/Reviews";
import AskJanani from "../components/AskJanani";
import Events from "../components/Events";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FounderStory />
      <ProductLineup />
      <PreOrder />
      <BrewGuide />
      <BlendPhilosophy />
      <SourcingStory />
      <Reviews />
      <AskJanani />
      <Events />
    </main>
  );
}
