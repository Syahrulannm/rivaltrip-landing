import { Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  return (
    <div className="group bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 transition-all duration-500">
      <div className="aspect-[4/5] overflow-hidden relative">
        <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />

        {trip.badge && <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-sans font-semibold text-foreground">{trip.badge}</span>}
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-foreground mb-2">{trip.title}</h3>

        <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground font-sans">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {trip.date}
          </span>

          {/* <span className="flex items-center gap-1">
            <Users size={12} />
            Sisa {trip.quota} kursi
          </span> */}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Mulai dari</p>

            <p className="font-sans font-bold text-lg text-foreground">{trip.price}</p>
          </div>

          <Link to="/trips" className="bg-primary text-primary-foreground p-3 rounded-full hover:opacity-90 transition-opacity">
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
