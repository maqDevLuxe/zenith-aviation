import { motion } from "framer-motion";
import cateringImg from "@/assets/catering.jpg";
import { Wine, Utensils, ShieldCheck } from "lucide-react";

const services = [
  { icon: Utensils, title: "Michelin-Star Cuisine", desc: "Curated menus from world-renowned chefs, tailored to your palate." },
  { icon: Wine, title: "Sommelier Selection", desc: "Rare vintages and premium spirits, hand-picked for your journey." },
  { icon: ShieldCheck, title: "24/7 Concierge", desc: "Ground transport, hotel reservations, and personal requests—all handled." },
];

const CateringSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden aspect-square"
        >
          <img src={cateringImg} alt="In-flight fine dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">In-Flight Excellence</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-silver mb-12">VIP CATERING &<br />CONCIERGE</h2>

          <div className="space-y-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-wider text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringSection;
