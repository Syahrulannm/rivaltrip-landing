import { Link } from "react-router-dom";
import { MapPin, ArrowRight, MessageCircle, ChevronDown, Users, Zap, Camera, Calendar } from "lucide-react";
import FadeIn from "../FadeIn.jsx";
import heroImage from "../../assets/hero-rivaltrip.webp";
export default function Hero() {
  const WA_LINK = "https://wa.me/6281917125638?text=Halo%20RivalTrip%2C%20saya%20ingin%20tanya%20tentang%20trip!";
  const chips = [
    { icon: Users, text: "500+ Peserta" },
    { icon: Zap, text: "Fast Response" },
    { icon: Camera, text: "Dokumentasi Real" },
    { icon: Calendar, text: "Open Trip Rutin" },
  ];
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroImage} alt="Hero trip" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,30,28,0.55) 0%, rgba(15,30,28,0.35) 50%, rgba(15,30,28,0.65) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, padding: "100px 24px 60px", maxWidth: 680, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 50,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            <MapPin size={13} className="text-primary" />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(255,255,255,0.85)", letterSpacing: "0.5px" }}>Jawa Tengah & Sekitarnya</span>
          </div>

          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(36px, 8vw, 58px)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: 20,
              letterSpacing: "-0.5px",
            }}
          >
            Journey Together,
            <br />
            <span className="text-primary">Stories Forever.</span>
          </h1>

          <p style={{ fontFamily: "'DM Sans'", fontSize: "clamp(15px, 3.5vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 40, fontWeight: 300, maxWidth: 480 }}>
            Teman perjalanan untuk trip yang nyaman, hangat, dan berkesan.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors">
              <MessageCircle size={17} /> Chat WhatsApp
            </a>
            <Link to="/trips" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors border border-white/20">
              Lihat Open Trip <ArrowRight size={16} />
            </Link>
          </div>
          {/* Point of trust */}
          <div className="relative z-10 max-w-6xl mx-auto py-10 w-full">
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white/70 text-xs px-3 py-1.5 rounded-full border border-white/10">
                  <Icon size={13} /> {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.6 }}>
          <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "white", letterSpacing: "1px", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={18} color="white" className="animate-float-down" />
        </div>
      </section>
    </>
  );
}
