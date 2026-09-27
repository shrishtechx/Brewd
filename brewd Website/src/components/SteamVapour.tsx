import { Suspense, lazy, useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

// Lazy-load lottie-react (and its lottie-web dependency) so it never sits in
// the main bundle. This keeps the preloader and initial page load light.
const Lottie = lazy(() => import("lottie-react"));

type SteamVapourProps = {
  className?: string;
  /** Playback speed multiplier. */
  speed?: number;
};

/**
 * Rising steam / vapour animation (Lottie), used anywhere we previously
 * showed simple animated bar-lines as a steam placeholder: the preloader,
 * product cards, and the founder portrait placeholder.
 * Renders nothing when reduced-motion is on.
 */
export default function SteamVapour({ className = "", speed = 1 }: SteamVapourProps) {
  const reduced = usePrefersReducedMotion();
  const [data, setData] = useState<object | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    fetch("/vapours.json")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        // Silently ignore; steam is decorative.
      });
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  useEffect(() => {
    lottieRef.current?.setSpeed(speed);
  }, [speed, data]);

  if (reduced || !data) return null;

  return (
    <div className={className} aria-hidden="true">
      <Suspense fallback={null}>
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
