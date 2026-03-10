import { motion } from "framer-motion";

const partners = [
  "BOMBARDIER", "GULFSTREAM", "DASSAULT", "EMBRAER", "CESSNA", "AIRBUS", "BOEING", "PILATUS"
];

const PartnersSection = () => {
  return (
    <section className="section-padding border-y border-border">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs tracking-[0.4em] uppercase text-muted-foreground mb-12"
      >
        Global Aviation Partners
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partners.map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="font-display text-sm md:text-base tracking-[0.3em] text-muted-foreground/50 hover:text-silver transition-colors duration-300"
          >
            {p}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
