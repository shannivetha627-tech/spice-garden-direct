import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export default function SectionCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-background to-card p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-highlight/15 blur-3xl" />
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Get a Quote</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Hungry? Let's get your <span className="text-gold-gradient">order started</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Send us a quick message on WhatsApp and we'll take it from there —
            dine-in, delivery, takeaway or party orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 gold-gradient text-background px-7 py-3.5 rounded-full font-semibold glow-hover"
            >
              <MessageCircle className="w-5 h-5" /> Order Now
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex justify-center items-center gap-2 border border-gold/40 text-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-5 h-5 text-gold" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}