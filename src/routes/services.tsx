import { createFileRoute } from "@tanstack/react-router";
import { Utensils, ShoppingBag, Truck, PartyPopper, Coffee, MessageCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Spice Garden Restaurant" },
      { name: "description", content: "Dine-in, online ordering, home delivery, party orders and takeaway — all the ways to enjoy Spice Garden Restaurant in Tiruvallur." },
      { property: "og:title", content: "Services — Spice Garden Restaurant" },
      { property: "og:description", content: "Five ways to enjoy Spice Garden — order on WhatsApp." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Utensils, title: "Dine-In Service", desc: "Enjoy fresh meals in a clean and comfortable restaurant environment." },
  { icon: ShoppingBag, title: "Online Food Ordering", desc: "Order your favorite dishes easily through WhatsApp or online." },
  { icon: Truck, title: "Home Delivery", desc: "Get hot and fresh food delivered to your doorstep quickly." },
  { icon: PartyPopper, title: "Party Orders", desc: "We provide food for small parties, events, and gatherings." },
  { icon: Coffee, title: "Takeaway Service", desc: "Quick takeaway option for customers on the go." },
];

const faqs = [
  { q: "How can I place an order?", a: "The fastest way is to message us on WhatsApp. You can also call us directly to place your order." },
  { q: "Do you deliver to my area?", a: "We offer home delivery around Tiruvallur. Send us your location on WhatsApp and we'll confirm right away." },
  { q: "Can I order food for a party?", a: "Yes. We provide food for small parties, events and gatherings. Share the date, headcount and menu preferences with us." },
  { q: "Is takeaway available?", a: "Yes — quick takeaway is available for customers on the go." },
  { q: "Is the food prepared hygienically?", a: "Hygiene and cleanliness are at the core of our cooking. Our skilled chefs follow strict hygiene practices." },
];

function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services built for |everyday cravings.|"
        subtitle="From a quick takeaway to a full party order — Spice Garden is built around speed, hygiene and consistent taste."
      />

      {/* SERVICES */}
      <section className="pb-8">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-gold/20 bg-card p-8 overflow-hidden hover:border-gold/60 transition-all">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors" />
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <a href={whatsappUrl(`Hi! I'd like to enquire about ${s.title}.`)} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all">
                    <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl">Quick <span className="text-gold-gradient">answers</span></h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`rounded-2xl border transition-colors ${isOpen ? "border-gold/60 bg-card" : "border-gold/20 bg-card/40"}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    <span className="w-9 h-9 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed -mt-1">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}