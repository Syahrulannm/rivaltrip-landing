import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import logoImage from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[hsl(180,30%,10%)] text-[hsl(40,15%,80%)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoImage} alt="RivalTrip" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-heading text-xl font-medium text-white">RivalTrip</span>
            </div>
            <p className="font-heading italic text-[hsl(40,15%,65%)] text-lg leading-relaxed">"Journey Together, Stories Forever."</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Menu</h4>
            <div className="space-y-2.5">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/trips", "Trips"],
                ["/contact", "Contact"],
                ["/book-now", "Book Now"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/6281917125638" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} /> WhatsApp
              </a>
              <a href="https://instagram.com/rivaltrip.id" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={15} /> @rivaltrip.id
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} /> Tegal, Jawa Tengah
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-[hsl(40,15%,45%)]">© {new Date().getFullYear()} RivalTrip. All rights reserved.</div>
      </div>
    </footer>
  );
}
