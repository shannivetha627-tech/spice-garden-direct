import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Rahul S", role: "IT Professional, Chennai", text: "The food was fresh and tasted really good. Service was quick, and the overall experience was smooth and enjoyable." },
  { name: "Meena K", role: "Homemaker, Chennai", text: "The restaurant is clean and well-maintained. I ordered food for home delivery and it arrived on time and was still hot." },
  { name: "Arun V", role: "Business Owner, Chennai", text: "Good quantity for the price and consistent taste. It's a reliable place to order food regularly." },
  { name: "Kavya R", role: "College Student, Chennai", text: "Ordering was very easy and the food quality was nice. Perfect place for quick meals with friends." },
  { name: "Suresh M", role: "Manager, Chennai", text: "I ordered for a small gathering and the service was well organized. Food quality and delivery timing were both good." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % n), 5500);
    return () => clearInterval(id);
  }, [n]);

  const prev = () => setI((p) => (p - 1 + n) % n);
  const next = () => setI((p) => (p + 1) % n);

  return (
    <section className="section-padding">
      <div className="container-x max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl">
            What our <span className="text-gold-gradient">guests say</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-card/60">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-gold/15" />
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="min-w-full px-6 md:px-16 py-14 md:py-20 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/90 max-w-3xl mx-auto">
                  "{t.text}"
                </p>
                <div className="mt-8">
                  <div className="font-display text-lg text-gold">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/40 bg-background/70 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/40 bg-background/70 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}