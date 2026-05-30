import { MessageCircle, Instagram, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[hsl(180,30%,10%)] pt-24 pb-40 relative">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-heading font-semibold text-white">Contact Us</h1>
          <p className="mt-4 text-white/70 text-lg">Siap merencanakan perjalanan berikutnya? Kami siap membantu.</p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="relative z-20 -translate-y-24  px-5">
        <div className="max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-white shadow-lg grid md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="bg-[#177d73] text-white p-10 md:p-14">
            <h2 className="text-4xl font-heading font-semibold">Get In Touch</h2>

            <p className="mt-6 text-white/80 leading-relaxed">Punya pertanyaan tentang open trip, private trip, atau ingin mendiskusikan gathering perusahaan? Hubungi kami melalui salah satu kontak di bawah ini.</p>

            {/* Location */}
            <div className="mt-12 flex gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Lokasi Kami</h3>
                <p className="text-white/80">
                  Tegal, Jawa Tengah
                  <br />
                  Indonesia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-10 flex gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telepon / WhatsApp</h3>
                <p className="text-white/80">+62 819 1712 5638</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="mt-16">
              <p className="text-white/80 mb-4">Ikuti perjalanan kami</p>

              <a href="https://instagram.com/rivaltrip.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Instagram size={18} />
                @rivaltrip.id
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-10 md:p-14">
            <h2 className="text-4xl font-heading font-semibold text-[hsl(180,30%,10%)]">Kirim Pesan</h2>

            <p className="mt-4 text-muted-foreground">Isi formulir di bawah ini dan tim kami akan merespons dalam 24 jam.</p>

            <form className="mt-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium block mb-2">Nama Lengkap</label>
                  <input type="text" placeholder="Nama Anda" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-teal-600" />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Nomor WhatsApp</label>
                  <input type="text" placeholder="+62 8xx xxxx xxxx" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-teal-600" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Pesan Anda</label>
                <textarea rows="6" placeholder="Ceritakan rencana perjalanan Anda..." className="w-full border rounded-lg px-4 py-3 outline-none focus:border-teal-600" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-[#08152e] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                  <Send size={18} />
                  Kirim Pesan
                </button>

                <a href="https://wa.me/6281917125638" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                  <MessageCircle size={18} />
                  Chat WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* MAP SECTION */}
      <section className="pb-24 bg-[#f5f5f5] px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-heading font-semibold text-[#08152e]">Lokasi Kami</h2>
            <p className="mt-3 text-muted-foreground">Kunjungi atau temukan lokasi RivalTrip di Tegal, Jawa Tengah.</p>
          </div>

          <div className="rounded-[28px] overflow-hidden shadow-2xl h-[420px] bg-white">
            <iframe
              title="Lokasi RivalTrip"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295285825!2d110.24903864999999!3d-6.966667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b209c63c89!2sTegal%2C%20Central%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      {/* CTA BOTTOM */}
      <section className="pb-24 bg-[#f5f5f5] px-5">
        <div className="max-w-5xl mx-auto bg-[hsl(180,30%,10%)] rounded-[28px] px-8 md:px-16 py-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">Siap Memulai Perjalanan Bersama?</h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Diskusikan kebutuhan perjalanan Anda bersama tim RivalTrip. Mulai dari open trip, private trip, family trip, hingga gathering perusahaan.</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/6281917125638" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition">
              <MessageCircle size={20} />
              Chat Sekarang
            </a>

            <a
              href="https://instagram.com/rivaltrip.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition"
            >
              <Instagram size={20} />
              Lihat Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
