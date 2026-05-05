import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Utensils,
  ShoppingBag,
  Truck,
  PartyPopper,
  Coffee,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import { whatsappUrl } from "@/lib/site";
import imgInterior from "@/assets/sg-interior.jpg";
import imgBiryani from "@/assets/sg-biryani.jpg";
import imgDelivery from "@/assets/sg-delivery.jpg";
import imgParty from "@/assets/sg-party.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Spice Garden Restaurant" },
      {
        name: "description",
        content:
          "Dine-in, online ordering, home delivery, party orders and takeaway — all the ways to enjoy Spice Garden Restaurant in Tiruvallur.",
      },
      { property: "og:title", content: "Services — Spice Garden Restaurant" },
      {
        property: "og:description",
        content: "Five ways to enjoy Spice Garden — order on WhatsApp.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Utensils,
    title: "Dine-In Service",
    desc: "Enjoy fresh meals in a clean and comfortable restaurant environment.",
    img: imgInterior,
  },
  {
    icon: ShoppingBag,
    title: "Online Food Ordering",
    desc: "Order your favorite dishes easily through WhatsApp or online.",
    img: imgBiryani,
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Get hot and fresh food delivered to your doorstep quickly.",
    img: imgDelivery,
  },
  {
    icon: PartyPopper,
    title: "Party Orders",
    desc: "We provide food for small parties, events, and gatherings.",
    img: imgParty,
  },
  {
    icon: Coffee,
    title: "Takeaway Service",
    desc: "Quick takeaway option for customers on the go.",
    img: imgBiryani,
  },
];

const faqs = [
  {
    q: "How can I place an order?",
    a: "The fastest way is to message us on WhatsApp. You can also call us directly to place your order.",
  },
  {
    q: "Do you deliver to my area?",
    a: "We offer home delivery around Tiruvallur. Send us your location on WhatsApp and we'll confirm right away.",
  },
  {
    q: "Can I order food for a party?",
    a: "Yes. We provide food for small parties, events and gatherings. Share the date, headcount and menu preferences with us.",
  },
  { q: "Is takeaway available?", a: "Yes — quick takeaway is available for customers on the go." },
  {
    q: "Is the food prepared hygienically?",
    a: "Hygiene and cleanliness are at the core of our cooking. Our skilled chefs follow strict hygiene practices.",
  },
];

function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Everything you need—|dine in, order,| or get it delivered."
        subtitle="Enjoy a range of services designed for speed, hygiene, and consistent quality."
      />

      {/* SERVICES LIST */}
      <section className="section-padding">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dine-In Service",
                desc: "A clean and comfortable space to enjoy your meals. Perfect for a quick break or relaxed dining experience.",
                icon: Utensils,
                img: imgInterior,
              },
              {
                title: "Online Food Ordering",
                desc: "Order directly through WhatsApp. Simple and fast ordering without complications.",
                icon: MessageCircle,
                img: imgBiryani,
              },
              {
                title: "Home Delivery",
                desc: "Freshly prepared food delivered hot to your location. Ensures convenience without compromising quality.",
                icon: Truck,
                img: imgDelivery,
              },
              {
                title: "Party Orders",
                desc: "Food arrangements for small gatherings and events. Structured service for timely preparation and delivery.",
                icon: PartyPopper,
                img: imgParty,
              },
              {
                title: "Takeaway Service",
                desc: "Quick pickup option for busy schedules. Minimizes wait time while maintaining food quality.",
                icon: Coffee,
                img: imgDelivery,
              },
            ].map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-card/40 border border-gold/10 rounded-[2.5rem] overflow-hidden hover:border-gold/40 transition-all hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6 -mt-16 relative z-10 shadow-2xl">
                    <s.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30 border-y border-gold/10">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Common Questions</p>
            <h2 className="font-display text-3xl md:text-5xl">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="space-y-4">
            {[
              { q: "How can I place an order?", a: "You can place your order directly through WhatsApp using the provided number." },
              { q: "Do you offer home delivery?", a: "Yes, food is delivered fresh and hot to your location." },
              { q: "Is the food prepared hygienically?", a: "Yes, food is prepared in a clean and well-maintained environment." },
              { q: "Can I order for small events or gatherings?", a: "Yes, party orders are available for small groups and events." },
              { q: "Is takeaway available?", a: "Yes, you can quickly pick up your order without waiting long." },
            ].map((faq, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="bg-background/60 border border-gold/10 rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-gold font-bold mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-[10px]">Q</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="container-x text-center" data-aos="zoom-in">
           <h2 className="font-display text-3xl md:text-5xl text-white mb-8 italic">
            Order your meal <span className="text-gold-gradient">in minutes.</span>
          </h2>
          <Link
            to="/order"
            className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-12 py-4 rounded-full font-bold text-xl glow-hover transition-transform hover:scale-110 shadow-2xl shadow-gold/20"
          >
            <ShoppingBag className="w-6 h-6" /> Order Now
          </Link>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
