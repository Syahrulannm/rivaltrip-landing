{
  /* FOOTER */
}
import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Star, ArrowRight, MessageCircle, Camera, Heart, Compass, BookOpen, Church, GraduationCap, Smile, Zap, Shield, ChevronDown, Menu, X, Sunset } from "lucide-react";
import logoRivalTrip from "../assets/logo-rivaltrip.jpg";
export default function Footer() {
  return (
    <footer style={{ background: "#0f1f1e", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #5BADA5, #4A9990)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Logo */}
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
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: 18, color: "white" }}>RivalTrip</span>
            </div>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 240, fontWeight: 300 }}>Teman perjalanan untuk trip yang nyaman, hangat, dan berkesan.</p>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 14 }}>Trip</div>
              {["Open Trip", "Custom Trip", "Gathering", "Study Tour"].map((l) => (
                <div key={l} style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10, cursor: "pointer" }}>
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 14 }}>Kontak</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>WhatsApp</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>Instagram</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>TikTok</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2025 RivalTrip. All rights reserved.</span>
          <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Made with ♥ for travelers</span>
        </div>
      </div>
    </footer>
  );
}
