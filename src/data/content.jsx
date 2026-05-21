import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Star, ArrowRight, MessageCircle, Camera, Heart, Compass, BookOpen, Church, GraduationCap, Smile, Zap, Shield, ChevronDown, Menu, X, Sunset } from "lucide-react";
import galleryImage1 from "../assets/gallery-1.jpg";
import galleryImage2 from "../assets/gallery-2.jpg";
import galleryImage3 from "../assets/gallery-3.png";
import galleryImage4 from "../assets/gallery-4.jpg";
import galleryImage5 from "../assets/gallery-5.png";
import galleryImage6 from "../assets/gallery-6.jpg";
export const NAV_LINKS = ["Open Trip", "Custom Trip", "Galeri", "Tentang Kami"];

export const TRIP_TYPES = [
  { icon: <Compass size={22} />, label: "Open Trip", desc: "Jelajah bareng traveler baru" },
  { icon: <Users size={22} />, label: "Custom Trip", desc: "Sesuai selera grupmu" },
  { icon: <Heart size={22} />, label: "Gathering", desc: "Momen kebersamaan tim" },
  { icon: <GraduationCap size={22} />, label: "Study Tour", desc: "Belajar sambil berwisata" },
  { icon: <Church size={22} />, label: "Wisata Religi", desc: "Perjalanan penuh makna" },
];

export const GALLERY = [
  { src: galleryImage1, alt: "Sunrise gunung", span: "row-span-2" },
  { src: galleryImage2, alt: "Kebersamaan teman" },
  { src: galleryImage3, alt: "Pemandangan alam" },
  { src: galleryImage4, alt: "Gunung pagi hari", span: "col-span-2" },
  { src: galleryImage5, alt: "Foto candid perjalanan" },
  { src: galleryImage6, alt: "Perjalanan hangat" },
];

export const WHY_POINTS = [
  { icon: <Sunset size={20} />, title: "Suasana Lebih Nyaman", desc: "Trip kita bukan sekadar perjalanan — tapi pengalaman yang bikin kamu betah dan balik lagi." },
  { icon: <Smile size={20} />, title: "Cocok untuk First Timer", desc: "Baru pertama kali? Santai. Kita guide dari awal sampai kamu sampai rumah dengan senyum." },
  { icon: <Zap size={20} />, title: "Admin Fast Response", desc: "Tanya kapan aja, kami balas cepat. Ga ada drama nunggu berjam-jam." },
  { icon: <Camera size={20} />, title: "Dokumentasi Real", desc: "Foto dan kenangan yang autentik — bukan cuma konten, tapi momen yang kamu simpan selamanya." },
  { icon: <Shield size={20} />, title: "Terorganisir & Hangat", desc: "Jadwal jelas, guide berpengalaman, dan suasana yang bikin kamu ngerasa kayak jalan bareng teman lama." },
];

export const TESTIMONIALS = [
  { name: "Amel R.", location: "Brebes", rating: 5, text: "Tripnya nyaman dan seru banget. Ga nyangka open trip bisa sehangat ini, langsung dapet temen baru!", avatar: "AR" },
  { name: "Dimas K.", location: "Tegal", rating: 5, text: "Adminnya fast respon dan helpful banget. Semua pertanyaan dijawab dengan sabar. Recommend banget!", avatar: "DK" },
  { name: "Fira N.", location: "Pemalang", rating: 5, text: "Baru pertama ikut open trip tapi langsung nyaman. Timnya profesional tapi tetap asyik diajak ngobrol.", avatar: "FN" },
  { name: "Bagas P.", location: "Tegal", rating: 5, text: "Custom trip buat kantor kita sukses besar. Semua detail diperhatiin, tim kita happy semua!", avatar: "BP" },
];
