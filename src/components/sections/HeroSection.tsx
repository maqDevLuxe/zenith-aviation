import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroJet from "@/assets/hero-jet.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={heroJet}
          alt="Private jet above the clouds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-silver mb-6"
        >
          Private Aviation Redefined
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-wider leading-tight"
        >
          <span className="text-gradient-silver">YOUR SKY.</span>
          <br />
          <span className="text-gradient-blue">YOUR RULES.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-muted-foreground text-base md:text-lg max-w-xl font-body"
        >
          Bespoke charter flights to any destination on earth. Absolute privacy. Unmatched luxury. Zero compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <Button variant="hero" size="lg">
            Book a Flight
          </Button>
          <Button variant="metallic" size="lg">
            Explore Fleet
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-silver/50" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
