export const SITE = {
  name: "Spice Garden Restaurant",
  phone: "6383772760",
  whatsapp: "6383772760",
  email: "shannivetha627@gmail.com",
  address: "No 32, Nandavanam Street, Poonga Nagar, Tiruvallur",
  linkedin: "https://www.linkedin.com/in/nivetha-shanmugam-267027382",
  whatsappMessage: "Hi! I'd like to enquire about Spice Garden Restaurant.",
};

export const whatsappUrl = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/91${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;