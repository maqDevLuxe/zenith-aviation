import { motion } from "framer-motion";
import { Shield, Lock, Eye, Fingerprint } from "lucide-react";

const protocols = [
  { icon: Shield, title: "Military-Grade Encryption", desc: "All communications encrypted end-to-end with AES-256." },
  { icon: Lock, title: "Non-Disclosure Guaranteed", desc: "Every crew member signs comprehensive NDAs." },
  { icon: Eye, title: "Anonymous Booking", desc: "Fly under alias with zero public flight records." },
  { icon: Fingerprint, title: "Biometric Access", desc: "Fingerprint and retinal scan boarding protocols." },
];

const SecuritySection = () => {
  return (
    <section id="safety" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Your Privacy Matters</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">ABSOLUTE DISCRETION</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {protocols.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon size={24} className="text-primary" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground mb-2">{p.title}</h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
