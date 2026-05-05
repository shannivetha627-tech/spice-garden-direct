import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
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

const SERVICES = ["Dine-In Service", "Online Food Ordering", "Home Delivery", "Party Orders", "Takeaway Service"] as const;

const contactSchema = z.object({
  name: z.string().trim()
    .min(2, { message: "Please enter your name (at least 2 characters)" })
    .max(60, { message: "Name must be under 60 characters" })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: "Name can only contain letters, spaces and . ' -" }),
  phone: z.string().trim()
    .regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile number" }),
  service: z.enum(SERVICES, { message: "Please select a valid service" }),
  date: z.string().refine((v) => v === "" || !isNaN(Date.parse(v)), { message: "Invalid date" })
    .refine((v) => v === "" || new Date(v) >= new Date(new Date().toDateString()), { message: "Date can't be in the past" }),
  people: z.string().refine((v) => v === "" || (/^\d+$/.test(v) && +v >= 1 && +v <= 500), { message: "People must be between 1 and 500" }),
  message: z.string().trim().max(500, { message: "Message must be under 500 characters" }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Dine-In Service", date: "", people: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.name as keyof z.infer<typeof contactSchema>;
    const next = { ...form, [field]: e.target.value };
    const result = contactSchema.safeParse(next);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      if (!result.success) {
        const issue = result.error.issues.find((i) => i.path[0] === field);
        if (issue) copy[field] = issue.message;
      }
      return copy;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }
    setErrors({});
    const data = result.data;
    const msg = `Hi Spice Garden! I'd like to place an enquiry.

Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}${data.date ? `\nDate: ${data.date}` : ""}${data.people ? `\nPeople: ${data.people}` : ""}${data.message ? `\n\nMessage: ${data.message}` : ""}`;
    toast.success("Opening WhatsApp with your enquiry…");
    const a = document.createElement("a");
    a.href = whatsappUrl(msg);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const inputCls = (field: keyof FormErrors, base = "px-4") =>
    `mt-1.5 w-full bg-background border rounded-xl ${base} py-3 text-sm focus:outline-none transition-colors ${
      errors[field] ? "border-destructive focus:border-destructive" : "border-gold/20 focus:border-gold"
    }`;

  const ErrorText = ({ field }: { field: keyof FormErrors }) =>
    errors[field] ? <p className="mt-1.5 text-xs text-destructive">{errors[field]}</p> : null;

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

              <form onSubmit={onSubmit} noValidate className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Name</label>
                  <input name="name" value={form.name} onChange={onChange} onBlur={onBlur} maxLength={60}
                    aria-invalid={!!errors.name} className={inputCls("name")} />
                  <ErrorText field="name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input type="tel" inputMode="numeric" name="phone" value={form.phone} onChange={onChange} onBlur={onBlur}
                    maxLength={10} placeholder="10-digit mobile"
                    aria-invalid={!!errors.phone} className={inputCls("phone")} />
                  <ErrorText field="phone" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                  <select name="service" value={form.service} onChange={onChange} onBlur={onBlur}
                    aria-invalid={!!errors.service} className={inputCls("service")}>
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <ErrorText field="service" />
                </div>
                <div className="sm:col-span-1 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Date</label>
                    <input type="date" name="date" value={form.date} onChange={onChange} onBlur={onBlur}
                      min={new Date().toISOString().split("T")[0]}
                      aria-invalid={!!errors.date} className={inputCls("date", "px-3")} />
                    <ErrorText field="date" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">People</label>
                    <input type="number" min={1} max={500} name="people" value={form.people} onChange={onChange} onBlur={onBlur}
                      aria-invalid={!!errors.people} className={inputCls("people", "px-3")} />
                    <ErrorText field="people" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={onChange} onBlur={onBlur}
                    maxLength={500} placeholder="Tell us what you'd like to order..."
                    aria-invalid={!!errors.message} className={`${inputCls("message")} resize-none`} />
                  <div className="flex justify-between items-center mt-1.5">
                    <ErrorText field="message" />
                    <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground">{form.message.length}/500</span>
                  </div>
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