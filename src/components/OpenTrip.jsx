import { Calendar, ArrowRight, Heart, Flame } from "lucide-react";
import tripKarimunjawa from "../assets/trip-karimunjawa.webp";
import tripDieng from "../assets/trip-dieng.webp";
import tripBromo from "../assets/trip-bromo.webp";
import tripJogja from "../assets/trip-jogja.webp";
import { waLink } from "./site";

const trips = [
  { img: tripKarimunjawa, name: "Karimunjawa", date: "12 – 15 Jun 2026", price: "1.800.000", quota: 4, badge: "Favorite", badgeIcon: Heart },
  { img: tripBromo, name: "Bromo Sunrise", date: "5 – 7 Jul 2026", price: "700.000", quota: 6, badge: "Ramai", badgeIcon: Flame },
  { img: tripDieng, name: "Dieng Negeri di Atas Awan", date: "22 – 24 Jul 2026", price: "400.000", quota: 8, badge: "Favorite", badgeIcon: Heart },
  { img: tripJogja, name: "Jogja Heritage", date: "9 – 11 Aug 2026", price: "500.000", quota: 3, badge: "Ramai", badgeIcon: Flame },
];

export const OpenTrip = () => (
  <section id="trip" className="flex flex-col items-center" style={{ padding: "80px 20px", background: "#f5f4f1" }}>
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
        {/* 1. Spacer Kiri: Dummy div untuk menyeimbangkan posisi tengah (hanya di desktop) */}
        <div className="hidden sm:block sm:flex-1"></div>

        {/* 2. Teks Utama: Posisinya akan otomatis tepat di tengah */}
        <div className="max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Open Trip Pilihan</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">Trip yang lagi rame & favorit teman-teman.</h2>
        </div>

        {/* 3. Link Kanan: Didorong ke pojok kanan pada desktop */}
        <div className="flex w-full justify-center sm:flex-1 sm:justify-end sm:pb-1">
          <a href={waLink} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Tanya jadwal lain →
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {trips.map((t) => (
          <article key={t.name} className="overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-card">
            <div className="relative aspect-4/5 overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground">
                <t.badgeIcon className="h-3 w-3 text-accent" />
                {t.badge}
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="min-h-14 text-xl font-medium leading-snug">{t.name}</h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {t.date}
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Mulai</p>
                  <p className="text-lg font-semibold">Rp {t.price}</p>
                </div>
                <span className="rounded-full bg-[hsl(var(--accent-soft))] px-2.5 py-1 text-[11px] font-medium text-accent">{t.quota} kuota</span>
              </div>
              <a href={waLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110">
                Lihat Detail <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
