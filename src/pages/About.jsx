import { Users, Shield, Sofa, Briefcase } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80";

const TEAM_IMG = "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80";

const GALLERY = [
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80",
  "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80",
  "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&q=80",
  "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&q=80",
];

const VALUES = [
  {
    icon: Users,
    title: "Togetherness",
    desc: "Building connections and fostering community spirit in every journey.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "Transparent, reliable, and honest in all our dealings and promises.",
  },
  {
    icon: Sofa,
    title: "Comfort",
    desc: "Prioritizing your well-being and peace of mind throughout the trip.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    desc: "Delivering high-quality service with expert planning and execution.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="About RivalTrip" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-teal-dark/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm font-medium text-teal-mid tracking-wide uppercase mb-3">About RivalTrip</p>

          <h1 className="font-heading text-4xl md:text-5xl font-medium text-white leading-tight">Journey Together, Stories Forever.</h1>

          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">Modern and professional travel experiences designed to connect people through meaningful journeys.</p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
            <img src={TEAM_IMG} alt="Company Gathering" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-medium text-teal-dark">Company Overview</h2>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Berbasis di <strong>Tegal, Jawa Tengah, Indonesia</strong>, RivalTrip adalah perusahaan tour & travel modern dan profesional yang berdedikasi untuk menciptakan pengalaman perjalanan yang berkesan dan tak terlupakan.
            </p>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Kami menjembatani semangat muda dengan kredibilitas profesional, menjadikan kami mitra perjalanan yang ideal untuk komunitas, institusi perusahaan, maupun keluarga yang menginginkan perjalanan nyaman dan terorganisir.
            </p>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="py-20 md:py-28 bg-warm-bg-alt">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-3xl font-medium text-teal-dark text-center">Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-xl text-teal-dark mb-4">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed"> Menjadi partner perjalanan paling terpercaya dan inspiratif di Indonesia yang menghubungkan banyak orang melalui perjalanan luar biasa.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-xl text-teal-dark mb-4">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Menghadirkan pengalaman perjalanan yang terencana dengan matang, nyaman, dan berkesan untuk menciptakan kebersamaan dan cerita yang akan selalu dikenang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-heading text-3xl font-medium text-teal-dark text-center">Our Core Values</h2>

          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto"> Prinsip yang menjadi dasar dalam setiap perjalanan yang kami rancang dan setiap layanan yang kami berikan.</p>

          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-mid/10 flex items-center justify-center text-teal-mid shrink-0">
                  <v.icon size={20} />
                </div>

                <div>
                  <h3 className="font-heading text-lg text-teal-dark">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-20 md:py-28 bg-warm-bg-alt">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-heading text-3xl font-medium text-teal-dark">Commitment to Quality</h2>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Kami tidak pernah berkompromi terhadap kualitas pengalaman Anda. Mulai dari pemilihan partner transportasi terpercaya hingga itinerary yang disusun secara detail, setiap aspek dirancang dengan presisi demi memastikan kepuasan
            perjalanan Anda.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-heading text-3xl font-medium text-teal-dark text-center mb-10">Journey Moments</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img src={src} alt="Trip moment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
