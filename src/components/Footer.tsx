import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top,_var(--gold),_transparent_60%)] pointer-events-none" />
      <div className="container-x py-16 grid gap-10 md:grid-cols-4 relative">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Spice Garden Restaurant" width={48} height={48} className="w-12 h-12 rounded-full object-cover border border-gold/40" />
            <span className="font-display text-xl">
              Spice <span className="text-gold">Garden</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Fresh, hygienic and tasty food served quickly. Dine-in, delivery,
            takeaway and party orders — built for working professionals.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 gold-gradient text-background px-5 py-3 rounded-full text-sm font-semibold glow-hover"
          >
            <MessageCircle className="w-4 h-4" /> Order on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="font-display text-gold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="w-4 h-4 text-gold mt-0.5" /> <a href={`tel:${SITE.phone}`} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-gold mt-0.5" /> <a href={`mailto:${SITE.email}`} className="hover:text-gold break-all">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> <span>{SITE.address}</span></li>
            <li className="flex gap-2"><Linkedin className="w-4 h-4 text-gold mt-0.5" /> <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Spice Garden Restaurant. All rights reserved.
      </div>
    </footer>
  );
}