import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hangarImg from "@/assets/hangar.jpg";

const HangarSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={hangarImg} alt="Private jet hangar" className="w-full h-[120%] object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display text-gradient-silver text-center tracking-wider"
        >
          WHERE PRECISION<br />MEETS POWER
        </motion.h2>
      </div>
    </section>
  );
};

export default HangarSection;
