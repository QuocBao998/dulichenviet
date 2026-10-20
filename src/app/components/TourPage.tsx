import { useState, useEffect, useRef, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useLang, t } from "../App";
import {
  Search, MapPin, Calendar, Clock, Globe, ChevronDown, Phone, X,
  CheckCircle, ChevronLeft, ChevronRight, Plane, Tag, Sparkles, Filter, RotateCcw, SlidersHorizontal
} from "lucide-react";
import {
  TourItem,
  TOUR_DATASET,
  ALL_TOURS,
  COUNTRIES,
  PRICE_RANGES,
  DURATION_FILTERS
} from "../../data/toursData";
import { LiquidTourCard } from "./LiquidTourCard";
import { LiquidTourModal } from "./LiquidTourModal";

const PER_PAGE = 8;

type SortOpt = "newest" | "price-asc" | "price-desc" | "duration-asc" | "name-az";

const PAGE_TITLE: Record<string, { vi: string; en: string }> = {
  "tour":                      { vi: "Khám Phá Tất Cả Tour Du Lịch",  en: "All Travel Tours" },
  "tour-trong-nuoc":           { vi: "Tour Du Lịch Trong Nước",       en: "Domestic Tours" },
  "tour-nuoc-ngoai":           { vi: "Tour Du Lịch Nước Ngoài",       en: "International Tours" },
  "tour-trung-quoc":           { vi: "Tour Du Lịch Trung Quốc",       en: "China Tours" },
  "tour-han-quoc":             { vi: "Tour Du Lịch Hàn Quốc",         en: "Korea Tours" },
  "tour-dong-nam-a":           { vi: "Tour Du Lịch Đông Nam Á",       en: "Southeast Asia Tours" },
  "tour-chau-a":               { vi: "Tour Du Lịch Châu Á",           en: "Asia Tours" },
  "tour-chau-au":              { vi: "Tour Du Lịch Châu Âu",          en: "Europe Tours" },
  "tour-chau-my":              { vi: "Tour Du Lịch Châu Mỹ",          en: "Americas Tours" },
  "tour-gio-chot":             { vi: "Tour Giờ Chót – Giá Sốc",       en: "Last Minute Deals" },
  "tour-hanh-huong":           { vi: "Tour Hành Hương Tâm Linh",      en: "Pilgrimage Tours" },
  "tour-hanh-huong-cong-giao": { vi: "Tour Hành Hương Công Giáo",     en: "Catholic Pilgrimage" },
  "tour-hanh-huong-phat-giao": { vi: "Tour Hành Hương Phật Giáo",     en: "Buddhist Pilgrimage" },
};

function getPageRange(cur: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 3) return [1, 2, 3, 4, "...", total];
  if (cur >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
  return [1, "...", cur - 1, cur, cur + 1, "...", total];
}

export function TourPage({ category = "tour", openForm }: { category?: string; openForm?: () => void }) {
  const { lang } = useLang();
  
  // Filter states
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Tất cả quốc gia");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedAirline, setSelectedAirline] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOpt>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTour, setSelectedTour] = useState<TourItem | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const pageTitle = PAGE_TITLE[category] ?? PAGE_TITLE["tour"];
  const isGioChot = category === "tour-gio-chot";

  // Extract unique airlines from dataset
  const availableAirlines = useMemo(() => {
    const list = Array.from(new Set(ALL_TOURS.map(t => t.airline))).filter(Boolean);
    return ["Tất cả hãng", ...list];
  }, []);

  // Reset to page 1 on filter modification
  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchText, selectedCountry, selectedPriceRange, selectedDuration, selectedAirline, sortBy]);

  // Base list depending on active page category
  const baseTours = useMemo(() => {
    if (category === "tour-trong-nuoc") {
      return ALL_TOURS.filter(t => t.category === "trong-nuoc");
    }
    if (category === "tour-nuoc-ngoai") {
      return TOUR_DATASET.Tour_Ngoai_Nuoc;
    }
    if (category === "tour-trung-quoc") {
      return TOUR_DATASET.Tour_Trung_Quoc;
    }
    if (category === "tour-han-quoc") {
      return TOUR_DATASET.Tour_Han_Quoc;
    }
    if (category === "tour-dong-nam-a") {
      return TOUR_DATASET.Tour_Dong_Nam_A;
    }
    if (category === "tour-chau-a") {
      return TOUR_DATASET.Tour_Chau_A;
    }
    if (category === "tour-chau-au") {
      return TOUR_DATASET.Tour_Chau_Au;
    }
    if (category === "tour-chau-my") {
      return TOUR_DATASET.Tour_Chau_My;
    }
    return ALL_TOURS;
  }, [category]);

  // Main filter pipeline
  const filteredTours = useMemo(() => {
    return baseTours.filter(tour => {
      // 1. Country Filter
      if (selectedCountry !== "Tất cả quốc gia") {
        if (!tour.country.toLowerCase().includes(selectedCountry.toLowerCase())) {
          return false;
        }
      }

      // 2. Price Filter
      if (selectedPriceRange !== "all") {
        const foundRange = PRICE_RANGES.find(r => r.id === selectedPriceRange);
        if (foundRange) {
          if (foundRange.min === -1) {
            // Price on contact
            if (tour.price !== null) return false;
          } else {
            if (tour.price === null) return false;
            if (tour.price < foundRange.min || tour.price > foundRange.max) return false;
          }
        }
      }

      // 3. Duration Filter
      if (selectedDuration !== "all") {
        const durConfig = DURATION_FILTERS.find(d => d.id === selectedDuration);
        if (durConfig) {
          if (tour.durationDays < durConfig.minDays || tour.durationDays > durConfig.maxDays) {
            return false;
          }
        }
      }

      // 4. Airline Filter
      if (selectedAirline !== "all" && selectedAirline !== "Tất cả hãng") {
        if (tour.airline !== selectedAirline) {
          return false;
        }
      }

      // 5. Keyword search: title, itinerary, highlights, country, code
      if (searchText.trim()) {
        const q = searchText.toLowerCase().trim();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesItinerary = tour.itinerary.toLowerCase().includes(q);
        const matchesCountry = tour.country.toLowerCase().includes(q);
        const matchesCode = tour.code.toLowerCase().includes(q);
        const matchesHighlights = tour.highlights.some(hl => hl.toLowerCase().includes(q));
        if (!matchesTitle && !matchesItinerary && !matchesCountry && !matchesCode && !matchesHighlights) {
          return false;
        }
      }

      return true;
    });
  }, [baseTours, selectedCountry, selectedPriceRange, selectedDuration, selectedAirline, searchText]);

  // Sorting
  const sortedTours = useMemo(() => {
    const list = [...filteredTours];
    if (sortBy === "price-asc") {
      return list.sort((a, b) => (a.price ?? 999999999) - (b.price ?? 999999999));
    }
    if (sortBy === "price-desc") {
      return list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }
    if (sortBy === "duration-asc") {
      return list.sort((a, b) => a.durationDays - b.durationDays);
    }
    if (sortBy === "name-az") {
      return list.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    }
    // Newest / Default
    return list;
  }, [filteredTours, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedTours.length / PER_PAGE);
  const paginatedTours = sortedTours.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const startIdx = sortedTours.length === 0 ? 0 : (currentPage - 1) * PER_PAGE + 1;
  const endIdx = Math.min(currentPage * PER_PAGE, sortedTours.length);

  const activeFilterCount = [
    selectedCountry !== "Tất cả quốc gia" ? 1 : 0,
    selectedPriceRange !== "all" ? 1 : 0,
    selectedDuration !== "all" ? 1 : 0,
    selectedAirline !== "all" && selectedAirline !== "Tất cả hãng" ? 1 : 0,
    searchText.trim() !== "" ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  const clearAllFilters = () => {
    setSelectedCountry("Tất cả quốc gia");
    setSelectedPriceRange("all");
    setSelectedDuration("all");
    setSelectedAirline("all");
    setSearchText("");
    setSortBy("newest");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f6fa] via-[#f7fbf9] to-[#ffffff] pb-28">
      {/* ── Subpage Header with Liquid Glass ambient glow ── */}
      <div className="relative pt-10 pb-12 px-4 overflow-hidden bg-gradient-to-r from-[#003B5C] via-[#1e64ae] to-[#00A651]">
        {/* Soft background light bubbles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#00E676]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/95 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
              <span>{t(lang, "Hành trình đẳng cấp · Giá tốt nhất", "Premium Tours · Best Prices")}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
              {t(lang, pageTitle.vi, pageTitle.en)}
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-medium">
              {t(
                lang,
                "Khám phá các điểm đến hot nhất mùa này với lịch trình chọn lọc kỹ lưỡng, dịch vụ trọn gói và hướng dẫn viên đồng hành tận tâm.",
                "Discover trending travel destinations with hand-crafted itineraries, all-inclusive packages and dedicated tour guides."
              )}
            </p>
          </Motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Special case: Tour Giờ Chót */}
        {isGioChot ? (
          <div
            className="text-center py-20 px-6 rounded-3xl max-w-3xl mx-auto my-8 relative overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 20px 50px -10px rgba(0, 59, 92, 0.1)"
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
              <Clock className="w-10 h-10 animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#003B5C] mb-3">
              {t(lang, "Tour Giờ Chót – Giảm Giá Đến 40%", "Last Minute Deals – Up to 40% Off")}
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
              {t(
                lang,
                "Danh sách vé giờ chót và khuyến mãi đặc biệt được cập nhật hàng ngày tại văn phòng Én Việt. Vui lòng để lại thông tin để nhận bảng giá nóng nhất!",
                "Exclusive last-minute departures and discounted seats are updated daily. Contact our team to receive instant hot deals!"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openForm}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white font-black text-sm uppercase tracking-wide hover:brightness-110 shadow-lg shadow-blue-900/20 transition-all"
              >
                {t(lang, "Đăng Ký Nhận Vé Giờ Chót", "Get Last Minute Alerts")}
              </button>
              <a
                href="tel:0964110000"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-[#1e64ae] text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-black text-sm transition-all"
              >
                <Phone className="w-4 h-4" /> 0964.110.000
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* ── Mobile Filter Trigger Button ── */}
            <div className="lg:hidden w-full flex items-center justify-between gap-3">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-black text-sm text-[#003B5C] shadow-md transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.9)"
                }}
              >
                <Filter className="w-4 h-4 text-[#00A651]" />
                <span>{t(lang, "Bộ Lọc & Tìm Kiếm", "Filters & Search")}</span>
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#1e64ae] text-white text-[10px] flex items-center justify-center font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="p-3 rounded-2xl bg-red-50 text-red-600 border border-red-200 text-xs font-bold flex items-center gap-1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* ── Liquid Glass Sidebar Filter (Matching User Screenshot) ── */}
            <Motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`w-full lg:w-[320px] shrink-0 rounded-[2.2rem] p-6 lg:p-7 transition-all duration-300 lg:sticky lg:top-28 self-start z-30 bg-white border border-gray-100 shadow-[0_15px_45px_-10px_rgba(0,59,92,0.08)] ${
                mobileFilterOpen ? "block" : "hidden lg:block"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="w-5 h-5 text-[#00A651]" />
                  <h3 className="font-black text-lg text-[#003B5C]">
                    {t(lang, "Bộ Lọc Hành Trình", "Tour Filters")}
                  </h3>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{t(lang, "Đặt lại", "Reset")}</span>
                  </button>
                )}
              </div>

              {/* 1. TỪ KHOÁ TÌM KIẾM */}
              <div className="mb-6">
                <label className="text-xs font-black text-[#003B5C]/80 uppercase tracking-wider block mb-2.5">
                  {t(lang, "TỪ KHOÁ TÌM KIẾM", "SEARCH KEYWORD")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={t(lang, "Tên tour, điểm đến, Phú Sĩ...", "Tour name, destination...")}
                    className="w-full pl-10 pr-9 py-3 rounded-2xl text-xs font-bold text-[#003B5C] placeholder:text-gray-400 bg-white border border-gray-200/80 focus:border-[#00A651] focus:outline-none focus:ring-2 focus:ring-[#00A651]/20 transition-all shadow-xs"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  {searchText && (
                    <button
                      onClick={() => setSearchText("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* 2. QUỐC GIA ĐIỂM ĐẾN */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <label className="text-xs font-black text-[#003B5C]/80 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>{t(lang, "QUỐC GIA ĐIỂM ĐẾN", "DESTINATION COUNTRY")}</span>
                  <Globe className="w-4 h-4 text-[#00A651]" />
                </label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 rounded-2xl text-xs font-bold text-[#003B5C] bg-white border border-gray-200/80 appearance-none cursor-pointer focus:border-[#1e64ae] focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/20 transition-all shadow-xs"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 3. MỨC GIÁ TRỌN GÓI */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <label className="text-xs font-black text-[#003B5C]/80 uppercase tracking-wider block mb-3">
                  {t(lang, "MỨC GIÁ TRỌN GÓI", "PRICE RANGE")}
                </label>
                <div className="space-y-1.5">
                  {PRICE_RANGES.map((pr) => {
                    const active = selectedPriceRange === pr.id;
                    return (
                      <label
                        key={pr.id}
                        onClick={() => setSelectedPriceRange(pr.id)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-full text-xs cursor-pointer transition-all ${
                          active
                            ? "bg-[#165ba2] text-white font-bold shadow-md shadow-blue-900/15"
                            : "text-gray-700 font-semibold hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="price-filter"
                          checked={active}
                          onChange={() => setSelectedPriceRange(pr.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            active
                              ? "border-white bg-transparent"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="truncate">{t(lang, pr.label, pr.en)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 4. THỜI GIAN CHUYẾN ĐI */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <label className="text-xs font-black text-[#003B5C]/80 uppercase tracking-wider block mb-3">
                  {t(lang, "THỜI GIAN CHUYẾN ĐI", "TRIP DURATION")}
                </label>
                <div className="space-y-1.5">
                  {DURATION_FILTERS.map((df) => {
                    const active = selectedDuration === df.id;
                    return (
                      <label
                        key={df.id}
                        onClick={() => setSelectedDuration(df.id)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-full text-xs cursor-pointer transition-all ${
                          active
                            ? "bg-[#00A651] text-white font-bold shadow-md shadow-emerald-900/15"
                            : "text-gray-700 font-semibold hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="duration-filter"
                          checked={active}
                          onChange={() => setSelectedDuration(df.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            active
                              ? "border-white bg-transparent"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="truncate">{t(lang, df.label, df.en)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 5. HÃNG HÀNG KHÔNG */}
              <div className="mb-6">
                <label className="text-xs font-black text-[#003B5C]/80 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>{t(lang, "HÃNG HÀNG KHÔNG", "AIRLINES")}</span>
                  <Plane className="w-4 h-4 text-[#1e64ae]" />
                </label>
                <div className="relative">
                  <select
                    value={selectedAirline}
                    onChange={(e) => setSelectedAirline(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 rounded-2xl text-xs font-bold text-[#003B5C] bg-white border border-gray-200/80 appearance-none cursor-pointer focus:border-[#1e64ae] focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/20 transition-all shadow-xs"
                  >
                    {availableAirlines.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* XÓA TẤT CẢ BỘ LỌC Button */}
              <button
                onClick={clearAllFilters}
                className="w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-gray-600 bg-[#F3F4F6] hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {t(lang, "XÓA TẤT CẢ BỘ LỌC", "CLEAR ALL FILTERS")}
              </button>
            </Motion.aside>

            {/* ── Main Tour Results Grid ── */}
            <div ref={resultsRef} className="flex-1 min-w-0">
              {/* Header Sort & Counter Bar */}
              <div
                className="p-4 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 4px 20px rgba(0, 59, 92, 0.04)"
                }}
              >
                <div className="text-xs md:text-sm text-gray-600">
                  {sortedTours.length === 0 ? (
                    <span className="font-bold text-gray-400">{t(lang, "Không tìm thấy kết quả", "No tours match")}</span>
                  ) : (
                    <span>
                      {t(lang, "Hiển thị", "Showing")} <strong className="text-[#003B5C] font-black">{startIdx}–{endIdx}</strong> {t(lang, "trong tổng số", "of")} <strong className="text-[#003B5C] font-black">{sortedTours.length}</strong> {t(lang, "tour", "tours")}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-400 hidden sm:inline">{t(lang, "Sắp xếp theo:", "Sort by:")}</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOpt)}
                      className="pl-3 pr-8 py-2 rounded-xl text-xs font-bold text-[#003B5C] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1e64ae]/20"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.9)"
                      }}
                    >
                      <option value="newest">{t(lang, "Mới nhất", "Newest")}</option>
                      <option value="price-asc">{t(lang, "Giá: Thấp đến cao", "Price: Low to High")}</option>
                      <option value="price-desc">{t(lang, "Giá: Cao đến thấp", "Price: High to Low")}</option>
                      <option value="duration-asc">{t(lang, "Thời gian ngắn nhất", "Shortest duration")}</option>
                      <option value="name-az">{t(lang, "Tên: A đến Z", "Name: A to Z")}</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filter Badges */}
              {activeFilterCount > 0 && (
                <div className="flex items-center gap-2 flex-wrap mb-6">
                  <span className="text-xs text-gray-400 font-bold">{t(lang, "Đang lọc:", "Active filters:")}</span>
                  {selectedCountry !== "Tất cả quốc gia" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#1e64ae]">
                      <span>{selectedCountry}</span>
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCountry("Tất cả quốc gia")} />
                    </span>
                  )}
                  {selectedPriceRange !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#00A651]">
                      <span>{selectedPriceRange}</span>
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedPriceRange("all")} />
                    </span>
                  )}
                  {selectedDuration !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      <span>{DURATION_FILTERS.find(d => d.id === selectedDuration)?.label}</span>
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDuration("all")} />
                    </span>
                  )}
                  {selectedAirline !== "all" && selectedAirline !== "Tất cả hãng" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                      <span>{selectedAirline}</span>
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedAirline("all")} />
                    </span>
                  )}
                  {searchText.trim() && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-800">
                      <span>"{searchText}"</span>
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchText("")} />
                    </span>
                  )}
                </div>
              )}

              {/* Empty state */}
              {sortedTours.length === 0 && (
                <div
                  className="text-center py-24 px-6 rounded-3xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)"
                  }}
                >
                  <Globe className="w-14 h-14 mx-auto mb-4 text-[#1e64ae]/30" />
                  <h3 className="text-lg font-black text-[#003B5C] mb-2">
                    {t(lang, "Không tìm thấy tour phù hợp", "No matching tours found")}
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    {t(
                      lang,
                      "Hãy thử thay đổi từ khoá tìm kiếm hoặc mở rộng khoảng giá và thời gian của bạn.",
                      "Try adjusting your filters, searching with different keywords, or clearing your selections."
                    )}
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white text-xs font-black uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
                  >
                    {t(lang, "Xóa tất cả bộ lọc", "Reset Filters")}
                  </button>
                </div>
              )}

              {/* Liquid Glass Tours Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedTours.map((tour, index) => (
                  <LiquidTourCard
                    key={tour.id}
                    tour={tour}
                    index={index}
                    onSelect={(t) => setSelectedTour(t)}
                    onBook={(t) => {
                      setSelectedTour(t);
                    }}
                  />
                ))}
              </div>

              {/* ── Action Pagination (1, 2 ... 16) ── */}
              {totalPages > 1 && (
                <div 
                  className="mt-12 p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.75)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.85)",
                    boxShadow: "0 10px 25px -5px rgba(0, 59, 92, 0.05)"
                  }}
                >
                  {/* Page Status indicator */}
                  <div className="text-xs font-bold text-gray-500">
                    {t(lang, "Trang", "Page")}{" "}
                    <strong className="text-[#003B5C] font-black text-sm">{currentPage}</strong> /{" "}
                    <strong className="text-[#003B5C] font-black text-sm">{totalPages}</strong>{" "}
                    <span className="text-gray-400 font-normal">
                      ({t(lang, "Tổng cộng", "Total")} {sortedTours.length} {t(lang, "tour", "tours")})
                    </span>
                  </div>

                  {/* Numbered Action Buttons: 1, 2 ... 16 */}
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    {/* First Page Button */}
                    <button
                      onClick={() => {
                        setCurrentPage(1);
                        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      title="Trang đầu tiên"
                      className="px-2.5 h-10 rounded-xl font-bold text-xs bg-white/90 hover:bg-white text-[#003B5C] border border-gray-200/80 shadow-sm disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      « Đầu
                    </button>

                    {/* Previous Button */}
                    <button
                      onClick={() => {
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      title="Trang trước"
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm bg-white/90 hover:bg-white text-[#003B5C] border border-gray-200/80 shadow-sm disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Numeric buttons: e.g. 1, 2, 3, 4 ... 16 */}
                    {getPageRange(currentPage, totalPages).map((p, i) =>
                      p === "..." ? (
                        <span key={`dots-${i}`} className="w-8 text-center text-gray-400 font-bold text-sm">
                          …
                        </span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => {
                            setCurrentPage(p as number);
                            resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${
                            p === currentPage
                              ? "bg-gradient-to-r from-[#1e64ae] to-[#00A651] text-white shadow-md shadow-blue-900/20 scale-105"
                              : "bg-white/90 hover:bg-white text-[#003B5C] border border-gray-200/80 shadow-sm hover:border-[#1e64ae]"
                          }`}
                        >
                          {p}
                        </button>
                      )
                    )}

                    {/* Next Button */}
                    <button
                      onClick={() => {
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      title="Trang tiếp theo"
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm bg-white/90 hover:bg-white text-[#003B5C] border border-gray-200/80 shadow-sm disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Last Page Button */}
                    <button
                      onClick={() => {
                        setCurrentPage(totalPages);
                        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      title={`Trang cuối (${totalPages})`}
                      className="px-2.5 h-10 rounded-xl font-bold text-xs bg-white/90 hover:bg-white text-[#003B5C] border border-gray-200/80 shadow-sm disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      Cuối ({totalPages}) »
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Liquid Glass Detail Modal ── */}
      <AnimatePresence>
        {selectedTour && (
          <LiquidTourModal
            tour={selectedTour}
            onClose={() => setSelectedTour(null)}
            openForm={openForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
