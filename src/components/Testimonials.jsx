import FadeIn from "../components/FadeIn.jsx";
import { TESTIMONIALS } from "../data/content";
import { MapPin, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

{
  /* TESTIMONIALS */
}
export default function Testimonials() {
  return (
    <section style={{ padding: "80px 20px", background: "#f5f4f1" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#E8834A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Kata Mereka</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(26px, 6vw, 36px)", color: "#1a1a1a" }}>Cerita dari traveler kita</h2>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 18, maxWidth: 960, margin: "0 auto" }}>
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="card-hover" style={{ background: "white", borderRadius: 20, padding: "28px 24px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array(t.rating)
                  .fill(0)
                  .map((_, j) => (
                    <Star key={j} size={14} fill="#E8834A" color="#E8834A" />
                  ))}
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 15, color: "#2a2a2a", lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #5BADA5, #4A9990)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Sans'",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans'", fontWeight: 500, fontSize: 14, color: "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#999", display: "flex", alignItems: "center", gap: 4 }}>
                    <MapPin size={10} /> {t.location}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
