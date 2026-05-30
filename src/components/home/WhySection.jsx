import { Check } from "lucide-react";
import image1 from "../../assets/why1.webp";
import image2 from "../../assets/why2.webp";
import image3 from "../../assets/why3.webp";

const REASONS = [
  {
    title: "Perencanaan yang Matang",
    desc: "Setiap itinerary disusun dengan detail agar perjalanan tetap nyaman dan tidak terasa terburu-buru.",
  },
  {
    title: "Tim Berpengalaman",
    desc: "Didampingi tim profesional yang siap memastikan perjalanan berjalan lancar dan menyenangkan.",
  },
  {
    title: "Partner Terpercaya",
    desc: "Bekerja sama dengan penyedia transportasi dan akomodasi terbaik untuk kenyamanan Anda.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 md:py-28 bg-[#08152e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#16d7c5] font-medium">WHY RIVALTRIP</p>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white leading-[1.2]">Excellence in Every Detail of Your Journey</h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl">Kami tidak hanya merancang perjalanan, tetapi menghadirkan pengalaman yang nyaman, aman, dan berkesan dari awal hingga akhir.</p>

            <div className="mt-10 space-y-8">
              {REASONS.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#177d73] flex items-center justify-center shrink-0 mt-1">
                    <Check size={18} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{r.title}</h3>

                    <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <img src={image1} alt="" className="rounded-[28px] h-52 sm:h-72 object-cover w-full mt-8" loading="lazy" />

            <img src={image2} alt="" className="rounded-[28px] h-52 sm:h-72 object-cover w-full" loading="lazy" />

            <img src={image3} alt="" className="rounded-[28px] h-56 sm:h-72 object-cover w-full col-span-2" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
