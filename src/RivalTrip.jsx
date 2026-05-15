import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Star, ArrowRight, MessageCircle, Camera, Heart, Compass, BookOpen, Church, GraduationCap, Smile, Zap, Shield, ChevronDown, Menu, X, Sunset } from "lucide-react";
import logoRivalTrip from "./assets/logo-rivaltrip.jpg";
const NAV_LINKS = ["Open Trip", "Custom Trip", "Galeri", "Tentang Kami"];

const TRIP_TYPES = [
  { icon: <Compass size={22} />, label: "Open Trip", desc: "Jelajah bareng traveler baru" },
  { icon: <Users size={22} />, label: "Custom Trip", desc: "Sesuai selera grupmu" },
  { icon: <Heart size={22} />, label: "Gathering", desc: "Momen kebersamaan tim" },
  { icon: <GraduationCap size={22} />, label: "Study Tour", desc: "Belajar sambil berwisata" },
  { icon: <Church size={22} />, label: "Wisata Religi", desc: "Perjalanan penuh makna" },
];

const GALLERY = [
  { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", alt: "Sunrise gunung", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", alt: "Kebersamaan teman" },
  { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", alt: "Pemandangan alam" },
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Gunung pagi hari", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", alt: "Foto candid perjalanan" },
  { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80", alt: "Perjalanan hangat" },
];

const WHY_POINTS = [
  { icon: <Sunset size={20} />, title: "Suasana Lebih Nyaman", desc: "Trip kita bukan sekadar perjalanan — tapi pengalaman yang bikin kamu betah dan balik lagi." },
  { icon: <Smile size={20} />, title: "Cocok untuk First Timer", desc: "Baru pertama kali? Santai. Kita guide dari awal sampai kamu sampai rumah dengan senyum." },
  { icon: <Zap size={20} />, title: "Admin Fast Response", desc: "Tanya kapan aja, kami balas cepat. Ga ada drama nunggu berjam-jam." },
  { icon: <Camera size={20} />, title: "Dokumentasi Real", desc: "Foto dan kenangan yang autentik — bukan cuma konten, tapi momen yang kamu simpan selamanya." },
  { icon: <Shield size={20} />, title: "Terorganisir & Hangat", desc: "Jadwal jelas, guide berpengalaman, dan suasana yang bikin kamu ngerasa kayak jalan bareng teman lama." },
];

const TESTIMONIALS = [
  { name: "Amel R.", location: "Semarang", rating: 5, text: "Tripnya nyaman dan seru banget. Ga nyangka open trip bisa sehangat ini, langsung dapet temen baru!", avatar: "AR" },
  { name: "Dimas K.", location: "Yogyakarta", rating: 5, text: "Adminnya fast respon dan helpful banget. Semua pertanyaan dijawab dengan sabar. Recommend banget!", avatar: "DK" },
  { name: "Fira N.", location: "Solo", rating: 5, text: "Baru pertama ikut open trip tapi langsung nyaman. Timnya profesional tapi tetap asyik diajak ngobrol.", avatar: "FN" },
  { name: "Bagas P.", location: "Jakarta", rating: 5, text: "Custom trip buat kantor kita sukses besar. Semua detail diperhatiin, tim kita happy semua!", avatar: "BP" },
];

function useIntersection(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useIntersection();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
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

      {/* NAV */}
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

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=85" alt="Hero trip" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
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

      {/* GALLERY */}
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
                <img src={GALLERY[0].url} alt={GALLERY[0].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
                <img src={GALLERY[1].url} alt={GALLERY[1].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
                <img src={GALLERY[2].url} alt={GALLERY[2].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
                <img src={GALLERY[4].url} alt={GALLERY[4].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div style={{ borderRadius: 16, overflow: "hidden", height: 145 }}>
                <img src={GALLERY[5].url} alt={GALLERY[5].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
          </div>

          {/* Wide bottom */}
          <FadeIn delay={0.3}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 200, marginTop: 10 }}>
              <img src={GALLERY[3].url} alt={GALLERY[3].alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </FadeIn>
        </div>
      </section>

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

      {/* TESTIMONIALS */}
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

      {/* CTA SECTION */}
      <section style={{ position: "relative", padding: "100px 24px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1400&q=80" alt="CTA background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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
