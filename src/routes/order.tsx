import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, MessageCircle, Send, Plus, Minus, Star, Clock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import { SITE, whatsappUrl } from "@/lib/site";
import imgBiryani from "@/assets/sg-biryani.jpg";
import imgInterior from "@/assets/sg-interior.jpg";
import imgParty from "@/assets/sg-party.jpg";
import imgChefs from "@/assets/sg-chefs.jpg";
import imgPaneer from "@/assets/sg-paneer.png";
import imgVegBiryani from "@/assets/sg-vegbiryani.png";
import imgMushroom from "@/assets/sg-mushroom.png";
import imgGobi from "@/assets/sg-gobi.png";
import imgDal from "@/assets/sg-dal.png";
import imgChicken65 from "@/assets/sg-chicken65.jpg";
import imgFishFry from "@/assets/sg-fishfry.jpg";
import imgMuttonChukkaV4 from "@/assets/sg-muttonchukka-v4.jpg";
import imgQr from "@/assets/payment-qr.png";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Spice Garden Restaurant" },
      {
        name: "description",
        content: "Order your favorite fresh, hygienic and tasty food from Spice Garden. Quick delivery and takeaway in Tiruvallur.",
      },
    ],
  }),
  component: OrderPage,
});

const MENU_ITEMS = [
  // Veg
  { id: 4, name: "Paneer Butter Masala", price: "₹180", desc: "Creamy tomato-based gravy with soft cottage cheese cubes.", img: imgPaneer, category: "Curries", type: "veg" },
  { id: 7, name: "Veg Biryani", price: "₹150", desc: "Aromatic basmati rice cooked with fresh mixed vegetables.", img: imgVegBiryani, category: "Biryani", type: "veg" },
  { id: 8, name: "Mushroom Masala", price: "₹160", desc: "Spicy and tangy mushroom curry prepared in home style.", img: imgMushroom, category: "Curries", type: "veg" },
  { id: 9, name: "Gobi 65", price: "₹130", desc: "Crispy cauliflower florets tossed in special spices.", img: imgGobi, category: "Starters", type: "veg" },
  { id: 10, name: "Dal Makhani", price: "₹140", desc: "Slow-cooked black lentils with cream and butter.", img: imgDal, category: "Curries", type: "veg" },

  // Non-Veg
  { id: 1, name: "Special Chicken Biryani", price: "₹220", desc: "Our signature biryani cooked with premium basmati rice and secret spices.", img: imgBiryani, category: "Biryani", type: "non-veg" },
  { id: 2, name: "Hyderabadi Mutton Biryani", price: "₹340", desc: "Authentic dum biryani with tender mutton pieces and aromatic long-grain rice.", img: imgBiryani, category: "Biryani", type: "non-veg" },
  { id: 3, name: "Tandoori Chicken (Full)", price: "₹450", desc: "Classic clay-oven roasted chicken marinated in yogurt and traditional spices.", img: imgChefs, category: "Tandoor", type: "non-veg" },
  { id: 5, name: "Family Platter", price: "₹850", desc: "A massive spread featuring biryani, starters, and desserts for the whole family.", img: imgParty, category: "Combos", type: "non-veg" },
  { id: 6, name: "Chicken 65 (Boneless)", price: "₹160", desc: "Crispy, spicy deep-fried chicken bites — a local favorite.", img: imgChicken65, category: "Starters", type: "non-veg" },
  { id: 11, name: "Fish Fry", price: "₹200", desc: "Fresh fish marinated in coastal spices and shallow fried.", img: imgFishFry, category: "Seafood", type: "non-veg" },
  { id: 12, name: "Mutton Chukka", price: "₹280", desc: "Dry roasted mutton with pepper and curry leaves.", img: imgMuttonChukkaV4, category: "Starters", type: "non-veg" },
];

function OrderPage() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("GPay / UPI");
  const [filterType, setFilterType] = useState<"all" | "veg" | "non-veg">("all");

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) return prev.filter((i) => i.id !== id);
        return prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i));
      }
      if (delta > 0) return [...prev, { id, quantity: 1 }];
      return prev;
    });
  };

  const getQty = (id: number) => cart.find((i) => i.id === id)?.quantity || 0;

  const onPlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty! Add some delicious food first.");
      return;
    }

    const orderLines = cart.map((c) => {
      const item = MENU_ITEMS.find((m) => m.id === c.id);
      return `${item?.name} x ${c.quantity}`;
    });

    const msg = `Hi Spice Garden! I'd like to place an order:

${orderLines.join("\n")}

Total Items: ${cart.reduce((acc, curr) => acc + curr.quantity, 0)}
Payment Method: ${paymentMethod}

Please confirm my order and let me know the estimated time!`;

    toast.success("Opening WhatsApp to complete your order...");
    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Order Online"
        title="Deliciousness delivered to |your doorstep.|"
        subtitle="Select your favorite items below and we'll process your order instantly via WhatsApp."
      />

      <section className="section-padding pt-0">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* MENU GRID */}
            <div className="lg:col-span-2 space-y-12">
              <div className="flex items-center justify-between border-b border-gold/20 pb-4" data-aos="fade-right">
                <h2 className="font-display text-3xl text-white">Chef's Specials</h2>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-gold font-bold">
                  <button onClick={() => setFilterType("all")} className={`transition-opacity hover:opacity-100 ${filterType === "all" ? "opacity-100" : "opacity-40"}`}>All Items</button>
                  <button onClick={() => setFilterType("non-veg")} className={`transition-opacity hover:opacity-100 ${filterType === "non-veg" ? "opacity-100" : "opacity-40"}`}>Non-Veg</button>
                  <button onClick={() => setFilterType("veg")} className={`transition-opacity hover:opacity-100 ${filterType === "veg" ? "opacity-100" : "opacity-40"}`}>Veg</button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {MENU_ITEMS.filter(item => filterType === "all" || item.type === filterType).map((item, i) => (
                  <div 
                    key={item.id} 
                    data-aos="fade-up" 
                    data-aos-delay={(i % 10) * 50}
                    className="group bg-card/40 border border-gold/10 rounded-3xl p-5 hover:border-gold/40 transition-all hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-5">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-gold font-bold text-sm">
                        {item.price}
                      </div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center shrink-0 ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} />
                        </div>
                        <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors leading-tight">{item.name}</h3>
                      </div>
                      <div className="flex text-gold">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 bg-background/60 rounded-xl p-1 border border-gold/5">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gold/10 text-gold transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-white w-4 text-center">{getQty(item.id)}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="w-8 h-8 rounded-lg gold-gradient text-background flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ORDER SUMMARY (SIDEBAR) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6" data-aos="fade-left">
                <div className="bg-card border-2 border-gold/30 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-background" />
                      </div>
                      <h3 className="font-display text-2xl">Your Order</h3>
                    </div>

                    <div className="space-y-6 min-h-[100px] mb-8">
                      {cart.length === 0 ? (
                        <p className="text-muted-foreground text-sm italic text-center py-10 border-2 border-dashed border-gold/10 rounded-2xl">
                          Your cart is waiting for some <br/> spicy goodness...
                        </p>
                      ) : (
                        cart.map((c) => {
                          const item = MENU_ITEMS.find((m) => m.id === c.id);
                          return (
                            <div key={c.id} className="flex justify-between items-center group">
                              <div>
                                <p className="text-white font-bold text-sm">{item?.name}</p>
                                <p className="text-gold text-xs">{item?.price} × {c.quantity}</p>
                              </div>
                              <button 
                                onClick={() => updateQty(c.id, -c.quantity)}
                                className="text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="mt-8 border-t border-gold/10 pt-6">
                      <p className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Select Payment Method</p>
                      <div className="grid grid-cols-1 gap-2">
                        {["GPay / UPI", "Net Banking", "Cash on Delivery"].map((method) => (
                          <button
                            key={method}
                            onClick={() => setPaymentMethod(method)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-sm ${
                              paymentMethod === method
                                ? "border-gold bg-gold/10 text-white"
                                : "border-gold/10 bg-background/40 text-muted-foreground hover:border-gold/30"
                            }`}
                          >
                            <span>{method}</span>
                            {paymentMethod === method && <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {paymentMethod === "Net Banking" && (
                      <div className="mt-6 p-5 rounded-2xl bg-gold/5 border border-gold/20 animate-in fade-in slide-in-from-top-4 duration-500">
                        <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4">Card Details</p>
                        <div className="space-y-3">
                          <input 
                            type="text" 
                            placeholder="Card Number (XXXX XXXX XXXX XXXX)" 
                            className="w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              type="text" 
                              placeholder="MM/YY" 
                              className="w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors"
                            />
                            <input 
                              type="password" 
                              placeholder="CVV" 
                              className="w-full bg-background border border-gold/20 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    )}


                    {paymentMethod === "GPay / UPI" && (
                      <div className="mt-6 p-5 rounded-2xl bg-gold/5 border border-gold/20 animate-in fade-in slide-in-from-top-4 duration-500 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">UPI Payment</p>
                        <div className="inline-flex items-center justify-center p-2 bg-white rounded-2xl mb-3 shadow-xl overflow-hidden group">
                           <img 
                            src={imgQr} 
                            alt="Payment QR Code" 
                            className="w-32 h-32 object-contain group-hover:scale-105 transition-transform"
                           />
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium">UPI ID: <span className="text-gold">spicegarden@okaxis</span></p>
                        <p className="text-[9px] text-muted-foreground/60 mt-1">Scan using GPay, PhonePe or any UPI app</p>
                      </div>
                    )}

                    <div className="border-t border-gold/10 mt-6 pt-6 space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>Estimated Prep: 20-30 mins</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-gold" />
                        <span>100% Hygienic Preparation</span>
                      </div>
                    </div>

                    <button 
                      onClick={onPlaceOrder}
                      className="w-full gold-gradient text-background py-4 rounded-2xl font-bold flex items-center justify-center gap-3 animate-pulse-gold hover:animate-none transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-5 h-5" /> Order via WhatsApp
                    </button>
                  </div>
                </div>

                <div className="bg-gold/5 border border-gold/10 rounded-3xl p-6 text-center">
                  <p className="text-xs text-gold font-bold uppercase tracking-[0.2em] mb-2">Need Help?</p>
                  <p className="text-white/60 text-sm mb-4">Questions about bulk orders or catering?</p>
                  <a href={`tel:${SITE.phone}`} className="text-gold font-bold hover:underline">
                    Call: {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderPage;
