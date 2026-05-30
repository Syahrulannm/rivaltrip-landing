import galleryImage1 from "../../assets/gallery/gallery-1.webp";
import galleryImage2 from "../../assets/gallery/gallery-2.webp";
import galleryImage3 from "../../assets/gallery/gallery-3.webp";
import galleryImage4 from "../../assets/gallery/gallery-4.webp";
import galleryImage5 from "../../assets/gallery/gallery-5.webp";
import galleryImage6 from "../../assets/gallery/gallery-6.webp";
import galleryImage7 from "../../assets/gallery/gallery-7.webp";
import galleryImage8 from "../../assets/gallery/gallery-8.webp";
import galleryImage9 from "../../assets/gallery/gallery-9.webp";

const PHOTOS = [
  { src: galleryImage1, span: "" },
  { src: galleryImage2, span: "" },
  { src: galleryImage3, span: "col-span-2 row-span-2" },
  { src: galleryImage4, span: "" },
  { src: galleryImage5, span: "" },
  { src: galleryImage6, span: "" },
  { src: galleryImage7, span: "col-span-2 row-span-2" },
  { src: galleryImage8, span: "" },
  { src: galleryImage9, span: "" },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-sm font-medium text-teal-mid tracking-wide uppercase mb-3">Galeri</p>
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-teal-dark max-w-lg">Bukan cuma destinasi, tapi cerita yang dibawa pulang.</h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {PHOTOS.map((p, i) => (
            <div key={i} className={`rounded-xl overflow-hidden ${p.span}`}>
              <img src={p.src} alt="RivalTrip gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
