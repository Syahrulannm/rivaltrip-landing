import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281917125638?text=Halo, saya tertarik dengan layanan RivalTrip!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
