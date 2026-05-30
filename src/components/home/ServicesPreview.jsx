import { Link } from "react-router-dom";
import { Compass, Users, Map, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Open Trip",
    desc: "Gabung perjalanan terbuka dan temukan pengalaman baru bersama teman seperjalanan.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Gathering Perusahaan",
    desc: "Pengelolaan outing profesional untuk membangun kekompakan tim.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Map,
    title: "Custom Trip",
    desc: "Rencana perjalanan yang dirancang sesuai kebutuhan grup Anda.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#177d73] font-medium">Layanan Kami</p>

          <h2 className="mt-4 text-[28px] sm:text-4xl md:text-5xl font-heading font-semibold text-[#08152e] leading-[1.25] sm:leading-tight px-2">
            Solusi Perjalanan untuk
            <span className="block">Setiap Kebutuhan</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed px-3 sm:px-0">Mulai dari solo traveler hingga gathering perusahaan, kami siap menghadirkan perjalanan yang nyaman dan berkesan.</p>
        </div>

        {/* Cards */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {SERVICES.map((s) => (
            <Link key={s.title} to="/services" className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${s.bg} flex items-center justify-center mb-6 sm:mb-8`}>
                <s.icon className={s.color} size={24} />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#08152e]">{s.title}</h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">{s.desc}</p>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[#177d73] text-sm sm:text-base font-medium group-hover:gap-3 transition-all">
                Pelajari Lebih Lanjut
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center">
          <Link to="/services" className="w-full sm:w-auto text-center bg-[#08152e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
