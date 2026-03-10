import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 12847, label: "Flights Completed" },
  { value: 96, label: "Countries Served" },
  { value: 340, label: "Aircraft in Network" },
  { value: 99.7, suffix: "%", label: "On-Time Departure", decimals: 1 },
];

const AnimatedNumber = ({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2500;
    const steps = 80;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Number(current.toFixed(decimals)));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, decimals]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-7xl font-display text-gradient-silver">
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
      </p>
    </div>
  );
};

const FlightsCounterSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Track Record</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-blue">NUMBERS THAT FLY</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <AnimatedNumber target={s.value} decimals={s.decimals} suffix={s.suffix} />
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3 text-center">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlightsCounterSection;
