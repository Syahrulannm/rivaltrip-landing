import { useState } from "react";
import { CalendarDays, Users, MapPin, Check, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

const trips = [
  {
    name: "Karimunjawa",
    img: "https://media.base44.com/images/public/6a0f30363f847c21835557cd/32207226b_generated_59107076.png",
    date: "10–13 Sep 2026",
    price: "Rp 1.850.000",
    seats: "8 slot tersisa",
    badge: "Best Seller",
    desc: "Pulau tropis yang tenang, snorkeling, sunset, dan suasana santai bersama.",
    facilities: ["Transportasi PP", "Penginapan 2 malam", "Makan 5x", "Snorkeling", "Island hopping", "Dokumentasi"],
    itinerary: ["Hari 1: Berangkat pagi, check-in, explore pantai", "Hari 2: Snorkeling, island hopping, sunset point", "Hari 3: Free time, pulang sore"],
    faq: [{ q: "Bisa ikut sendiri?", a: "Tentu! Banyak peserta yang ikut solo dan langsung akrab." }],
  },
  {
    name: "Bromo",
    img: "https://media.base44.com/images/public/6a0f30363f847c21835557cd/58f5247bd_generated_8461be18.png",
    date: "25–26 April 2026",
    price: "Rp 700.000",
    seats: "12 slot tersisa",
    badge: "Weekend Trip",
    desc: "Sunrise legendaris dan lautan pasir yang bikin speechless.",
    facilities: ["Transportasi PP", "Penginapan 1 malam", "Makan 3x", "Jeep Bromo", "Guide lokal", "Dokumentasi"],
    itinerary: ["Hari 1: Berangkat malam dari meeting point", "Hari 2: Sunrise, Bromo crater, Savana, pulang sore"],
    faq: [{ q: "Perlu persiapan khusus?", a: "Bawa jaket tebal aja, suhu bisa 5°C. Sisanya kami siapin." }],
  },
  {
    name: "Dieng",
    img: "https://media.base44.com/images/public/6a0f30363f847c21835557cd/788924b96_generated_995809dc.png",
    date: "06–07 Jun 2026",
    price: "Rp 400.000",
    seats: "10 slot tersisa",
    badge: "",
    desc: "Dataran tinggi sejuk, kawah belerang, dan sunrise di atas awan.",
    facilities: ["Transportasi PP", "Penginapan 1 malam", "Makan 3x", "Tiket wisata", "Guide lokal", "Dokumentasi"],
    itinerary: ["Hari 1: Berangkat, Candi Arjuna, Kawah Sikidang", "Hari 2: Sunrise Golden Sunrise, Telaga Warna, pulang"],
    faq: [{ q: "Dingin banget ya?", a: "Lumayan! Suhu bisa 10°C. Tapi kami sediain api unggun malam." }],
  },
  {
    name: "Jogja",
    img: "https://media.base44.com/images/public/6a0f30363f847c21835557cd/b7e31e3de_generated_38f69f5e.png",
    date: "01–02 Apr 2026",
    price: "Rp 550.000",
    seats: "15 slot tersisa",
    badge: "First Timer Friendly",
    desc: "Budaya, kuliner, dan vibes kota yang bikin betah.",
    facilities: ["Transportasi PP", "Penginapan 1 malam", "Makan 3x", "Tiket wisata", "City tour", "Dokumentasi"],
    itinerary: ["Hari 1: Candi Prambanan, Malioboro, kuliner malam", "Hari 2: Borobudur sunrise, brunch, pulang sore"],
    faq: [{ q: "Trip ini cocok buat pertama kali?", a: "Banget! Itinerary santai dan pace-nya nyaman." }],
  },
];

function TripCard({ trip }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
      <div className="md:flex">
        <div className="relative md:w-72 flex-shrink-0">
          <img src={trip.img} alt={trip.name} className="w-full h-56 md:h-full object-cover" loading="lazy" />
          {trip.badge && <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{trip.badge}</span>}
        </div>
        <div className="p-6 flex-1">
          <h2 className="font-heading text-2xl font-medium text-foreground mb-1">{trip.name}</h2>
          <p className="text-muted-foreground text-sm mb-4">{trip.desc}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} /> {trip.date}
            </span>
            {/* <span className="flex items-center gap-1.5">
              <Users size={14} /> {trip.seats}
            </span> */}
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Meeting point Tegal
            </span>
          </div>
          <p className="text-primary font-bold text-lg mb-4">
            {trip.price}
            <span className="text-muted-foreground font-normal text-sm">/orang</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/6281917125638?text=Halo, saya tertarik dengan trip ${trip.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Book via WA
            </a>
            <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-1.5 text-primary font-medium text-sm px-4 py-2.5 rounded-full border border-primary/30 hover:bg-primary/5 transition-colors">
              Detail {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 pt-2 border-t border-border/40 space-y-5">
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-2">Fasilitas</h3>
            <div className="flex flex-wrap gap-2">
              {trip.facilities.map((f) => (
                <span key={f} className="inline-flex items-center gap-1 text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full">
                  <Check size={12} /> {f}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-2">Itinerary</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {trip.itinerary.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-2">FAQ</h3>
            {trip.faq.map((f) => (
              <div key={f.q}>
                <p className="text-sm font-medium text-foreground">{f.q}</p>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Trips() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Open Trip</p>
          <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
            Pilih <span className="italic">perjalanan</span> kamu.
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">Perjalanan yang nyaman nggak harus selalu ramai.</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-5">
        <div className="max-w-4xl mx-auto space-y-6">
          {trips.map((t) => (
            <TripCard key={t.name} trip={t} />
          ))}
        </div>
      </section>
    </>
  );
}
