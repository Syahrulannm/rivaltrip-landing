import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import TripCard from "./TripCard";
import SectionHeading from "./SectionHeading";

const trips = [
  {
    id: 1,
    title: "Karimunjawa",
    date: "10-13 Sep 2026",
    price: "Rp 1.850K",
    // quota: 8,
    badge: "⭐ Favorit",
    image: "https://media.base44.com/images/public/6a0f276c00e31cb5610bb822/9443b49b6_generated_b27b6c66.png",
  },
  {
    id: 2,
    title: "Bromo Sunrise",
    date: "25–26 April 2026",
    price: "Rp 700.000",
    // quota: "15 slot",
    badge: "Ramai",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80",
  },
  {
    id: 3,
    title: "Dieng Culture",
    date: "06–07 Jun 2026",
    price: "Rp 400.000",
    // quota: "20 slot",
    badge: "New",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80",
  },
  // {
  //   id: 4,
  //   title: "Jogja Heritage",
  //   image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80",
  //   date: "01–02 Apr 2026",
  //   price: "Rp 550.000",
  //   // quota: "18 slot",
  //   badge: null,
  // },
];

export default function TripPreview() {
  return (
    <section className="py-20 px-5 bg-[#08152e]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Open Trip" title="Trip yang bisa kamu ikuti" subtitle="Gabung trip terdekat dan temukan cerita barumu." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((t) => (
            <TripCard key={t.id} trip={t} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/trips" className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm hover:underline">
            Lihat semua trip
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
