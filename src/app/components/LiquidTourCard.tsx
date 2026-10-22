import React from "react";
import { motion as Motion } from "motion/react";
import { Clock, Plane, ArrowRight, Star, CheckCircle } from "lucide-react";
import { TourItem } from "../../data/toursData";
import { useLang, t } from "../App";

// Danh sách ảnh phong cảnh du lịch thực tế độ phân giải cao thay thế hoàn toàn placeholder 600x400
export const SCENIC_TRAVEL_FALLBACKS = [
  "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=1000&q=85", // Đài Bắc / Tháp 101 lung linh
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&q=85", // Núi Phú Sỹ & Chùa Chureito
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&q=85", // Hoa anh đào Nhật Bản nở rộ
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1000&q=85", // Cố đô Kyoto mùa thu lá đỏ Momiji
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=85", // Đền Fushimi Inari Kyoto
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=85", // Biển đảo nhiệt đới Bali / Phuket
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=85", // Tháp Eiffel Paris tráng lệ
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1000&q=85", // Làng ven biển Cinque Terre Ý
  "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1000&q=85", // Đảo Nami Hàn Quốc mùa thu
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=85", // Bờ Tây Hoa Kỳ hẻm núi Grand Canyon
];

export function getSafeTourImage(tour: TourItem, idx = 0): string {
  if (tour.image && !tour.image.includes("placehold") && !tour.image.includes("600x400") && !tour.image.includes("via.placeholder")) {
    return tour.image;
  }
  const hash = (tour.id || tour.code || tour.title || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), idx);
  return SCENIC_TRAVEL_FALLBACKS[hash % SCENIC_TRAVEL_FALLBACKS.length];
}

interface LiquidTourCardProps {
  tour: TourItem;
  onSelect: (tour: TourItem) => void;
  onBook?: (tour: TourItem) => void;
  index?: number;
  badgeType?: "hot" | "new" | "price" | "local" | "trend" | "unique";
}

export const LiquidTourCard = React.forwardRef<HTMLDivElement, LiquidTourCardProps>(
  function LiquidTourCard({ tour, onSelect, onBook, index = 0, badgeType }, ref) {
  const { lang } = useLang();
  const isContact = tour.price === null || tour.priceFormatted === "Liên hệ";
  const tourImg = getSafeTourImage(tour, index);

  // Flag or country emoji
  const getCountryDisplay = (country: string) => {
    if (country.includes("Hàn Quốc")) return "🇰🇷 " + country;
    if (country.includes("Đài Loan")) return "🇹🇼 " + country;
    if (country.includes("Nhật Bản")) return "🇯🇵 " + country;
    if (country.includes("Dubai") || country.includes("UAE")) return "🇦🇪 " + country;
    if (country.includes("Bhutan")) return "🇧🇹 " + country;
    if (country.includes("Trung Quốc")) return "🇨🇳 " + country;
    if (country.includes("Hong Kong") || country.includes("HongKong")) return "🇭🇰 " + country;
    if (country.includes("Thái Lan")) return "🇹🇭 " + country;
    if (country.includes("Campuchia")) return "🇰🇭 " + country;
    if (country.includes("Philippines") || country.includes("Cebu")) return "🇵🇭 " + country;
    if (country.includes("Indonesia") || country.includes("Bali")) return "🇮🇩 " + country;
    if (country.includes("Lào")) return "🇱🇦 " + country;
    if (country.includes("Malaysia") || country.includes("Singapore")) return "🇸🇬 🇲🇾 " + country;
    if (country.includes("Singapore")) return "🇸🇬 " + country;
    if (country.includes("Thổ Nhĩ Kỳ")) return "🇹🇷 " + country;
    if (country.includes("Tây Âu") || country.includes("Pháp")) return "🇫🇷 🇨🇭 " + country;
    if (country.includes("Đông Âu") || country.includes("Áo") || country.includes("Đức")) return "🇦🇹 🇩🇪 " + country;
    if (country.includes("Nam Âu") || country.includes("Tây Ban Nha") || country.includes("Bồ Đào Nha")) return "🇪🇸 🇵🇹 " + country;
    if (country.includes("Hoa Kỳ") || country.includes("Mỹ") || country.includes("USA")) return "🇺🇸 " + country;
    if (country.includes("Việt Nam")) return "🇻🇳 " + country;
    return "✈️ " + country;
  };

  // Badge styling matching the user's screenshot
  const renderBadge = () => {
    const rawBadge = (tour.badge || "HOT").toUpperCase();
    
    // Determine style based on badge content or badgeType prop
    if (badgeType === "hot" || rawBadge.includes("HOT") || rawBadge.includes("SIÊU PHẨM")) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#E53935] shadow-md flex items-center gap-1 uppercase tracking-wide">
          <span>HOT</span>
          <span className="text-sm leading-none">🔥</span>
        </span>
      );
    }
    if (badgeType === "new" || rawBadge.includes("MỚI") || rawBadge.includes("HÀNH TRÌNH VÀNG") || rawBadge.includes("ĐẶC SẮC")) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#00A651] shadow-md uppercase tracking-wide">
          MỚI
        </span>
      );
    }
    if (badgeType === "price" || rawBadge.includes("GIÁ TỐT") || rawBadge.includes("MÙA THU")) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-[#002238] bg-[#FFB800] shadow-md uppercase tracking-wide">
          GIÁ TỐT
        </span>
      );
    }
    if (badgeType === "trend" || rawBadge.includes("TREND") || rawBadge.includes("BÁN CHẠY")) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#FF3B30] shadow-md flex items-center gap-1 uppercase tracking-wide">
          <span>TREND</span>
          <span className="text-sm leading-none">🔥</span>
        </span>
      );
    }
    if (badgeType === "unique" || rawBadge.includes("ĐỘC BẢN") || rawBadge.includes("CÔNG NGHỆ")) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#1e64ae] shadow-md uppercase tracking-wide">
          ĐỘC BẢN
        </span>
      );
    }
    if (badgeType === "local" || tour.category === "trong-nuoc") {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-[#003B5C] bg-white shadow-md uppercase tracking-wide">
          NỘI ĐỊA
        </span>
      );
    }

    return (
      <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#00A651] shadow-md uppercase tracking-wide">
        {tour.badge || "HOT"}
      </span>
    );
  };

  return (
    <Motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.35), ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onClick={() => onSelect(tour)}
      className="group relative flex flex-col rounded-[2.2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_50px_-10px_rgba(30,100,174,0.18)] transition-all duration-300 cursor-pointer"
    >
      {/* ── Media slot with Top & Bottom Overlays ── */}
      <div className="relative h-60 md:h-64 w-full overflow-hidden shrink-0 rounded-t-[2.2rem]">
        <img
          src={tourImg}
          alt={tour.title}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            const fallback = SCENIC_TRAVEL_FALLBACKS[index % SCENIC_TRAVEL_FALLBACKS.length];
            target.src = fallback;
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
        
        {/* Soft bottom vignette for country tag contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges: Left Badge + Right Star Circle */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          {renderBadge()}

          {/* Star Circle Button */}
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-amber-400 shadow-sm transition-transform group-hover:scale-110">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Bottom Country Pill */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-sm">
            <span>{getCountryDisplay(tour.country)}</span>
          </div>
        </div>
      </div>

      {/* ── Card Content Body ── */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title - Bold navy 2 lines */}
          <h3
            className="text-[17px] md:text-lg font-black text-[#003B5C] leading-snug line-clamp-2 mb-4 group-hover:text-[#1e64ae] transition-colors"
            title={tour.title}
          >
            {tour.title}
          </h3>

          {/* Metadata pill container: Green Clock + Duration • Blue Plane + Bay khứ hồi */}
          <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-500 mb-5 bg-[#F8FAFC] py-2.5 px-4 rounded-full border border-gray-100">
            <div className="flex items-center gap-1.5 font-bold text-gray-600">
              <Clock className="w-4 h-4 text-[#00A651] shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <span className="text-gray-300 font-bold">•</span>
            <div className="flex items-center gap-1.5 font-bold text-gray-600 truncate">
              <Plane className="w-4 h-4 text-[#1e64ae] shrink-0" />
              <span className="truncate">
                {tour.airline === "Hàng không" ? t(lang, "Bay khứ hồi", "Round trip") : tour.airline}
              </span>
            </div>
          </div>

          {/* Key Highlights list matching snippet */}
          {tour.highlights && tour.highlights.length > 0 && (
            <ul className="text-xs text-gray-600 mb-5 space-y-1.5 min-h-[4.2rem]">
              {tour.highlights.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00A651] shrink-0 mt-0.5" />
                  <span className="line-clamp-1 font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & Arrow Action Button */}
        <div className="flex items-end justify-between pt-2 border-t border-gray-50">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
              {t(lang, "GIÁ TỪ", "FROM")}
            </div>
            {isContact ? (
              <div className="text-xl font-black text-[#1e64ae]">
                {t(lang, "Liên hệ", "Contact")}
              </div>
            ) : (
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651]">
                {tour.priceFormatted}
              </div>
            )}
          </div>

          {/* Rounded square arrow button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(tour);
            }}
            aria-label="Xem chi tiết"
            className="w-11 h-11 rounded-2xl bg-[#EEF4FB] text-[#1e64ae] group-hover:bg-[#1e64ae] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </Motion.div>
  );
});

LiquidTourCard.displayName = "LiquidTourCard";
