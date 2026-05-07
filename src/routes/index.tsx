import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Star,
  Utensils,
  ShoppingBag,
  Truck,
  PartyPopper,
  Coffee,
  ArrowRight,
  MapPin,
  Mail,
  Award,
} from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import SectionCTA from "@/components/SectionCTA";
import Testimonials from "@/components/Testimonials";
import imgInterior from "@/assets/sg-interior.jpg";
import imgChefs from "@/assets/sg-chefs.jpg";
import imgBiryani from "@/assets/sg-biryani.jpg";
import imgDelivery from "@/assets/sg-delivery.jpg";
import imgParty from "@/assets/sg-party.jpg";
import imgQuality from "@/assets/sg-quality.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spice Garden Restaurant — Fresh Food, Quick Service in Tiruvallur" },
      {
        name: "description",
        content:
          "Fresh, hygienic and tasty food in Tiruvallur. Dine-in, home delivery, takeaway and party orders. Order quickly on WhatsApp.",
      },
      { property: "og:title", content: "Spice Garden Restaurant" },
      { property: "og:description", content: "Fresh, hygienic and tasty food. Order on WhatsApp." },
    ],
  }),
  component: HomePage,
});

function Counter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgInterior}
            alt="Spice Garden Interior"
            className="w-full h-full object-cover animate-bg-zoom"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-display text-4xl md:text-7xl text-white mb-8 max-w-5xl mx-auto leading-tight"
          >
            Fresh, hygienic meals for <br />
            <span className="text-gold-gradient text-glow-gold">working professionals.</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Enjoy consistent taste, quick service, and a clean dining experience—whether you dine in
            or order on the go.
          </p>
          <div data-aos="zoom-in" data-aos-delay="600">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-12 py-4 rounded-full font-bold text-lg glow-hover transition-transform hover:scale-110"
            >
              <ShoppingBag className="w-6 h-6" /> Order Now
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-10 bg-gradient-to-b from-gold to-transparent rounded-full" />
        </div>
      </section>

      {/* 2. TRUST / MISSION SECTION */}
      <section className="section-padding bg-[#0d0d0d] overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              <img
                src={imgChefs}
                alt="Our Chefs"
                className="relative z-10 rounded-[2rem] shadow-2xl"
              />
              <div
                className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-2xl px-8 py-6 z-20 shadow-2xl"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="font-display text-5xl text-gold mb-1">1000+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  Customers Served
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Our Foundation</p>
              <h2 className="font-display text-4xl md:text-6xl text-white mb-8 leading-tight italic">
                Built on <span className="text-gold-gradient">Excellence</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Over 1000+ customers served with fresh, hygienic food. Customer experiences reflect
                what we focus on—fresh food, timely delivery, and a smooth ordering experience.
              </p>
              <div className="grid gap-4">
                {[
                  "Clean and well-maintained kitchen practices",
                  "Consistent taste across every order",
                  "Quick and reliable service",
                  "Skilled chefs with experience",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90 group">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold group-hover:text-background transition-colors" />
                    </div>
                    <span className="font-medium text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-x">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-6xl text-white italic">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: "Dine-In Service",
                desc: "Enjoy your meals in a clean and comfortable setting. Designed for a relaxed break from your workday with consistent food quality.",
                img: imgInterior,
              },
              {
                icon: MessageCircle,
                title: "Online Food Ordering",
                desc: "Order your meals easily through WhatsApp. Quick ordering process that saves time during busy schedules.",
                img: imgBiryani,
              },
              {
                icon: Truck,
                title: "Home Delivery",
                desc: "Get hot and fresh food delivered to your doorstep. Reliable delivery ensures your food arrives on time and ready to eat.",
                img: imgDelivery,
              },
              {
                icon: PartyPopper,
                title: "Party Orders",
                desc: "Food prepared for small gatherings and events. Organized service that handles your group food needs without hassle.",
                img: imgParty,
              },
              {
                icon: Coffee,
                title: "Takeaway Service",
                desc: "Pick up your food quickly without waiting. Ideal for professionals who need fast and convenient meal options.",
                img: imgDelivery,
              },
            ].map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-[#151515] rounded-[2rem] overflow-hidden border border-gold/5 hover:border-gold/30 transition-all hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-6 -mt-14 relative z-10 shadow-2xl">
                    <s.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="section-padding bg-[#0d0d0d] border-y border-gold/10">
        <div className="container-x">
          <div className="text-center mb-20" data-aos="fade-up">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">How It Works</p>
            <h2 className="font-display text-4xl md:text-6xl text-white italic">
              Our <span className="text-gold-gradient">Process</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent z-0" />
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Understand your order requirements—whether dine-in, takeaway, or delivery.",
              },
              {
                step: "2",
                title: "Strategy",
                desc: "Plan preparation based on your order type to ensure speed and consistency.",
              },
              {
                step: "3",
                title: "Execution",
                desc: "Food is prepared fresh with hygiene and taste as priorities.",
              },
              {
                step: "4",
                title: "Delivery / Service",
                desc: "Served quickly at the restaurant or delivered hot to your location.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative z-10 text-center"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <div className="w-20 h-20 rounded-full bg-background border-4 border-gold/30 flex items-center justify-center mx-auto mb-8 font-display text-3xl text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS (ANIMATED NUMBERS) */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--gold)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>
        <div className="container-x relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 1000, label: "Happy Customers", suffix: "+" },
              { icon: Award, value: 15, label: "Awards Won", suffix: "+" },
              { icon: Utensils, value: 50, label: "Daily Dishes", suffix: "+" },
              { icon: Clock, value: 24, label: "Service Hours", suffix: "/7" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:bg-gold/20 transition-all">
                  <stat.icon className="w-10 h-10 text-gold" />
                </div>
                <div className="text-4xl md:text-6xl font-display text-gold mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section data-aos="fade-up" className="py-12 bg-[#0d0d0d]">
        <Testimonials />
      </section>

      {/* 7. CONTACT / MAP */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-aos="fade-right">
              <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Find Us</p>
              <h2 className="font-display text-4xl md:text-6xl text-white italic mb-10">
                Get In <span className="text-gold-gradient">Touch</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Our Location", value: SITE.address },
                  { icon: Phone, title: "Phone Number", value: SITE.phone },
                  { icon: Mail, title: "Email Address", value: SITE.email },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <item.icon className="w-7 h-7 text-gold group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  to="/order"
                  className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-10 py-4 rounded-full font-bold animate-pulse-gold hover:animate-none"
                >
                  <MessageCircle className="w-6 h-6" /> Order Now
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="h-[500px] rounded-[3rem] overflow-hidden border border-gold/20 shadow-2xl relative"
            >
              <iframe
                title="Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full grayscale invert opacity-80"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="section-padding bg-[#0d0d0d] relative overflow-hidden">
        <div className="container-x text-center" data-aos="zoom-in">
          <h2 className="font-display text-4xl md:text-7xl text-white mb-8 italic">
            Skip the wait. <br />
            <span className="text-gold-gradient">Get your food fresh and fast.</span>
          </h2>
          <Link
            to="/order"
            className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-12 py-5 rounded-full font-bold text-xl glow-hover transition-transform hover:scale-110 shadow-2xl shadow-gold/20"
          >
            <ShoppingBag className="w-6 h-6" /> Order Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
