import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccessibilityWidget from "./components/AccessibilityWidget";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import OurStoryPage from "./pages/OurStoryPage";
import HowToBrewPage from "./pages/HowToBrewPage";
import OrderPage from "./pages/OrderPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import { useHashRoute } from "./hooks/useHashRoute";
import { usePrefersReducedMotion } from "./hooks/useMediaPreferences";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const route = useHashRoute();
  const isHome = route === "/";

  // Always start at the top on (re)load. Disable the browser's automatic
  // scroll restoration so a refresh does not land mid-page.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top whenever the route changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Smooth background color transition while scrolling: cream -> beige -> coffee
  // brown. Only runs on the home page, which has the long scroll narrative.
  useEffect(() => {
    if (!loaded || !isHome) return;
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
  }, [loaded, reduced, isHome]);

  function renderPage() {
    switch (route) {
      case "/products":
        return <ProductsPage />;
      case "/our-story":
        return <OurStoryPage />;
      case "/how-to-brew":
        return <HowToBrewPage />;
      case "/order":
        return <OrderPage />;
      case "/order-status":
        return <OrderStatusPage />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />

      <div ref={rootRef} className="min-h-screen bg-cream transition-colors">
        <Navbar />
        {renderPage()}
        <Footer />
      </div>

      <AccessibilityWidget />
    </>
  );
}
