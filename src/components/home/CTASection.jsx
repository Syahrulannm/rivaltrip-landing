import { MessageCircle } from "lucide-react";

const CTA_IMG = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="Travel" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-teal-dark/75" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-white leading-tight">Siap jalan bareng RivalTrip?</h2>
        <p className="mt-4 text-base text-white/70">Tanya trip yang cocok untuk kamu dan keluarga ☕️</p>
        <p className="mt-2 text-sm text-white/50 italic">"Cerita perjalanan yang nyaman bisa dimulai hari ini."</p>
        <a
          href="https://wa.me/6281917125638?text=Halo%20RivalTrip%2C%20saya%20ingin%20tanya%20soal%20trip!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-7 py-3.5 rounded-full transition-colors"
        >
          <MessageCircle size={18} />
          Chat Sekarang
        </a>
      </div>
    </section>
  );
}
