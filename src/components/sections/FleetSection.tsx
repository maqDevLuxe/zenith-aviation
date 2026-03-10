import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Gauge, Ruler } from "lucide-react";
import jetInterior from "@/assets/jet-interior.jpg";
import heroJet from "@/assets/hero-jet.jpg";

const fleet = [
  {
    name: "CITATION LONGITUDE",
    category: "SUPER MIDSIZE",
    passengers: 9,
    range: "3,500 nm",
    speed: "Mach 0.84",
    image: heroJet,
    desc: "The pinnacle of super-midsize performance with stand-up cabin and intercontinental range.",
  },
  {
    name: "GLOBAL 7500",
    category: "ULTRA LONG RANGE",
    passengers: 19,
    range: "7,700 nm",
    speed: "Mach 0.925",
    image: jetInterior,
    desc: "The world's largest and longest-range purpose-built business jet with four living spaces.",
  },
  {
    name: "GULFSTREAM G700",
    category: "FLAGSHIP",
    passengers: 19,
    range: "7,500 nm",
    speed: "Mach 0.935",
    image: heroJet,
    desc: "Ultra-high-speed, ultra-long-range. The most spacious cabin in the industry.",
  },
];

const FleetSection = () => {
  const [active, setActive] = useState(0);
  const current = fleet[active];

  return (
    <section id="fleet" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Aircraft</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">THE FLEET</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="absolute top-4 left-4 text-xs tracking-[0.3em] uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded-sm font-display">
                {current.category}
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-display text-gradient-silver mb-4">{current.name}</h3>
              <p className="text-muted-foreground font-body mb-8">{current.desc}</p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="glass-card rounded-lg p-4 text-center">
                  <Users size={20} className="mx-auto mb-2 text-primary" />
                  <p className="text-xl font-display text-foreground">{current.passengers}</p>
                  <p className="text-xs text-muted-foreground mt-1">Passengers</p>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <Ruler size={20} className="mx-auto mb-2 text-primary" />
                  <p className="text-xl font-display text-foreground">{current.range}</p>
                  <p className="text-xs text-muted-foreground mt-1">Range</p>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <Gauge size={20} className="mx-auto mb-2 text-primary" />
                  <p className="text-xl font-display text-foreground">{current.speed}</p>
                  <p className="text-xs text-muted-foreground mt-1">Max Speed</p>
                </div>
              </div>

              <Button variant="hero">Request This Aircraft</Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setActive((prev) => (prev === 0 ? fleet.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-silver/50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {fleet.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-12" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((prev) => (prev === fleet.length - 1 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-silver/50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
