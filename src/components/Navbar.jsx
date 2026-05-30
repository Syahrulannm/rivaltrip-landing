import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/trips", label: "Trips" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/60 backdrop-blur-xl border-white/20 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="RivalTrip Logo" className="w-9 h-9 object-contain" />

          <span className="font-heading text-xl font-semibold text-teal-dark tracking-tight">
            Rival<span className="text-primary">Trip</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors hover:text-primary ${pathname === l.to ? "text-primary" : "text-teal-dark/70"}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/book-now" className="bg-[#f97316] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#f97316]/90 transition-colors">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-teal-dark">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden ${scrolled ? "bg-white/60 backdrop-blur-xl border-white/20 shadow-sm" : "bg-white/60 backdrop-blur-xl border-white/20 shadow-sm"}`} animate-fade-up>
          <div className="px-5 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block text-sm font-medium py-2 ${pathname === l.to ? "text-primary" : "text-teal-dark/70"}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/book-now" onClick={() => setOpen(false)} className="block bg-[#f97316] hover:bg-[#f97316]/90 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
