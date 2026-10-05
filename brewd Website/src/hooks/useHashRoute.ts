import { useEffect, useState } from "react";

/**
 * Minimal hash-based router. We use the hash so the site keeps working as a
 * static deploy with no server rewrites, and in-page anchor links (e.g.
 * "#blend") keep behaving as smooth-scroll targets on the home page.
 *
 * Convention:
 *   - "" or "#" or "#/"            -> home ("/")
 *   - "#/products"                -> "/products"
 *   - "#blend" (no leading slash) -> treated as a home-page anchor, route "/"
 *
 * A route is any hash that starts with "#/". Everything else is considered an
 * in-page anchor and resolves to the home route.
 */
export type Route =
  | "/"
  | "/products"
  | "/our-story"
  | "/how-to-brew"
  | "/order"
  | "/order-status";

const KNOWN_ROUTES: Route[] = [
  "/",
  "/products",
  "/our-story",
  "/how-to-brew",
  "/order",
  "/order-status",
];

function parseHash(): Route {
  const hash = window.location.hash;
  if (!hash.startsWith("#/")) return "/";
  const path = hash.slice(1); // drop leading "#", keep leading "/"
  const match = KNOWN_ROUTES.find((r) => r === path);
  return match ?? "/";
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? "/" : parseHash()
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

/** Navigate to a route and scroll to top. Use for programmatic navigation. */
export function navigate(route: Route) {
  window.location.hash = route === "/" ? "/" : route;
  window.scrollTo(0, 0);
}
