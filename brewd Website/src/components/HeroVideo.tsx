import { useRef, useEffect } from "react";

/**
 * Hero video component: the brand video fills its container completely.
 * Adds a subtle brass ring and gradient vignette for depth.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay blocked; video will still show first frame
    });
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* The video fills the container */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="South Indian brass filter coffee being brewed"
      />

      {/* Inner brass ring */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-brass/25" />

      {/* Subtle vignette top and bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-coffee-brown/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-coffee-brown/30 to-transparent" />
    </div>
  );
}
