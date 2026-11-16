import React from "react";
import { motion as Motion } from "motion/react";
import { Clock, Plane, Navigation, ArrowRight, Star, CheckCircle } from "lucide-react";
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

export const DOMESTIC_TRAVEL_FALLBACKS = [
  "https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=85", // Vịnh Hạ Long
  "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1000&q=85", // Tràng An Ninh Bình
  "https://images.unsplash.com/photo-1643799297057-374040b7db1b?w=1000&q=85", // Đà Lạt
  "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?w=1000&q=85", // Cầu Vàng Đà Nẵng
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1000&q=85", // Miền Tây Sông Nước
];

export function getSafeTourImage(tour: TourItem, idx = 0): string {
  if (tour.image && !tour.image.includes("placehold") && !tour.image.includes("600x400") && !tour.image.includes("via.placeholder")) {
    return tour.image;
  }
  const pool = tour.category === "trong-nuoc" ? DOMESTIC_TRAVEL_FALLBACKS : SCENIC_TRAVEL_FALLBACKS;
  const hash = (tour.id || tour.code || tour.title || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), idx);
  return pool[hash % pool.length];
}

interface LiquidTourCardProps {
  tour: TourItem;
  onSelect: (tour: TourItem) => void;
  onBook?: (tour: TourItem) => void;
  index?: number;
  badgeType?: "hot" | "new" | "price" | "local" | "trend" | "unique";
  featuredHighlight?: boolean;
}

export const LiquidTourCard = React.forwardRef<HTMLDivElement, LiquidTourCardProps>(
  function LiquidTourCard({ tour, onSelect, onBook, index = 0, badgeType, featuredHighlight = false }, ref) {
  const { lang } = useLang();
  const isContact = tour.price === null || tour.priceFormatted === "Liên hệ";
  const tourImg = getSafeTourImage(tour, index);

  const originalPriceFormatted = React.useMemo(() => {
    if (!featuredHighlight || typeof tour.price !== "number" || tour.price <= 0) return null;
    const bump = Math.max(1000000, Math.round((tour.price * 0.12) / 100000) * 100000);
    return `${(tour.price + bump).toLocaleString("vi-VN")} VNĐ`;
  }, [featuredHighlight, tour.price]);

  // Flag or country emoji
  const getCountryDisplay = (country: string, category?: TourItem["category"]) => {
    if (
      category === "trong-nuoc" ||
      country.includes("Việt Nam") ||
      country.includes("Miền Tây") ||
      country.includes("Miền Bắc") ||
      country.includes("Miền Trung") ||
      country.includes("Đà Lạt") ||
      country.includes("Huế") ||
      country.includes("Đà Nẵng") ||
      country.includes("Tây Ninh") ||
      country.includes("Nha Trang") ||
      country.includes("Bảo Lộc") ||
      country.includes("Tà Đùng") ||
      country.includes("Tà Xùa") ||
      country.includes("Cần Thơ") ||
      country.includes("Mỹ Tho") ||
      country.includes("Cà Mau")
    ) return "🇻🇳 " + country;
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
    if (country.includes("Châu Âu")) return "🇪🇺 " + country;
    if (country.includes("Tây Âu") || country.includes("Pháp")) return "🇫🇷 🇨🇭 " + country;
    if (country.includes("Đông Âu") || country.includes("Áo") || country.includes("Đức")) return "🇦🇹 🇩🇪 " + country;
    if (country.includes("Nam Âu") || country.includes("Tây Ban Nha") || country.includes("Bồ Đào Nha")) return "🇪🇸 🇵🇹 " + country;
    if (country.includes("Hoa Kỳ") || country.includes("Mỹ") || country.includes("USA")) return "🇺🇸 " + country;
    return "✈️ " + country;
  };

  // Badge styling matching the user's screenshot
  const renderBadge = () => {
    const rawBadge = (tour.badge || "HOT").toUpperCase();

    if ((tour.category === "trong-nuoc" || tour.cats?.includes("hanh-huong")) && tour.badge) {
      return (
        <span className="px-3.5 py-1.5 rounded-full font-black text-[11px] text-[#003B5C] bg-white/95 backdrop-blur-md shadow-md uppercase tracking-wide">
          {tour.badge}
        </span>
      );
    }

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
          {tour.badge || "NỘI ĐỊA"}
        </span>
      );
    }

    return (
      <span className="px-3.5 py-1.5 rounded-full font-black text-xs text-white bg-[#00A651] shadow-md uppercase tracking-wide">
        {tour.badge || "HOT"}
      </span>
    );
  };

  const isAirTransport = tour.category !== "trong-nuoc" || tour.airline.toLowerCase().includes("bay");

  return (
    <Motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.35), ease: "easeOut" }}
      whileHover={{
        y: featuredHighlight ? -10 : -8,
        transition: featuredHighlight
          ? { type: "spring", stiffness: 320, damping: 22 }
          : { duration: 0.25 }
      }}
      onClick={() => onSelect(tour)}
      className={`group relative flex flex-col rounded-[2.2rem] overflow-hidden bg-white border transition-all duration-300 cursor-pointer ${
        featuredHighlight
          ? "border-gray-100/90 shadow-[0_14px_42px_-12px_rgba(0,59,92,0.09)] hover:border-red-200/80 hover:shadow-[0_26px_58px_-12px_rgba(30,100,174,0.2),0_12px_28px_-8px_rgba(220,38,38,0.16)]"
          : "border-gray-100 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_50px_-10px_rgba(30,100,174,0.18)]"
      }`}
    >
      {/* ── Media slot with Top & Bottom Overlays ── */}
      <div className="relative h-60 md:h-64 w-full overflow-hidden shrink-0 rounded-t-[2.2rem]">
        <img
          src={tourImg}
          alt={tour.title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            const pool = tour.category === "trong-nuoc" ? DOMESTIC_TRAVEL_FALLBACKS : SCENIC_TRAVEL_FALLBACKS;
            target.src = pool[index % pool.length];
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Diagonal Liquid Glass Sheen on Hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[180%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
        />
        
        {/* Soft bottom vignette for country tag contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges: Left Badge + Right Star Circle */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none gap-2">
          {renderBadge()}

          {/* Star Circle Button */}
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-amber-400 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shrink-0">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Bottom Country Pill */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-sm">
            <span>{getCountryDisplay(tour.country, tour.category)}</span>
          </div>
        </div>
      </div>

      {/* ── Card Content Body ── */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tour Code */}
          {tour.code && (
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EEF4FB] text-[#1e64ae] font-mono text-[11px] font-black tracking-wide">
                {tour.code}
              </span>
            </div>
          )}

          {/* Title - Crisp bold navy 2 lines with headroom for Vietnamese stacked diacritics */}
          <h3
            className="text-[17px] md:text-lg font-extrabold text-[#003B5C] leading-[1.42] tracking-[-0.01em] pt-0.5 uppercase line-clamp-2 mb-4 group-hover:text-[#1e64ae] transition-colors"
            title={tour.title}
          >
            {tour.title}
          </h3>

          {/* Metadata pill container: Green Clock + Duration • Blue Transport */}
          <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-500 mb-5 bg-[#F8FAFC] py-2.5 px-4 rounded-full border border-gray-100">
            <div className="flex items-center gap-1.5 font-bold text-gray-600 shrink-0">
              <Clock className="w-4 h-4 text-[#00A651] shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <span className="text-gray-300 font-bold">•</span>
            <div className="flex items-center gap-1.5 font-bold text-gray-600 truncate">
              {isAirTransport ? (
                <Plane className="w-4 h-4 text-[#1e64ae] shrink-0" />
              ) : (
                <Navigation className="w-4 h-4 text-[#1e64ae] shrink-0" />
              )}
              <span className="truncate">
                {tour.airline === "Hàng không" ? t(lang, "Bay khứ hồi", "Round trip") : tour.airline}
              </span>
            </div>
          </div>

          {/* Key Highlights list matching snippet */}
          {tour.highlights && tour.highlights.length > 0 && (
            <ul className="text-xs text-gray-600 mb-5 space-y-1.5 min-h-[3.5rem]">
              {tour.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00A651] shrink-0 mt-0.5" />
                  <span className="line-clamp-1 font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & Arrow Action Button */}
        {featuredHighlight && !isContact ? (
          <div className="relative pt-3 mt-1">
            <div className="relative flex items-center justify-between gap-2">
              {/* Red Brush-Stroke Ribbon Price Container (with rhythmic heartbeat pulse) */}
              <div className="relative flex-1 min-w-0 -ml-3 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.04] origin-left">
                <div
                  className="brush-beat relative px-3.5 sm:px-4 py-3 pr-5 select-none"
                  style={{ animationDelay: `${(index % 4) * 0.45}s` }}
                >
                  {/* Organic Vector Brush-Stroke Background */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 280 88"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id={`brushGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="15%">
                        <stop offset="0%" stopColor="#9E140B" />
                        <stop offset="48%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#F0381F" />
                      </linearGradient>
                    </defs>
                    {/* Main brush stroke body with frayed bristle edges */}
                    <path
                      d="M14,14 C55,8 128,4 205,7 C242,8 265,6 277,11 L268,18 L279,22 L266,31 L276,40 L264,49 L274,59 L261,66 L270,74 C232,78 164,82 95,79 C52,77 24,82 4,76 L15,67 L2,60 L14,50 L4,41 L16,33 L6,25 L17,19 Z"
                      fill={`url(#brushGrad-${index})`}
                    />
                    {/* Subtle warm vermilion dry-brush accent highlight */}
                    <path
                      d="M28,20 C88,14 166,12 246,15 C255,15 262,17 255,21 C182,19 98,21 32,26 C24,26 22,21 28,20 Z"
                      fill="#FF7A59"
                      opacity="0.28"
                    />
                  </svg>

                  {/* Text Content Inside Brush Ribbon */}
                  <div className="relative z-10 flex flex-col">
                    {/* Top line: GIÁ TỪ + subtle crossed-out reference price on hover */}
                    <div className="flex items-center gap-2 mb-1 pl-0.5">
                      <span className="text-[10px] font-black text-white/95 uppercase tracking-wider leading-none drop-shadow-sm">
                        {t(lang, "GIÁ TỪ", "FROM")}
                      </span>
                      {originalPriceFormatted && (
                        <span className="text-[10px] font-bold text-white/80 line-through decoration-white/90 decoration-[1.5px] tabular-nums opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 leading-none">
                          {originalPriceFormatted}
                        </span>
                      )}
                    </div>

                    {/* Swaying Oversized Yellow-Orange Gradient Price Digits + VNĐ */}
                    <div
                      className="price-gentle-sway items-baseline gap-1 whitespace-nowrap"
                      style={{ animationDelay: `${(index % 4) * 0.45}s` }}
                    >
                      <span className="text-[28px] sm:text-[30px] lg:text-[23px] xl:text-[29px] font-black tracking-[-0.03em] tabular-nums leading-[0.95] bg-gradient-to-b from-[#FFF7AD] via-[#FFC82B] to-[#FF6A00] bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(95,10,5,0.85)]">
                        {tour.priceFormatted.replace(/\s*VNĐ$/i, "").trim()}
                      </span>
                      <span className="text-[11px] lg:text-[10px] xl:text-xs font-black tracking-wide leading-none bg-gradient-to-b from-[#FFF7AD] via-[#FFC82B] to-[#FF7B00] bg-clip-text text-transparent drop-shadow-[0_1.5px_2px_rgba(95,10,5,0.8)]">
                        VNĐ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frosted Glass Sky-Blue Arrow CTA (matching reference screenshot 2) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(tour);
                }}
                aria-label="Xem chi tiết"
                className="relative z-20 -ml-2.5 w-10 h-10 xl:w-11 xl:h-11 rounded-2xl bg-[#EBF5FF]/95 backdrop-blur-md border border-white text-[#1e64ae] group-hover:bg-gradient-to-r group-hover:from-[#1e64ae] group-hover:to-[#00A651] group-hover:text-white group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-[0_8px_20px_rgba(30,100,174,0.18)] group-hover:scale-105 shrink-0 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {tour.priceNote && (
              <div className="text-[11px] text-gray-500 font-medium mt-1.5 line-clamp-1" title={tour.priceNote}>
                {tour.priceNote}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-end justify-between gap-2 pt-3 border-t border-gray-100/80">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                {t(lang, "GIÁ TỪ", "FROM")}
              </div>
              {isContact ? (
                <div className="text-xl font-black text-[#1e64ae]">
                  {t(lang, "Liên hệ", "Contact")}
                </div>
              ) : (
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] tabular-nums">
                  {tour.priceFormatted}
                </div>
              )}
              {tour.priceNote && (
                <div className="text-[11px] text-gray-500 font-medium mt-0.5 line-clamp-1" title={tour.priceNote}>
                  {tour.priceNote}
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
        )}
      </div>
    </Motion.div>
  );
});

LiquidTourCard.displayName = "LiquidTourCard";
