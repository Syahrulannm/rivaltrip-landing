import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content.jsx";
import logoRivalTrip from "../assets/logo-rivaltrip.jpg";
{
  /* NAV */
}
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const WA_LINK = "https://wa.me/6281917125638?text=Halo%20RivalTrip%2C%20saya%20ingin%20tanya%20tentang%20trip!";
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.35s ease",
        padding: "0 20px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #5BADA5, #4A9990)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={logoRivalTrip}
              alt="RivalTrip Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 10,
              }}
            />
          </div>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 18, color: scrolled ? "#1a1a1a" : "white", letterSpacing: "-0.3px" }}>RivalTrip</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => {
            const sectionMap = {
              "Open Trip": "#open-trip",
              "Custom Trip": "#open-trip",
              Galeri: "#galeri",
              "Tentang Kami": "#tentang-kami",
            };
            return (
              <a key={l} href={sectionMap[l]} className="nav-link" style={{ color: scrolled ? "#444" : "rgba(255,255,255,0.85)" }}>
                {l}
              </a>
            );
          })}
          <a href={WA_LINK} className="btn-wa" style={{ padding: "10px 20px", fontSize: 14 }}>
            <MessageCircle size={15} /> Chat Kami
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#1a1a1a" : "white", padding: 4 }} className="mobile-menu-btn">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #eee", padding: "20px", display: "flex", flexDirection: "column", gap: 18 }}>
          {NAV_LINKS.map((l) => {
            const sectionMap = {
              "Open Trip": "#open-trip",
              "Custom Trip": "#open-trip",
              Galeri: "#galeri",
              "Tentang Kami": "#tentang-kami",
            };
            return (
              <a key={l} href={sectionMap[l]} className="nav-link" style={{ color: scrolled ? "#444" : "rgba(255,255,255,0.85)" }}>
                {l}
              </a>
            );
          })}
          <a href={WA_LINK} className="btn-wa" style={{ justifyContent: "center" }}>
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
