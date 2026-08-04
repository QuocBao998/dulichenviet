import { useLang, t } from "../App";
import HotIcon from "../../imports/1108.png";
import { useState } from "react";
import { motion as Motion } from "motion/react";
import { Search, MapPin, Calendar, Plane, ArrowRight, Star, Clock, Flame, Globe, ChevronDown } from "lucide-react";

const tours = [
  { img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80", country: "🇯🇵 Nhật Bản", title: "Khám Phá Nhật Bản – Mùa Hoa Tử Đằng Tuyệt Đẹp", duration: "6N5Đ", price: "45.888.000đ", tag: "Hot" },
  { img: "https://images.unsplash.com/photo-1752228898255-edf840342a9d?w=800&q=80", country: "🇹🇷 Thổ Nhĩ Kỳ", title: "Hành Trình Vàng Istanbul – Cappadocia", duration: "8N7Đ", price: "48.800.000đ", tag: "Mới" },
  { img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80", country: "🇹🇭 Thái Lan", title: "Bangkok – Pattaya Thiên Đường Mua Sắm", duration: "5N4Đ", price: "7.490.000đ", tag: "Giá Tốt" },
  { img: "https://images.unsplash.com/photo-1688952397229-d4260e2630ba?w=800&q=80", country: "🇻🇳 Việt Nam", title: "Săn Mây Trùng Điệp Đà Lạt – Langbiang", duration: "3N2Đ", price: "2.790.000đ", tag: "Nội Địa" },
  { img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80", country: "🇦🇪 Dubai", title: "Hành Trình Xa Hoa Dubai - Abu Dhabi", duration: "5N4Đ", price: "28.990.000đ", tag: "Cao Cấp" },
  { img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", country: "🇫🇷 Châu Âu", title: "Khám Phá Châu Âu: Pháp - Thụy Sĩ - Ý", duration: "10N9Đ", price: "75.000.000đ", tag: "Hot" },
];

export function TourPage({ category = "tour" }: { category?: string }) {
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const { lang } = useLang();

  const titleMapping: Record<string, {vi: string, en: string}> = {
    "tour": { vi: "Khám Phá Các Hành Trình", en: "Explore All Tours" },
    "tour-trong-nuoc": { vi: "Tour Trong Nước", en: "Domestic Tours" },
    "tour-nuoc-ngoai": { vi: "Tour Nước Ngoài", en: "International Tours" },
    "tour-gio-chot": { vi: "Tour Giờ Chót Giá Tốt", en: "Last Minute Deals" },
    "tour-hanh-huong": { vi: "Tour Hành Hương", en: "Pilgrimage Tours" },
    "tour-hanh-huong-cong-giao": { vi: "Tour Hành Hương Công Giáo", en: "Catholic Pilgrimage" },
    "tour-hanh-huong-phat-giao": { vi: "Tour Hành Hương Phật Giáo", en: "Buddhist Pilgrimage" },
  };
  const pageTitle = titleMapping[category] || titleMapping["tour"];


  return (
    <div className="pt-12 pb-24 min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">{t(lang, pageTitle.vi, pageTitle.en)}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">{t(lang, "Chọn điểm đến trong mơ của bạn và để chúng tôi lo phần còn lại. Rất nhiều tour du lịch hấp dẫn đang chờ đón.", "Choose your dream destination and let us handle the rest. Many exciting tours await you.")}</p>
        </Motion.div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-16 relative z-30 perspective-1000">
          <Motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2rem] p-4 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="group">
                <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Điểm Đến", "Destination")}</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                  <select
                    className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md"
                    value={dest} onChange={(e) => setDest(e.target.value)}
                  >
                    <option value="" className="text-gray-400">{t(lang, "Bạn muốn đi đâu?", "Where to?")}</option>
                    {["Nhật Bản", "Thổ Nhĩ Kỳ", "Hàn Quốc", "Thái Lan", "Dubai", "Châu Âu", "Đà Lạt", "Hà Giang", "Hạ Long"].map((d) => (
                      <option key={d} value={d} className="text-[#003B5C] font-semibold">{d}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/40 pointer-events-none" />
                </div>
              </div>
              <div className="group">
                <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Loại Tour", "Tour Type")}</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                  <select
                    className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold appearance-none cursor-pointer transition-all shadow-sm group-hover:shadow-md"
                    value={type} onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">{t(lang, "Tất cả loại tour", "All tour types")}</option>
                    <option>{t(lang, "Tour Trong Nước", "Domestic")}</option>
                    <option>{t(lang, "Tour Ngoài Nước", "International")}</option>
                    <option>Golf Trip</option>
                    <option>{t(lang, "Hành Hương Công Giáo", "Catholic Pilgrimage")}</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003B5C]/40 pointer-events-none" />
                </div>
              </div>
              <div className="group">
                <label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Thời Gian", "Time")}</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A651] group-focus-within:text-[#1e64ae] transition-colors" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 rounded-2xl text-[14px] focus:outline-none focus:ring-4 focus:ring-[#00A651]/20 text-[#003B5C] font-bold transition-all shadow-sm group-hover:shadow-md"
                    value={date} onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-[54px] bg-gradient-to-r from-[#1e64ae] to-[#77c14d] hover:brightness-110 text-white font-black text-sm rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 uppercase tracking-wide"
                >
                  <Search className="w-5 h-5" /> {t(lang, "Tìm Kiếm", "Search")}
                </Motion.button>
              </div>
            </div>
          </Motion.div>
        </div>


        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Filter */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-1/4 shrink-0 bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 sticky top-32 self-start h-fit z-20"
          >
            <h3 className="font-extrabold text-lg text-[#003B5C] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00A651] rounded-full" />
              {t(lang, "Lọc Kết Quả", "Filter Results")}
            </h3>
            
            <div className="space-y-6">
              {/* Filter 1 */}
              <div>
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Điểm Đến", "Destination")}</h4>
                <div className="space-y-2">
                  {["Châu Á", "Châu Âu", "Châu Mỹ", "Trong Nước"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors">
                         {/* Checkbox logic would go here */}
                      </div>
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 2 */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Thời Gian", "Duration")}</h4>
                <div className="space-y-2">
                  {["1 - 3 Ngày", "4 - 7 Ngày", "Trên 7 Ngày"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors" />
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 3 */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#003B5C] text-sm mb-3">{t(lang, "Khoảng Giá", "Price Range")}</h4>
                <div className="space-y-2">
                  {["Dưới 5 Triệu", "5 - 15 Triệu", "15 - 30 Triệu", "Trên 30 Triệu"].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-[#1e64ae] flex items-center justify-center transition-colors" />
                      <span className="text-sm text-gray-600 font-medium group-hover:text-[#1e64ae] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-50 text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-bold py-3 rounded-xl transition-colors text-sm uppercase tracking-wide">
                {t(lang, "Áp Dụng Lọc", "Apply Filters")}
              </button>
            </div>
          </Motion.div>

          {/* Main Grid */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium text-sm">
                {t(lang, "Hiển thị", "Showing")} <strong className="text-[#003B5C]">6</strong> {t(lang, "kết quả", "results")}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">{t(lang, "Sắp xếp:", "Sort by:")}</span>
                <select className="bg-white border border-gray-200 text-[#003B5C] text-sm rounded-lg px-3 py-1.5 font-semibold outline-none focus:border-[#1e64ae]">
                  <option>{t(lang, "Nổi bật nhất", "Most Featured")}</option>
                  <option>{t(lang, "Giá thấp đến cao", "Price: Low to High")}</option>
                  <option>{t(lang, "Giá cao đến thấp", "Price: High to Low")}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
              {tours.map((tour, idx) => (
                <Motion.div
                  key={tour.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: -2 }}
                  className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D2E]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className={`text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-wide ${
        tour.tag === "Hot" ? "bg-red-500/90 text-white" : "bg-white/90 text-[#003B5C]"
      }`}>
        {tour.tag} {tour.tag === "Hot" && <img src={HotIcon} className="w-4 h-4 inline-block ml-1 -mt-1 drop-shadow-sm" alt="hot" />}
      </span>
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white shadow-sm border border-white/30">
                         <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-[#003B5C] text-lg leading-snug mb-4 line-clamp-2 group-hover:text-[#1e64ae] transition-colors">{tour.title}</h3>
                    <div className="mt-auto">
                      <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#00A651]" /> {tour.duration}</div>
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        <div className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#1e64ae]" /> Bay khứ hồi</div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{t(lang, "Giá từ", "From")}</div>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#00A651] font-black text-xl">{tour.price}</div>
                        </div>
                        <div className="bg-blue-50 text-[#1e64ae] group-hover:bg-[#1e64ae] group-hover:text-white p-3 rounded-xl transition-colors shadow-sm">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#1e64ae] shadow-md">1</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">2</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">3</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-500 bg-white hover:bg-gray-100 transition-colors border border-gray-200">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}