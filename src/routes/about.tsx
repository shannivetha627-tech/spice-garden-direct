import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Zap, Heart, Wallet, ChefHat } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import aboutSpread from "@/assets/about-spread.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Spice Garden Restaurant" },
      { name: "description", content: "Learn about Spice Garden Restaurant — fresh, hygienic and tasty food served with quick, consistent service for working professionals in Tiruvallur." },
      { property: "og:title", content: "About Spice Garden Restaurant" },
      { property: "og:description", content: "Fresh food, clean kitchens, skilled chefs and consistent taste." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Hygiene First", desc: "Clean and hygienic cooking is at the heart of everything we serve." },
  { icon: Zap, title: "Quick Service", desc: "Fast preparation and timely delivery for busy professionals." },
  { icon: Heart, title: "Consistent Taste", desc: "The same great taste, every single time you order." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Honest pricing that respects your everyday budget." },
  { icon: ChefHat, title: "Skilled Chefs", desc: "Experienced chefs who care deeply about the food they cook." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A simple promise: |fresh, hygienic, tasty.|"
        subtitle="Spice Garden Restaurant has served 1000+ happy customers with food cooked fresh, served quickly, and priced fairly."
      />

      {/* ABOUT */}
      <section className="section-padding">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-gold/30 glow-gold">
              <img src={aboutSpread} alt="Spice Garden food spread" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-2xl px-6 py-5">
              <div className="font-display text-4xl text-gold">1000+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Customers Served</div>
            </div>
          </div>
          <div>
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              We serve <span className="text-gold-gradient">food made with care</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We serve fresh and tasty food with a variety of dishes for all customers.
              Our restaurant focuses on good taste, hygiene, and quick service.
              Customers can dine in or order food easily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a quick lunch, a comforting dinner, or food for a small
              gathering — Spice Garden is built around what working professionals
              actually need: clean food, on time, every time.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gold/20 p-4">
                <div className="font-display text-2xl text-gold">Skilled</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Experienced Chefs</div>
              </div>
              <div className="rounded-xl border border-gold/20 p-4">
                <div className="font-display text-2xl text-gold">Clean</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hygienic Cooking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section-padding bg-card/30 border-y border-gold/10">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-5xl">What makes <span className="text-gold-gradient">Spice Garden</span> different</h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-gold/20 bg-background/60 p-7 hover:border-gold/60 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-display text-2xl mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}