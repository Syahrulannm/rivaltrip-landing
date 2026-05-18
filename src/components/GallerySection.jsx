import FadeIn from "../components/FadeIn.jsx";
import { GALLERY } from "../data/content";
import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Star, ArrowRight, MessageCircle, Camera, Heart, Compass, BookOpen, Church, GraduationCap, Smile, Zap, Shield, ChevronDown, Menu, X, Sunset } from "lucide-react";
{
  /* GALLERY */
}
export default function GallerySection() {
  return (
    <section id="galeri" style={{ padding: "72px 20px", background: "#f5f4f1" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#E8834A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Galeri Trip</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(26px, 6vw, 36px)", color: "#1a1a1a" }}>Setiap momen punya cerita</h2>
        </div>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto", gap: 10 }}>
          {/* Tall left */}
          <FadeIn delay={0} style={{ gridRow: "span 2" }}>
            <div style={{ gridRow: "span 2", borderRadius: 16, overflow: "hidden", height: "100%", minHeight: 300 }}>
              <img src={GALLERY[0].src} alt={GALLERY[0].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
              <img src={GALLERY[1].src} alt={GALLERY[1].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
              <img src={GALLERY[2].src} alt={GALLERY[2].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
              <img src={GALLERY[4].src} alt={GALLERY[4].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
              <img src={GALLERY[5].src} alt={GALLERY[5].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
        </div>

        {/* Wide bottom */}
        <FadeIn delay={0.3}>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 200, marginTop: 10 }}>
            <img src={GALLERY[3].src} alt={GALLERY[3].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
