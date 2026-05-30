import { Compass, Map, Users, GraduationCap, Heart, Bus, MessageCircle } from "lucide-react";

import armadaImage from "../assets/armada-transport.jpg";
import kudusImage from "../assets/menara-kudus.jpg";

const SERVICES = [
  {
    icon: Compass,
    title: "Open Trip",
    desc: "Gabung perjalanan terjadwal dengan pengalaman nyaman bersama sesama traveler.",
    ideal: "Cocok untuk solo traveler, anak muda, dan kelompok kecil.",
    benefits: ["Biaya lebih hemat", "Kesempatan menambah relasi baru", "Itinerary praktis tanpa ribet"],
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
    large: true,
  },
  {
    icon: Users,
    title: "Corporate & Institutional Gathering",
    desc: "Pengelolaan outing profesional untuk membangun kebersamaan dan kolaborasi tim.",
    ideal: "Cocok untuk perusahaan, organisasi, dan instansi.",
    benefits: ["Aktivitas team building terstruktur", "Akomodasi premium", "Pendamping event dedicated"],
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  },
  {
    icon: Map,
    title: "Custom Trip",
    desc: "Perjalanan yang dirancang khusus sesuai kebutuhan dan preferensi grup Anda.",
    ideal: "Cocok untuk keluarga, private group, dan acara spesial.",
    benefits: ["Jadwal fleksibel", "Destinasi sesuai permintaan", "Transportasi privat"],
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  },
  {
    icon: GraduationCap,
    title: "Study Tour",
    desc: "Perjalanan edukatif yang menggabungkan pembelajaran dengan pengalaman menyenangkan.",
    ideal: "Cocok untuk sekolah, kampus, dan institusi pendidikan.",
    benefits: ["Kunjungan edukatif", "Aman dengan pendampingan", "Paket lengkap terorganisir"],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
  },
  {
    icon: Heart,
    title: "Pilgrimage & Religious Tour",
    desc: "Perjalanan spiritual yang dirancang dengan penuh kenyamanan dan kekhusyukan.",
    ideal: "Cocok untuk komunitas religi dan keluarga.",
    benefits: ["Pendamping spiritual berpengalaman", "Akomodasi nyaman", "Fokus pada ibadah"],
    img: kudusImage,
  },
  {
    icon: Bus,
    title: "Transportation Rental",
    desc: "Layanan sewa armada terpercaya untuk kebutuhan perjalanan mandiri Anda.",
    ideal: "Cocok untuk grup mandiri dan penyelenggara event.",
    benefits: ["Armada terawat", "Driver profesional", "Harga kompetitif"],
    img: armadaImage,
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 bg-[#f7f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 text-center">
          <p className="text-[#177d73] text-sm font-semibold tracking-[0.18em] uppercase mb-3">Our Services</p>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#08152e] leading-tight">Explore Our Travel Services</h1>

          <p className="mt-5 text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Pilihan layanan perjalanan yang dirancang untuk menghadirkan pengalaman nyaman, terorganisir, dan berkesan.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-16 md:pb-24 bg-[#f7f8fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 space-y-8 md:space-y-12">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`bg-white rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(8,21,46,0.08)] border border-slate-100`}>
              <div className={`grid lg:grid-cols-2 ${s.large ? "min-h-[620px]" : "min-h-[520px]"} ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* IMAGE */}
                <div className={`${s.large ? "h-[320px] sm:h-[480px] lg:h-[620px]" : "h-[260px] sm:h-[340px] lg:h-[520px]"}`}>
                  {" "}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* CONTENT */}
                <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#177d73]/10 flex items-center justify-center text-[#177d73] mb-6">
                    <s.icon size={22} />
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#08152e]">{s.title}</h2>

                  <p className="mt-4 text-slate-500 leading-relaxed text-sm sm:text-base">{s.desc}</p>

                  <div className="mt-8">
                    <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#08152e]">Ideal For</p>

                    <p className="mt-3 text-slate-500 text-sm sm:text-base">{s.ideal}</p>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#08152e]">Key Benefits</p>

                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-[#177d73]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <a href="https://wa.me/6281917125638" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(180,30%,10%)] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                      <MessageCircle size={18} />
                      Tanya Lebih Lanjut
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
