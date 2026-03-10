import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const routes = [
  { from: "New York", to: "London", time: "7h 15m", code: "TEB → LTN" },
  { from: "Dubai", to: "Singapore", time: "7h 30m", code: "DWC → SIN" },
  { from: "Los Angeles", to: "Tokyo", time: "11h 45m", code: "VNY → NRT" },
  { from: "Paris", to: "Miami", time: "9h 30m", code: "LBG → OPF" },
  { from: "Geneva", to: "Maldives", time: "9h 10m", code: "GVA → MLE" },
  { from: "Hong Kong", to: "Sydney", time: "9h 05m", code: "HKG → SYD" },
];

const RoutesSection = () => {
  return (
    <section id="routes" className="section-padding bg-carbon-light border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Worldwide Coverage</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">POPULAR ROUTES</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid gap-3">
        {routes.map((r, i) => (
          <motion.div
            key={r.code}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-lg px-6 py-5 flex items-center justify-between hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <span className="font-display text-sm tracking-wider text-foreground">{r.from}</span>
              <ArrowRight size={16} className="text-primary" />
              <span className="font-display text-sm tracking-wider text-foreground">{r.to}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground tracking-wider hidden sm:block">{r.code}</span>
              <span className="font-display text-sm text-primary">{r.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoutesSection;
