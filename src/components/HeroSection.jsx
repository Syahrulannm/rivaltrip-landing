import { MapPin, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn.jsx";
import heroImage from "../assets/hero-rivaltrip.png";
export default function Hero() {
  const WA_LINK = "https://wa.me/6281917125638?text=Halo%20RivalTrip%2C%20saya%20ingin%20tanya%20tentang%20trip!";
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroImage} alt="Hero trip" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
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
            <MapPin size={13} color="#7EC8C0" />
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
            <span style={{ color: "#7EC8C0" }}>Stories Forever.</span>
          </h1>

          <p style={{ fontFamily: "'DM Sans'", fontSize: "clamp(15px, 3.5vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 40, fontWeight: 300, maxWidth: 480 }}>
            Teman perjalanan untuk trip yang nyaman, hangat, dan berkesan.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={WA_LINK} className="btn-wa">
              <MessageCircle size={17} /> Chat WhatsApp
            </a>
            <a href="#open-trip" className="btn-outline">
              Lihat Open Trip <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.6 }}>
          <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "white", letterSpacing: "1px", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown size={18} color="white" style={{ animation: "bounce 1.8s infinite" }} />
        </div>
      </section>
    </>
  );
}
