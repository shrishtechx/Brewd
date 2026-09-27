import { motion } from "framer-motion";
import WordCycler from "./WordCycler";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-24"
      aria-label="Brew'd hero"
    >
      <div className="container-x grid h-full min-h-[calc(100vh-5rem)] items-center gap-8 pb-12 sm:gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="kicker mb-5">Real Kaapi · Now in the US</p>
          <h1 className="heading-serif text-3xl text-coffee-brown sm:text-4xl lg:text-5xl">
            South India has been{" "}
            <WordCycler
              words={["perfecting", "brewing", "refining"]}
              className="text-terracotta"
            />{" "}
            this cup for over a century. Your morning is about to find out why.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-coffee-mid">
            Bold, aromatic filter coffee brewed with the unique combination of
            Arabica, Robusta, and chicory, tailored to hit the right spot,
            always. A combination no other coffee tradition on earth has ever
            thought to replicate.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#preorder" className="btn-primary">
              Shop Now
            </a>
            <a href="#blend" className="btn-ghost">
              What goes into it
            </a>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 h-[48vh] min-h-[320px] w-full sm:h-[58vh] lg:order-2 lg:h-[72vh]"
        >
          <HeroVideo />
        </motion.div>
      </div>
    </header>
  );
}
