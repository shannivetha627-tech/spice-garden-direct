import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Sparkles, ShieldCheck, Clock, Users, Star, Utensils, ShoppingBag, Truck, PartyPopper, Coffee, ArrowRight } from "lucide-react";
import heroDish from "@/assets/hero-dish.jpg";
import { SITE, whatsappUrl } from "@/lib/site";
import SectionCTA from "@/components/SectionCTA";
import Testimonials from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spice Garden Restaurant — Fresh Food, Quick Service in Tiruvallur" },
      { name: "description", content: "Fresh, hygienic and tasty food in Tiruvallur. Dine-in, home delivery, takeaway and party orders. Order quickly on WhatsApp." },
      { property: "og:title", content: "Spice Garden Restaurant" },
      { property: "og:description", content: "Fresh, hygienic and tasty food. Order on WhatsApp." },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: Users, value: "1000+", label: "Customers Served" },
  { icon: ShieldCheck, value: "100%", label: "Hygienic Cooking" },
  { icon: Clock, value: "Fast", label: "Quick Service" },
  { icon: Star, value: "Loved", label: "Consistent Taste" },
];

const services = [
  { icon: Utensils, title: "Dine-In Service", desc: "Enjoy fresh meals in a clean and comfortable restaurant environment." },
  { icon: ShoppingBag, title: "Online Food Ordering", desc: "Order your favorite dishes easily through WhatsApp or online." },
  { icon: Truck, title: "Home Delivery", desc: "Get hot and fresh food delivered to your doorstep quickly." },
  { icon: PartyPopper, title: "Party Orders", desc: "We provide food for small parties, events, and gatherings." },
  { icon: Coffee, title: "Takeaway Service", desc: "Quick takeaway option for customers on the go." },
];

const process = [
  { n: "01", title: "Send a Message", desc: "Tap WhatsApp and tell us what you'd like to order." },
  { n: "02", title: "Confirm Your Order", desc: "We confirm the menu, quantity and delivery details." },
  { n: "03", title: "Fresh & Hygienic", desc: "Our skilled chefs prepare your food fresh." },
  { n: "04", title: "Enjoy Your Meal", desc: "Dine-in, takeaway or delivered hot to your door." },
];

function HomePage() {
  return (
    <>
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDish} alt="" width={1024} height={1024} className="w-full h-full object-cover opacity-40 md:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl float-slow" />

        <div className="container-x relative grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="reveal inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-gold">
              <Sparkles className="w-3.5 h-3.5" /> Tiruvallur · Fresh Daily
            </div>
            <h1 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
              A Taste That <br />
              <span className="text-gold-gradient">Feels Like Home.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground max-w-xl">
              Fresh ingredients. Skilled chefs. Quick service. Spice Garden serves
              hygienic, tasty meals — dine-in, delivery, takeaway and parties.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-7 py-3.5 rounded-full font-semibold glow-hover">
                <MessageCircle className="w-5 h-5" /> Order Now
              </a>
              <a href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-gold/40 px-7 py-3.5 rounded-full font-semibold hover:bg-gold/10 transition-colors">
                <Phone className="w-5 h-5 text-gold" /> Call Us
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-gold/30 float-slow glow-gold">
              <img src={heroDish} alt="Featured dish" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-gold/30 rounded-2xl p-4 backdrop-blur-md">
              <div className="text-3xl font-display text-gold">1000+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-gold/10 bg-card/30">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Why People Trust Us</p>
            <h2 className="font-display text-3xl md:text-5xl">Built on <span className="text-gold-gradient">taste & trust</span></h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trust.map((t, i) => (
              <div key={i} className="group rounded-2xl border border-gold/20 bg-background/40 p-6 text-center hover:border-gold/60 transition-colors">
                <div className="mx-auto w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <t.icon className="w-6 h-6 text-background" />
                </div>
                <div className="font-display text-2xl md:text-3xl text-gold">{t.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">What We Offer</p>
              <h2 className="font-display text-3xl md:text-5xl max-w-2xl">Five ways to enjoy <span className="text-gold-gradient">Spice Garden</span></h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="group relative rounded-2xl border border-gold/20 bg-card p-7 overflow-hidden hover:border-gold/60 transition-all">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors" />
                <s.icon className="w-9 h-9 text-gold mb-5" />
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30 border-y border-gold/10">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">How It Works</p>
            <h2 className="font-display text-3xl md:text-5xl">From craving to <span className="text-gold-gradient">your table</span></h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div key={i} className="relative rounded-2xl border border-gold/20 bg-background/60 p-6 hover:-translate-y-1 transition-transform">
                <div className="font-display text-5xl text-gold/30 mb-3">{p.n}</div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}