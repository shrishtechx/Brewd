import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FounderStory from "./components/FounderStory";
import ProductLineup from "./components/ProductLineup";
import PreOrder from "./components/PreOrder";
import BrewGuide from "./components/BrewGuide";
import BlendPhilosophy from "./components/BlendPhilosophy";
import SourcingStory from "./components/SourcingStory";
import AskJanani from "./components/AskJanani";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { usePrefersReducedMotion } from "./hooks/useMediaPreferences";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Always start at the top on (re)load. Disable the browser's automatic
  // scroll restoration so a refresh does not land mid-page.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Smooth background color transition while scrolling: cream -> beige -> coffee brown.
  useEffect(() => {
    if (!loaded) return;
    const el = rootRef.current;
    if (!el) return;

    // Recalculate all ScrollTrigger positions once the preloader has cleared
    // and layout has settled (Hero pin depends on this).
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    if (reduced) {
      el.style.backgroundColor = "#F7F1E6";
      return () => window.clearTimeout(refreshId);
    }

    const ctx = gsap.context(() => {
      gsap.to(el, {
        backgroundColor: "#E8DCC6",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
      });
      gsap.fromTo(
        el,
        { backgroundColor: "#E8DCC6" },
        {
          backgroundColor: "#D9C7A6",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "40% top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, rootRef);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [loaded, reduced]);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />

      <div ref={rootRef} className="min-h-screen bg-cream transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <FounderStory />
          <ProductLineup />
          <PreOrder />
          <BrewGuide />
          <BlendPhilosophy />
          <SourcingStory />
          <AskJanani />
          <Events />
        </main>
        <Footer />
      </div>
    </>
  );
}
