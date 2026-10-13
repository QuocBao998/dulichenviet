import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  Image as ImageIcon,
  ChevronRight,
  Maximize2,
  X,
  ChevronLeft,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Share2,
  Camera
} from "lucide-react";
import { useLang, t, Page } from "../App";

import Gallery1 from "../../imports/z7991040709521_0f42a9b1996bd42eca8b096a93fc2c5a.jpg";
import Gallery2 from "../../imports/z7991040772825_27e1264faabb34eec3b0edb0b9c1a07d.jpg";
import Gallery3 from "../../imports/z7991040871637_7ac325e53985e1acd1938164886cada2.jpg";
import Gallery4 from "../../imports/z7991040922622_012f57e954d70e1784a0b408b3256fed.jpg";
import Gallery5 from "../../imports/z7991040963062_37ce009bec54172d5e39c0137e7dd919.jpg";
import Gallery6 from "../../imports/z7991041008258_601e1647bd4203d58547d6ac943eb3f5.jpg";
import Gallery7 from "../../imports/z7991041068199_d03e5f0f7d693c180cbb92d7b652b197.jpg";
import Gallery8 from "../../imports/z7991041181580_50772d0657a4b04494cbc1f647f5687e.jpg";
import Gallery9 from "../../imports/z7991041223052_5166018017e81a1cddfed3cefbfe1ddf.jpg";
import Gallery10 from "../../imports/z7991041291774_0679eb22c8afbbfb82ea9bb2419ec9cd.jpg";
import Gallery11 from "../../imports/z7991041357796_502676f3f981a9fcf7ee0737362e6c22.jpg";
import Gallery12 from "../../imports/z7991041419216_311e0ba7a321e3969596934f63361a8b.jpg";
import Gallery13 from "../../imports/z7991042379061_ba96972913efff9376708c5f1b2e20e1.jpg";
import Gallery14 from "../../imports/z7991042379064_ba27b705bfee215da5a69df34eaa5379.jpg";
import Gallery15 from "../../imports/z7991042391882_068e35b2a0fe4fdeb305e3f0a042a88a.jpg";

interface PhotoItem {
  id: number;
  src: string;
  titleVi: string;
  titleEn: string;
  category: "all" | "doanh-nghiep" | "trong-nuoc" | "nuoc-ngoai" | "teambuilding";
  categoryVi: string;
  categoryEn: string;
  locationVi: string;
  locationEn: string;
  date: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: 1,
    src: Gallery1,
    titleVi: "Hành trình gắn kết cùng đoàn khách Én Việt",
    titleEn: "Bonding journey with Én Việt group",
    category: "doanh-nghiep",
    categoryVi: "Khách đoàn & Doanh nghiệp",
    categoryEn: "Corporate & Groups",
    locationVi: "Đà Lạt, Lâm Đồng",
    locationEn: "Da Lat, Lam Dong",
    date: "2026",
  },
  {
    id: 2,
    src: Gallery2,
    titleVi: "Chương trình Teambuilding bãi biển sôi động",
    titleEn: "Energetic beach teambuilding program",
    category: "teambuilding",
    categoryVi: "Teambuilding & Sự Kiện",
    categoryEn: "Teambuilding & Events",
    locationVi: "Phan Thiết, Bình Thuận",
    locationEn: "Phan Thiet, Binh Thuan",
    date: "2026",
  },
  {
    id: 3,
    src: Gallery3,
    titleVi: "Khoảnh khắc check-in tuyệt đẹp của du khách",
    titleEn: "Scenic check-in moment with tourists",
    category: "trong-nuoc",
    categoryVi: "Tour Trong Nước",
    categoryEn: "Domestic Tours",
    locationVi: "Nha Trang, Khánh Hòa",
    locationEn: "Nha Trang, Khanh Hoa",
    date: "2026",
  },
  {
    id: 4,
    src: Gallery4,
    titleVi: "Đêm Gala Dinner ấm cúng và đầy cảm xúc",
    titleEn: "Warm and memorable Gala Dinner night",
    category: "teambuilding",
    categoryVi: "Teambuilding & Sự Kiện",
    categoryEn: "Teambuilding & Events",
    locationVi: "Phú Quốc, Kiên Giang",
    locationEn: "Phu Quoc, Kien Giang",
    date: "2026",
  },
  {
    id: 5,
    src: Gallery5,
    titleVi: "Khám phá danh thắng quốc tế cùng hướng dẫn viên",
    titleEn: "Exploring international sights with tour guide",
    category: "nuoc-ngoai",
    categoryVi: "Tour Nước Ngoài",
    categoryEn: "International Tours",
    locationVi: "Bangkok, Thái Lan",
    locationEn: "Bangkok, Thailand",
    date: "2026",
  },
  {
    id: 6,
    src: Gallery6,
    titleVi: "Đoàn tham quan nghỉ dưỡng và trải nghiệm cao cấp",
    titleEn: "Group vacation & premium experience",
    category: "doanh-nghiep",
    categoryVi: "Khách đoàn & Doanh nghiệp",
    categoryEn: "Corporate & Groups",
    locationVi: "Đà Nẵng - Hội An",
    locationEn: "Da Nang - Hoi An",
    date: "2026",
  },
  {
    id: 7,
    src: Gallery7,
    titleVi: "Nụ cười rạng rỡ của du khách tại điểm đến",
    titleEn: "Beaming smiles at destination",
    category: "trong-nuoc",
    categoryVi: "Tour Trong Nước",
    categoryEn: "Domestic Tours",
    locationVi: "Hạ Long, Quảng Ninh",
    locationEn: "Ha Long, Quang Ninh",
    date: "2026",
  },
  {
    id: 8,
    src: Gallery8,
    titleVi: "Hoạt động gắn kết đồng đội ngoài trời",
    titleEn: "Outdoor team bonding activity",
    category: "teambuilding",
    categoryVi: "Teambuilding & Sự Kiện",
    categoryEn: "Teambuilding & Events",
    locationVi: "Vũng Tàu",
    locationEn: "Vung Tau",
    date: "2026",
  },
  {
    id: 9,
    src: Gallery9,
    titleVi: "Hành trình khám phá thiên nhiên tươi đẹp",
    titleEn: "Journey through majestic nature",
    category: "trong-nuoc",
    categoryVi: "Tour Trong Nước",
    categoryEn: "Domestic Tours",
    locationVi: "Quy Nhơn, Bình Định",
    locationEn: "Quy Nhon, Binh Dinh",
    date: "2026",
  },
  {
    id: 10,
    src: Gallery10,
    titleVi: "Kỷ niệm chuyến đi tham quan di tích lịch sử văn hóa",
    titleEn: "Memories of visiting cultural heritage",
    category: "nuoc-ngoai",
    categoryVi: "Tour Nước Ngoài",
    categoryEn: "International Tours",
    locationVi: "Tokyo, Nhật Bản",
    locationEn: "Tokyo, Japan",
    date: "2026",
  },
  {
    id: 11,
    src: Gallery11,
    titleVi: "Khoảnh khắc giao lưu vui vẻ của tập thể",
    titleEn: "Joyful group interaction moments",
    category: "doanh-nghiep",
    categoryVi: "Khách đoàn & Doanh nghiệp",
    categoryEn: "Corporate & Groups",
    locationVi: "Sa Pa, Lào Cai",
    locationEn: "Sa Pa, Lao Cai",
    date: "2026",
  },
  {
    id: 12,
    src: Gallery12,
    titleVi: "Chụp ảnh lưu niệm tại quảng trường thành phố",
    titleEn: "Commemorative photo at city square",
    category: "nuoc-ngoai",
    categoryVi: "Tour Nước Ngoài",
    categoryEn: "International Tours",
    locationVi: "Seoul, Hàn Quốc",
    locationEn: "Seoul, South Korea",
    date: "2026",
  },
  {
    id: 13,
    src: Gallery13,
    titleVi: "Trải nghiệm ẩm thực địa phương đặc sắc",
    titleEn: "Experiencing unique local cuisine",
    category: "trong-nuoc",
    categoryVi: "Tour Trong Nước",
    categoryEn: "Domestic Tours",
    locationVi: "Huế, Thừa Thiên Huế",
    locationEn: "Hue, Thua Thien Hue",
    date: "2026",
  },
  {
    id: 14,
    src: Gallery14,
    titleVi: "Chinh phục đỉnh cao và thử thách đồng đội",
    titleEn: "Conquering peaks and team challenges",
    category: "teambuilding",
    categoryVi: "Teambuilding & Sự Kiện",
    categoryEn: "Teambuilding & Events",
    locationVi: "Fansipan, Sa Pa",
    locationEn: "Fansipan, Sa Pa",
    date: "2026",
  },
  {
    id: 15,
    src: Gallery15,
    titleVi: "Hành trình khép lại với muôn vàn kỷ niệm đẹp",
    titleEn: "Concluding journey with countless memories",
    category: "doanh-nghiep",
    categoryVi: "Khách đoàn & Doanh nghiệp",
    categoryEn: "Corporate & Groups",
    locationVi: "Én Việt Tour & Event",
    locationEn: "En Viet Tour & Event",
    date: "2026",
  },
];

const CATEGORIES = [
  { key: "all", vi: "Tất cả ảnh", en: "All Photos" },
  { key: "doanh-nghiep", vi: "Khách đoàn & Doanh nghiệp", en: "Corporate & Groups" },
  { key: "trong-nuoc", vi: "Tour Trong Nước", en: "Domestic Tours" },
  { key: "nuoc-ngoai", vi: "Tour Nước Ngoài", en: "International Tours" },
  { key: "teambuilding", vi: "Teambuilding & Sự Kiện", en: "Teambuilding & Events" },
];

export function ThuVienAnhPage({ nav }: { nav: (p: Page, tab?: string) => void }) {
  const { lang } = useLang();
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCat === "all"
    ? PHOTOS
    : PHOTOS.filter(p => p.category === selectedCat);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <div className="min-h-screen bg-[#f8fcfb] pb-24">
      {/* ── Page Hero / Header Banner ── */}
      <section className="relative bg-gradient-to-br from-[#003B5C] via-[#1e64ae] to-[#00A651] text-white py-16 md:py-24 overflow-hidden shadow-lg">
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00E676]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/80 mb-6 font-semibold flex-wrap">
            <button
              onClick={() => nav("home")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t(lang, "Trang chủ", "Home")}
            </button>
            <ChevronRight className="w-4 h-4 opacity-70" />
            <button
              onClick={() => nav("thong-tin")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t(lang, "Thông tin du lịch", "Travel Info")}
            </button>
            <ChevronRight className="w-4 h-4 opacity-70" />
            <span className="text-white font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {t(lang, "Thư viện ảnh", "Photo Gallery")}
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-[#00E676] mb-4 border border-white/20">
              <Camera className="w-4 h-4" />
              {t(lang, "Thư Viện Hình Ảnh", "Photo Gallery")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-md">
              {t(lang, "Khoảnh Khắc Đáng Nhớ Cùng Én Việt", "Unforgettable Moments with Én Việt")}
            </h1>
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              {t(
                lang,
                "Lưu giữ những kỷ niệm tươi đẹp, nụ cười hạnh phúc và những chuyến đi gắn kết đầy ý nghĩa của quý khách hàng trên mọi cung đường khám phá.",
                "Preserving beautiful memories, joyful smiles, and meaningful bonding journeys of our valued guests along every exploration route."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <section className="max-w-7xl mx-auto px-4 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-3 md:p-4 shadow-xl border border-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count = cat.key === "all" ? PHOTOS.length : PHOTOS.filter(p => p.category === cat.key).length;
            const isActive = selectedCat === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCat(cat.key)}
                className={`px-4 md:px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "text-[#003B5C] hover:bg-gray-100 hover:text-[#1e64ae]"
                }`}
              >
                <span>{t(lang, cat.vi, cat.en)}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                    isActive ? "bg-white/30 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Photo Gallery Grid / Masonry ── */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#003B5C]">
              {t(lang, "Bộ Sưu Tập Hình Ảnh", "Photo Collection")}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-semibold mt-1">
              {t(
                lang,
                `Hiển thị ${filteredPhotos.length} khoảnh khắc thực tế từ các chuyến tour`,
                `Showing ${filteredPhotos.length} real moments from travel tours`
              )}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-400 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {t(lang, "Nhấn vào ảnh để xem kích thước lớn", "Click image to view in full size")}
          </div>
        </div>

        {/* Masonry layout matching original aesthetic with improved styling */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredPhotos.map((photo, idx) => (
            <Motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActivePhotoIndex(idx)}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative group cursor-pointer bg-white border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.titleVi}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/90 via-[#003B5C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-[#00A651] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 shadow-sm">
                      {t(lang, photo.categoryVi, photo.categoryEn)}
                    </span>
                    <h3 className="text-white font-extrabold text-sm leading-snug drop-shadow-md line-clamp-2 mb-2">
                      {t(lang, photo.titleVi, photo.titleEn)}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-white/80 font-semibold border-t border-white/20 pt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#00E676]" />
                        {t(lang, photo.locationVi, photo.locationEn)}
                      </span>
                      <span className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
                        <Maximize2 className="w-3 h-3" />
                        {t(lang, "Phóng to", "Zoom")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── Interactive Lightbox Modal ── */}
      <AnimatePresence>
        {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActivePhotoIndex(null)}
            />

            <Motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute -top-12 right-0 md:-right-2 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-all backdrop-blur-md cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
                  )
                }
                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all backdrop-blur-md cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all backdrop-blur-md cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black/50 shadow-2xl max-h-[75vh] flex items-center justify-center">
                <img
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].titleVi}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
                />
              </div>

              {/* Caption & Info */}
              <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="bg-[#00A651] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      {t(
                        lang,
                        filteredPhotos[activePhotoIndex].categoryVi,
                        filteredPhotos[activePhotoIndex].categoryEn
                      )}
                    </span>
                    <span className="text-xs text-white/70 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#00E676]" />
                      {t(
                        lang,
                        filteredPhotos[activePhotoIndex].locationVi,
                        filteredPhotos[activePhotoIndex].locationEn
                      )}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm md:text-base">
                    {t(
                      lang,
                      filteredPhotos[activePhotoIndex].titleVi,
                      filteredPhotos[activePhotoIndex].titleEn
                    )}
                  </h4>
                </div>
                <div className="text-xs font-black text-white/60 bg-white/10 px-3 py-1.5 rounded-full shrink-0">
                  {activePhotoIndex + 1} / {filteredPhotos.length}
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Call To Action Section ── */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#003B5C] via-[#1e64ae] to-[#00A651] p-8 md:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[#00E676] font-black uppercase tracking-wider text-xs block mb-2">
              {t(lang, "Đồng Hành Cùng Én Việt", "Travel with Én Việt")}
            </span>
            <h3 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              {t(
                lang,
                "Bạn Muốn Tạo Nên Những Kỷ Niệm Đẹp Tiếp Theo?",
                "Ready to Create Your Next Beautiful Memories?"
              )}
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {t(
                lang,
                "Hãy để Én Việt đồng hành cùng bạn và doanh nghiệp trong những hành trình du lịch đầy cảm hứng và niềm vui trọn vẹn.",
                "Let Én Việt accompany you and your organization on inspirational journeys full of joy."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              onClick={() => nav("tour")}
              className="bg-white text-[#003B5C] hover:bg-[#00E676] hover:text-[#003B5C] font-black px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm flex items-center gap-2 cursor-pointer"
            >
              {t(lang, "Khám Phá Tour", "Explore Tours")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => nav("lien-he")}
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold px-7 py-3.5 rounded-xl transition-all backdrop-blur-md text-sm cursor-pointer"
            >
              {t(lang, "Liên Hệ Tư Vấn", "Contact Advice")}
            </button>
          </div>
        </Motion.div>
      </section>
    </div>
  );
}
