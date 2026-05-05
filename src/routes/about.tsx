import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Heart, Wallet, ChefHat, ShoppingBag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import aboutSpread from "@/assets/about-spread.jpg";
import imgChefs from "@/assets/sg-chefs.jpg";
import imgInterior from "@/assets/sg-interior.jpg";
import imgQuality from "@/assets/sg-quality.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Spice Garden Restaurant" },
      {
        name: "description",
        content:
          "Learn about Spice Garden Restaurant — fresh, hygienic and tasty food served with quick, consistent service for working professionals in Tiruvallur.",
      },
      { property: "og:title", content: "About Spice Garden Restaurant" },
      {
        property: "og:description",
        content: "Fresh food, clean kitchens, skilled chefs and consistent taste.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    desc: "Clean and hygienic cooking is at the heart of everything we serve.",
  },
  {
    icon: Zap,
    title: "Quick Service",
    desc: "Fast preparation and timely delivery for busy professionals.",
  },
  {
    icon: Heart,
    title: "Consistent Taste",
    desc: "The same great taste, every single time you order.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Honest pricing that respects your everyday budget.",
  },
  {
    icon: ChefHat,
    title: "Skilled Chefs",
    desc: "Experienced chefs who care deeply about the food they cook.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Serving fresh, hygienic meals with |speed and consistency.|"
        subtitle="Spice Garden Restaurant focuses on delivering fresh and tasty food with a consistent experience for every customer."
      />

      {/* ABOUT */}
      <section className="section-padding">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square rounded-3xl overflow-hidden border border-gold/30 glow-gold group">
              <img
                src={imgChefs}
                alt="Spice Garden Chefs"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-2xl px-6 py-5 shadow-2xl" data-aos="zoom-in" data-aos-delay="400">
              <div className="font-display text-4xl text-gold">1000+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Customers Served
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Over 2 years of <span className="text-gold-gradient">reliable quality</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 2 years in operation, Spice Garden has served 1000+ customers by maintaining clean cooking practices, quick service, and reliable food quality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Customers can choose to dine in, order online, or get food delivered—without compromising on taste or hygiene. Our restaurant focuses on delivering fresh and tasty food with a consistent experience for every customer.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gold/20 p-4 hover:border-gold transition-colors">
                <div className="font-display text-2xl text-gold">2+ Years</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  of Excellence
                </div>
              </div>
              <div className="rounded-xl border border-gold/20 p-4 hover:border-gold transition-colors">
                <div className="font-display text-2xl text-gold">100%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Hygienic Cooking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY CERTIFICATION */}
      <section className="section-padding pt-0">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card/50 rounded-3xl border border-gold/20 overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div className="aspect-square">
              <img
                src={imgQuality}
                alt="Quality Certification"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Our Quality</p>
              <h3 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6 leading-tight">
                Quality You Can Trust
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our certificate of excellence is a testament to our commitment to fresh
                ingredients, hygienic cooking, and the best service. Proudly serving 1000+ happy customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section-padding bg-card/30 border-y border-gold/10">
        <div className="container-x">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Our Core Values</p>
            <h2 className="font-display text-3xl md:text-5xl">
              What makes <span className="text-gold-gradient">Spice Garden</span> different
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Clean Cooking Standards", desc: "Food is prepared in a well-maintained and hygienic environment.", icon: ShieldCheck },
              { title: "Consistent Taste", desc: "Every meal is made to deliver the same flavor customers expect.", icon: Heart },
              { title: "Quick Service", desc: "Orders are handled efficiently to reduce waiting time.", icon: Zap },
              { title: "Customer-Focused", desc: "From ordering to delivery, the experience is designed to be smooth.", icon: Wallet },
            ].map((v, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-2xl border border-gold/20 bg-background/60 p-7 hover:border-gold/60 hover:-translate-y-2 transition-all shadow-lg"
              >
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

      <section className="section-padding relative overflow-hidden">
        <div className="container-x text-center" data-aos="zoom-in">
           <h2 className="font-display text-3xl md:text-5xl text-white mb-8 italic">
            Experience food that's <br />
            <span className="text-gold-gradient">fresh, fast, and consistent.</span>
          </h2>
          <Link
            to="/order"
            className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-10 py-4 rounded-full font-bold text-lg glow-hover transition-transform hover:scale-110 shadow-2xl shadow-gold/20"
          >
            <ShoppingBag className="w-6 h-6" /> Order Now
          </Link>
        </div>
      </section>
    </>
  );
}
