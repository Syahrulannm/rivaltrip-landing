import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Amel R.",
    city: "Brebes",
    rating: 5,
    avatar: "AR",
    text: "Tripnya nyaman dan seru banget. Nggak nyangka open trip bisa sehangat ini, langsung dapet banyak teman baru.",
  },
  {
    name: "Dimas K.",
    city: "Tegal",
    rating: 5,
    avatar: "DK",
    text: "Adminnya fast response dan helpful banget. Dari awal booking sampai trip selesai semuanya jelas dan nggak ribet.",
  },
  {
    name: "Fira N.",
    city: "Pemalang",
    rating: 5,
    avatar: "FN",
    text: "Baru pertama ikut open trip tapi langsung nyaman. Timnya profesional, suasananya juga fun dan nggak kaku.",
  },
  {
    name: "Bagas P.",
    city: "Tegal",
    rating: 5,
    avatar: "BP",
    text: "Custom trip kantor kita berjalan lancar banget. Detail kecil diperhatiin dan semuanya terasa lebih terorganisir.",
  },
];
// {
//   name: "Dina R",
//   city: "Tegal",
//   text: "Pertama kali ikut open trip dan langsung nyaman banget. Admin ramah, itinerary jelas, nggak ribet!",
//   rating: 5,
// },
// {
//   name: "Aldi P",
//   city: "Brebes",
//   text: "Trip ke Bromo bareng RivalTrip bikin healing banget. Foto-fotonya keren, teman barunya seru!",
//   rating: 5,
// },
// {
//   name: "Sari W",
//   city: "Pemalang",
//   text: "Aku solo traveler dan sempat ragu, tapi ternyata vibenya welcome banget. Pasti balik lagi!",
//   rating: 5,
// },

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Cerita Mereka" />
        <h2 className="text-3xl font-bold text-center text-foreground mb-4 -mt-12">Kata Mereka yang Sudah Jalan Bareng</h2>
        <SectionHeading subtitle="Bukan cuma soal destinasi, tapi pengalaman dan cerita yang dibawa pulang." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card rounded-3xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 hover:-translate-y-1 transition-all duration-500">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={15} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[15px] leading-relaxed text-foreground/70 mb-6">“{t.text}”</p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">{t.name.charAt(0)}</div>

                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>

                  <p className="text-xs text-foreground/50">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
