import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    date: "Mar 2026",
    title: "The Rise of Sustainable Aviation Fuel in Private Jets",
    tag: "Sustainability",
  },
  {
    date: "Feb 2026",
    title: "Why CEOs Are Choosing Supersonic Business Travel",
    tag: "Innovation",
  },
  {
    date: "Jan 2026",
    title: "Top 10 Private Jet Destinations for 2026",
    tag: "Lifestyle",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-carbon-light border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Stay Informed</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">AVIATION INSIGHTS</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground tracking-wider">{a.date}</span>
              <span className="text-xs tracking-[0.15em] uppercase bg-primary/10 text-primary px-2 py-1 rounded-sm font-display">
                {a.tag}
              </span>
            </div>
            <h3 className="font-display text-sm tracking-wider text-foreground leading-relaxed mb-6">{a.title}</h3>
            <div className="flex items-center gap-2 text-primary text-xs tracking-wider font-display group-hover:gap-3 transition-all duration-300">
              Read More <ArrowUpRight size={14} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
