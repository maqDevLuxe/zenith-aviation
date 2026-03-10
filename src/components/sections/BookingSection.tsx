import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Calendar, MapPin, Users } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Effortless Booking</p>
        <h2 className="text-3xl md:text-5xl font-display text-gradient-silver">SEAMLESS FROM<br />TAKEOFF TO LANDING</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card rounded-lg p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
              <MapPin size={14} /> Departure
            </label>
            <div className="bg-secondary rounded-lg px-4 py-3 text-foreground font-body">
              New York — TEB
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
              <MapPin size={14} /> Arrival
            </label>
            <div className="bg-secondary rounded-lg px-4 py-3 text-foreground font-body">
              London — LTN
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
              <Calendar size={14} /> Date
            </label>
            <div className="bg-secondary rounded-lg px-4 py-3 text-foreground font-body">
              March 15, 2026
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
              <Users size={14} /> Passengers
            </label>
            <div className="bg-secondary rounded-lg px-4 py-3 text-foreground font-body">
              4 Guests
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg mb-8">
          <div className="flex items-center gap-3">
            <Plane size={20} className="text-primary" />
            <div>
              <p className="text-sm font-display tracking-wider text-foreground">GLOBAL 7500</p>
              <p className="text-xs text-muted-foreground">Recommended aircraft</p>
            </div>
          </div>
          <p className="font-display text-primary text-lg">Est. 7h 20m</p>
        </div>

        <Button variant="hero" size="lg" className="w-full">
          Get Instant Quote
        </Button>
      </motion.div>
    </section>
  );
};

export default BookingSection;
