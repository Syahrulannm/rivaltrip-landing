import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const FAQS = [
  { q: "Aman untuk first timer?", a: "Sangat aman! Kami sudah terbiasa handle peserta yang baru pertama kali ikut trip. Tim kami akan memandu dari awal sampai akhir." },
  { q: "Apakah bisa ikut trip sendiri?", a: "Tentu! Banyak peserta kami yang ikut solo dan pulangnya punya teman baru." },
  { q: "Apa saja yang termasuk dalam harga?", a: "Biasanya mencakup transportasi, akomodasi, makan, dan guide. Detail lengkap ada di setiap trip." },
  { q: "Bagaimana cara pembayaran?", a: "Setelah konfirmasi via WhatsApp, kamu bisa transfer ke rekening resmi RivalTrip." },
  { q: "Apakah ada minimal peserta?", a: "Untuk open trip, minimal peserta bervariasi. Untuk custom trip, bisa mulai dari 5 orang." },
  { q: "Apakah trip ini cocok untuk keluarga?", a: "Beberapa trip kami ramah keluarga, tapi pastikan cek detailnya atau tanyakan langsung ya!" },
  { q: "Kapan deadline booking?", a: "Minimal H-7 sebelum keberangkatan, atau sampai kuota penuh." },
  { q: "Dimana meeting pointnya?", a: "Setiap trip punya meeting point berbeda. Detail lengkap akan dikirim setelah booking konfirmasi." },
];

export default function BookNow() {
  const [form, setForm] = useState({ nama: "", kota: "", trip: "", peserta: "", pesan: "" });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo RivalTrip! Saya ingin booking:\n\nNama: ${form.nama}\nKota: ${form.kota}\nTrip: ${form.trip}\nJumlah: ${form.peserta} orang\nPesan: ${form.pesan}`;
    window.open(`https://wa.me/6281917125638?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-warm-bg">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-sm font-medium text-teal-mid tracking-wide uppercase mb-3">Booking</p>
          <h1 className="font-heading text-4xl md:text-5xl font-medium text-teal-dark">Pesan Trip Kamu</h1>
          <p className="mt-4 text-base text-muted-foreground max-w-md mx-auto">Isi form di bawah, lalu kami akan hubungi kamu lewat WhatsApp.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-bg-alt">
        <div className="max-w-xl mx-auto px-5">
          <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl bg-white border border-border/50">
            <div>
              <Label className="text-sm font-medium text-teal-dark">Nama Lengkap</Label>
              <Input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} required className="mt-1.5" placeholder="Nama kamu" />
            </div>
            <div>
              <Label className="text-sm font-medium text-teal-dark">Kota Asal</Label>
              <Input value={form.kota} onChange={(e) => setForm({ ...form, kota: e.target.value })} required className="mt-1.5" placeholder="Contoh: Jakarta" />
            </div>
            <div>
              <Label className="text-sm font-medium text-teal-dark">Trip Pilihan</Label>
              <Select value={form.trip} onValueChange={(v) => setForm({ ...form, trip: v })}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Pilih trip" />
                </SelectTrigger>
                <SelectContent>
                  {["Karimunjawa", "Bromo Sunrise", "Dieng Culture", "Jogja Heritage", "Labuan Bajo", "Raja Ampat", "Custom Trip"].map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-teal-dark">Jumlah Peserta</Label>
              <Input type="number" min="1" value={form.peserta} onChange={(e) => setForm({ ...form, peserta: e.target.value })} required className="mt-1.5" placeholder="1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-teal-dark">Pertanyaan Tambahan</Label>
              <Textarea value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} className="mt-1.5" rows={3} placeholder="Ada yang mau ditanyakan?" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 font-medium flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Kirim via WhatsApp
            </Button>
          </form>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-medium text-teal-dark text-center mb-8">Pertanyaan Umum</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div key={i} className="rounded-xl bg-white border border-border/50 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                    <span className="text-sm font-medium text-teal-dark">{f.q}</span>
                    {openFaq === i ? <ChevronUp size={16} className="text-muted-foreground shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
