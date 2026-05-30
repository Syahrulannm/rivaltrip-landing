import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Star, ArrowRight, MessageCircle, Camera, Heart, Compass, BookOpen, Church, GraduationCap, Smile, Zap, Shield, ChevronDown, Menu, X, Sunset } from "lucide-react";
import logoRivalTrip from "./assets/logo-rivaltrip.jpg";
import FadeIn from "./components/FadeIn.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/HeroSection.jsx";
import { NAV_LINKS, TRIP_TYPES, GALLERY, WHY_POINTS, TESTIMONIALS } from "./data/content.jsx";
import GallerySection from "./components/GallerySection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ctaImage from "./assets/cta-background.webp";
import { OpenTrip } from "./components/OpenTrip.jsx";
{
  TRIP_TYPES.map((t) => {
    const Icon = t.icon;

    return <Icon size={22} />;
  });
}

export default function RivalTrip() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const WA_LINK = "https://wa.me/6281917125638?text=Halo%20RivalTrip%2C%20saya%20ingin%20tanya%20tentang%20trip!";

  return (
    <div style={{ fontFamily: "'Lora', 'Georgia', serif", background: "#fafaf8", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        .dm { font-family: 'DM Sans', sans-serif; }
        .lora { font-family: 'Lora', serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f0f0ee; }
        ::-webkit-scrollbar-thumb { background: #7EC8C0; border-radius: 4px; }
        .teal { color: #5BADA5; }
        .orange { color: #E8834A; }
        .btn-wa {
          background: linear-gradient(135deg, #5BADA5 0%, #4A9990 100%);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(91,173,165,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(91,173,165,0.45); }
        .btn-outline {
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.6);
          padding: 13px 26px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.12); border-color: white; }
        .card-hover { transition: transform 0.25s, box-shadow 0.25s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.1); }
        .star { color: #E8834A; }
        .nav-link { font-family: 'DM Sans'; font-size: 14px; color: #444; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #5BADA5; }
      `}</style>

      <Navbar />
      <Hero />
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @media(min-width:768px){ .mobile-menu-btn{display:none!important} .desktop-nav{display:flex!important} }
        @media(max-width:767px){ .desktop-nav{display:none!important} }
      `}</style>

      {/* TRUST / TRIP TYPES */}
      <section id="open-trip" style={{ padding: "72px 20px", background: "white" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#5BADA5", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Apa yang Kami Tawarkan</p>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "clamp(26px, 6vw, 36px)", color: "#1a1a1a", letterSpacing: "-0.3px" }}>
              Perjalanan sesuai
              <br />
              kebutuhan kamu
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 16, maxWidth: 780, margin: "0 auto" }}>
          {TRIP_TYPES.map((t, i) => (
            <FadeIn key={t.label} delay={i * 0.08}>
              <div
                className="card-hover"
                style={{
                  background: "#fafaf8",
                  border: "1px solid #efefed",
                  borderRadius: 18,
                  padding: "24px 16px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg, #EAF7F6, #d0f0ed)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "#5BADA5" }}>
                  {t.icon}
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: 15, marginBottom: 6, color: "#1a1a1a" }}>{t.label}</div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#888", lineHeight: 1.5 }}>{t.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <OpenTrip />
      <GallerySection />
      {/* WHY RIVALTRIP */}
      <section id="tentang-kami" style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 52 }}>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#5BADA5", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Kenapa RivalTrip?</p>
              <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "clamp(26px, 6vw, 38px)", color: "#1a1a1a", lineHeight: 1.3, maxWidth: 480 }}>
                Bukan sekadar trip.
                <br />
                <em style={{ color: "#5BADA5" }}>Pengalaman yang berarti.</em>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WHY_POINTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "24px 0",
                    borderBottom: i < WHY_POINTS.length - 1 ? "1px solid #efefed" : "none",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: i % 2 === 0 ? "#EAF7F6" : "#FEF0E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: i % 2 === 0 ? "#5BADA5" : "#E8834A",
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: 17, marginBottom: 6, color: "#1a1a1a" }}>{p.title}</div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#666", lineHeight: 1.65, fontWeight: 300 }}>{p.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      {/* CTA SECTION */}
      <section style={{ position: "relative", padding: "100px 24px", overflow: "hidden" }}>
        <img src={ctaImage} width="1400" alt="CTA background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(20,55,52,0.82) 0%, rgba(30,55,45,0.75) 100%)" }} />
        <FadeIn>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: "7px 16px", marginBottom: 28 }}>
              <span style={{ fontSize: 16 }}>✈️</span>
              <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(255,255,255,0.8)", letterSpacing: "0.5px" }}>Trip selanjutnya menantimu</span>
            </div>

            <h2 style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(30px, 7vw, 48px)", color: "white", lineHeight: 1.25, marginBottom: 16 }}>
              Siap jalan bareng
              <br />
              RivalTrip?
            </h2>

            <p style={{ fontFamily: "'DM Sans'", fontSize: 16, color: "rgba(255,255,255,0.75)", marginBottom: 40, fontWeight: 300, lineHeight: 1.7 }}>Tanya trip yang cocok untuk kamu ☕️</p>

            <a href={WA_LINK} className="btn-wa" style={{ fontSize: 16, padding: "16px 36px" }}>
              <MessageCircle size={19} /> Chat WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
