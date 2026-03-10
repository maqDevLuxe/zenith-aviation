import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 87, suffix: "%", label: "Time Saved vs. Commercial" },
  { value: 15, suffix: " min", label: "Average Boarding Time" },
  { value: 5000, suffix: "+", label: "Destinations Worldwide" },
  { value: 24, suffix: "/7", label: "Concierge Availability" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-6xl font-display text-gradient-blue">
        {count.toLocaleString()}{suffix}
      </p>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <section className="section-padding bg-carbon-light border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Why Private</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">TIME IS THE ULTIMATE LUXURY</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Counter target={m.value} suffix={m.suffix} />
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3 text-center">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
