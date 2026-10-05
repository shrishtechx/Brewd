import type { ReactNode } from "react";
import { navigate } from "../hooks/useHashRoute";

type PageShellProps = {
  kicker?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

/**
 * Shared layout for the standalone sub-pages (Products, Our Story, How To
 * Brew, Order, Order Status). Gives them a consistent header, spacing, and a
 * back-to-home link. Sits below the fixed Navbar via top padding.
 */
export default function PageShell({ kicker, title, intro, children }: PageShellProps) {
  return (
    <main className="min-h-screen pt-28 pb-24 sm:pt-32">
      <div className="container-x">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 font-body text-sm font-medium text-coffee-mid transition-colors hover:text-terracotta"
        >
          <span aria-hidden="true">&#8592;</span> Back to home
        </button>

        <header className="max-w-3xl">
          {kicker && <p className="kicker mb-4">{kicker}</p>}
          <h1 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 font-body text-lg leading-relaxed text-coffee-mid">
              {intro}
            </p>
          )}
        </header>

        {children}
      </div>
    </main>
  );
}
