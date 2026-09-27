import { marqueeItems } from "../content/site";

/**
 * Premium horizontal scrolling marquee. The track is duplicated so the
 * CSS translateX(-50%) loop is seamless. Pauses on reduced motion via CSS.
 */
export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div
      className="overflow-hidden border-y border-brass/30 bg-roasted py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif text-lg italic text-brass-light sm:text-xl">
              {item}
            </span>
            <span className="mx-6 text-brass/60">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
