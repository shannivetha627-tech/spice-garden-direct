import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-background/85 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-24">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Spice Garden Restaurant"
            width={56}
            height={56}
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="font-display text-lg md:text-xl tracking-wide">
            Spice <span className="text-gold">Garden</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative text-sm font-medium text-foreground/80 hover:text-gold transition-colors py-2 px-1 uppercase tracking-widest"
                activeProps={{
                  className: "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:rounded-full",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/order"
            className="inline-flex items-center gap-2 gold-gradient text-background px-6 py-2.5 rounded-full text-sm font-bold glow-hover"
          >
            <MessageCircle className="w-4 h-4" /> Order Now
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-gold p-2"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-background/95 backdrop-blur-xl">
          <ul className="container-x py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block font-display text-2xl"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/order"
              className="mt-2 inline-flex justify-center items-center gap-2 gold-gradient text-background px-5 py-3 rounded-full font-semibold"
            >
              <MessageCircle className="w-4 h-4" /> Order Now
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
