import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "J.R.",
    title: "CEO, Global Hedge Fund",
    quote: "ÉliteAir has transformed how I travel. The discretion and attention to detail are unparalleled.",
  },
  {
    initials: "S.M.",
    title: "Founder & Chairman",
    quote: "When time is worth more than money, there is no alternative. ÉliteAir understands that.",
  },
  {
    initials: "A.K.",
    title: "Tech Entrepreneur",
    quote: "From the booking to the landing, every touchpoint is designed for people who demand the best.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-carbon-light border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Trusted by Leaders</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">CLIENT TESTIMONIALS</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.initials}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-lg p-8"
          >
            <Quote size={24} className="text-primary/40 mb-4" />
            <p className="text-sm text-foreground/90 font-body leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-xs text-primary">{t.initials}</span>
              </div>
              <p className="text-xs text-muted-foreground tracking-wider">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
