import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTAFooter = () => {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Ready to Fly</p>
          <h2 className="text-3xl md:text-6xl font-display text-gradient-silver mb-6">
            REQUEST YOUR<br />PRIVATE FLIGHT
          </h2>
          <p className="text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Our aviation specialists are standing by to design your perfect journey. 
            Available 24/7 for immediate charter requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg">
              Request a Quote
            </Button>
            <Button variant="metallic" size="lg">
              <Phone size={16} /> +1 (888) 555-0199
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-lg tracking-[0.3em] text-foreground mb-4">
              ÉLITE<span className="text-primary">AIR</span>
            </p>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              The world's most exclusive private aviation charter service. Limitless luxury at 45,000 feet.
            </p>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.2em] text-foreground mb-4">SERVICES</p>
            <div className="space-y-2">
              {["Charter Flights", "Jet Card Programs", "Aircraft Management", "Group Charters"].map((s) => (
                <a key={s} href="#" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.2em] text-foreground mb-4">COMPANY</p>
            <div className="space-y-2">
              {["About", "Safety", "Careers", "Press"].map((s) => (
                <a key={s} href="#" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.2em] text-foreground mb-4">CONTACT</p>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone size={12} /> +1 (888) 555-0199
              </p>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail size={12} /> charter@eliteair.com
              </p>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={12} /> Teterboro, NJ 07608
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 ÉliteAir. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
