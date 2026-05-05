import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Spice Garden Restaurant" },
      { name: "description", content: "Contact Spice Garden Restaurant in Tiruvallur. Call, WhatsApp or email us to place an order or enquire about party catering." },
      { property: "og:title", content: "Contact Spice Garden Restaurant" },
      { property: "og:description", content: "Call, WhatsApp or email us to place an order." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsapp, href: whatsappUrl(), cta: "Chat now" },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}`, cta: "Call now" },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, cta: "Send email" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's get your |order started.|"
        subtitle="Reach us on WhatsApp for the fastest response — we'll confirm your order in minutes."
      />

      <section className="section-padding pt-0">
        <div className="container-x grid lg:grid-cols-3 gap-5 mb-10">
          {channels.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="group rounded-2xl border border-gold/20 bg-card p-7 hover:border-gold/60 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <c.icon className="w-6 h-6 text-background" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
              <p className="font-display text-2xl mt-1 break-all">{c.value}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-semibold">{c.cta} →</span>
            </a>
          ))}
        </div>

        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gold/20 bg-card p-7">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-gold" />
              <h3 className="font-display text-2xl">Visit Us</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{SITE.address}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
              target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold/10 transition-colors">
              Open in Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-card p-7">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gold" />
              <h3 className="font-display text-2xl">Quick Enquiry</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Tap below to send us a WhatsApp message. We typically reply within minutes
              to confirm your order or answer any questions.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 gold-gradient text-background px-5 py-2.5 rounded-full text-sm font-semibold glow-hover">
                <MessageCircle className="w-4 h-4" /> Order on WhatsApp
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold/10 transition-colors">
                <Linkedin className="w-4 h-4 text-gold" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}