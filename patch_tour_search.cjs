const fs = require('fs');

let code = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

// 1. We need to add "type" to state and Globe/ChevronDown to imports
if (!code.includes('Globe, ChevronDown')) {
  code = code.replace(
    /import \{ Search, MapPin, Calendar, Plane, ArrowRight, Star, Clock, Flame \} from "lucide-react";/,
    'import { Search, MapPin, Calendar, Plane, ArrowRight, Star, Clock, Flame, Globe, ChevronDown } from "lucide-react";'
  );
}

// Ensure type state exists
if (!code.includes('const [type, setType] = useState("");')) {
  code = code.replace(
    /const \[date, setDate\] = useState\(""\);/,
    'const [date, setDate] = useState("");\n  const [type, setType] = useState("");'
  );
}

// 2. Replace the existing Search Bar
const oldSearchBarRegex = /\{\/\* Search Bar \*\/\}[\s\S]*?<\/Motion\.div>\s*<\/div>/;

const liquidGlass = "bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl";

const newSearchBar = `{/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-16 relative z-30 perspective-1000">
          <Motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
        </div>`;

code = code.replace(oldSearchBarRegex, newSearchBar);

fs.writeFileSync('src/app/components/TourPage.tsx', code);
console.log('Tour search bar updated');
