import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Clock, Send } from "lucide-react";
import { useState } from "react";
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
  const [form, setForm] = useState({ name: "", phone: "", service: "Dine-In Service", date: "", people: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Spice Garden! I'd like to place an enquiry.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}${form.date ? `\nDate: ${form.date}` : ""}${form.people ? `\nPeople: ${form.people}` : ""}${form.message ? `\n\nMessage: ${form.message}` : ""}`;
    window.open(whatsappUrl(msg), "_blank");
  };

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

        {/* ENQUIRY FORM */}
        <div className="container-x mt-10">
          <div className="rounded-3xl border border-gold/30 bg-card/70 p-7 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <p className="text-gold uppercase tracking-[0.4em] text-xs mb-3">Send Enquiry</p>
                <h3 className="font-display text-3xl md:text-4xl mb-4">
                  Tell us what you'd <span className="text-gold-gradient">like to order</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fill the form and we'll receive your enquiry instantly on WhatsApp.
                  Our team responds within minutes to confirm your order, delivery time
                  or party arrangements.
                </p>
              </div>

              <form onSubmit={onSubmit} className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Name</label>
                  <input required name="name" value={form.name} onChange={onChange}
                    className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input required type="tel" name="phone" value={form.phone} onChange={onChange}
                    className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                  <select name="service" value={form.service} onChange={onChange}
                    className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors">
                    <option>Dine-In Service</option>
                    <option>Online Food Ordering</option>
                    <option>Home Delivery</option>
                    <option>Party Orders</option>
                    <option>Takeaway Service</option>
                  </select>
                </div>
                <div className="sm:col-span-1 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Date</label>
                    <input type="date" name="date" value={form.date} onChange={onChange}
                      className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-3 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">People</label>
                    <input type="number" min="1" name="people" value={form.people} onChange={onChange}
                      className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-3 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={onChange}
                    placeholder="Tell us what you'd like to order..."
                    className="mt-1.5 w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none" />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <button type="submit"
                    className="inline-flex items-center justify-center gap-2 gold-gradient text-background px-6 py-3 rounded-full text-sm font-semibold glow-hover">
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Submitting opens WhatsApp with your enquiry pre-filled.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}