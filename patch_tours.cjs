const fs = require('fs');
let appCode = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Update Page type
appCode = appCode.replace(
  /type Page = "home" \| "gioi-thieu" \| "tour" \| "golf" \| "ve-may-bay" \| "visa" \| "thong-tin" \| "lien-he";/,
  'type Page = "home" | "gioi-thieu" | "tour" | "tour-trong-nuoc" | "tour-nuoc-ngoai" | "tour-gio-chot" | "tour-hanh-huong" | "tour-hanh-huong-cong-giao" | "tour-hanh-huong-phat-giao" | "golf" | "ve-may-bay" | "visa" | "thong-tin" | "lien-he";'
);

// 2. Update subMenus for tour
const oldSubTour = `"tour": [
      { label: "Tour Trong Nước", enLabel: "Domestic Tours", page: "tour" },
      { label: "Tour Nước Ngoài", enLabel: "International Tours", page: "tour" },
      { label: "Tour Giờ Chót", enLabel: "Last Minute Tours", page: "tour" },
      { 
        label: "Tour Hành Hương", enLabel: "Pilgrimage Tours",
        page: "tour",
        sub: [
          { label: "Tour Hành Hương Công Giáo", enLabel: "Catholic Pilgrimage", page: "tour" },
          { label: "Tour Hành Hương Phật Giáo", enLabel: "Buddhist Pilgrimage", page: "tour" }
        ]
      },
    ],`;
const newSubTour = `"tour": [
      { label: "Tour Trong Nước", enLabel: "Domestic Tours", page: "tour-trong-nuoc" },
      { label: "Tour Nước Ngoài", enLabel: "International Tours", page: "tour-nuoc-ngoai" },
      { label: "Tour Giờ Chót", enLabel: "Last Minute Tours", page: "tour-gio-chot" },
      { 
        label: "Tour Hành Hương", enLabel: "Pilgrimage Tours",
        page: "tour-hanh-huong",
        sub: [
          { label: "Tour Hành Hương Công Giáo", enLabel: "Catholic Pilgrimage", page: "tour-hanh-huong-cong-giao" },
          { label: "Tour Hành Hương Phật Giáo", enLabel: "Buddhist Pilgrimage", page: "tour-hanh-huong-phat-giao" }
        ]
      },
    ],`;
appCode = appCode.replace(oldSubTour, newSubTour);

// 3. Update routing
const oldRouting = /\{page === "tour" && <TourPage \/>\}/;
const newRouting = `{page.startsWith("tour") && <TourPage category={page} />}`;
appCode = appCode.replace(oldRouting, newRouting);

fs.writeFileSync('src/app/App.tsx', appCode);

// 4. Update TourPage.tsx
let tourCode = fs.readFileSync('src/app/components/TourPage.tsx', 'utf8');

tourCode = tourCode.replace(/export function TourPage\(\) \{/, 'export function TourPage({ category = "tour" }: { category?: string }) {\n  const [dest, setDest] = useState("");\n  const [date, setDate] = useState("");');

const searchBar = `
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-16 relative z-30">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-full p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-2"
          >
            <div className="flex-1 relative flex items-center bg-gray-50/50 rounded-full hover:bg-white transition-colors">
              <MapPin className="absolute left-4 w-5 h-5 text-[#00A651]" />
              <input type="text" placeholder={t(lang, "Bạn muốn đi đâu?", "Where do you want to go?")} className="w-full pl-12 pr-4 py-3 md:py-4 bg-transparent border-none outline-none font-semibold text-[#003B5C] placeholder:text-gray-400" value={dest} onChange={(e) => setDest(e.target.value)} />
            </div>
            <div className="flex-1 relative flex items-center bg-gray-50/50 rounded-full hover:bg-white transition-colors">
              <Calendar className="absolute left-4 w-5 h-5 text-[#00A651]" />
              <input type="date" className="w-full pl-12 pr-4 py-3 md:py-4 bg-transparent border-none outline-none font-semibold text-[#003B5C] text-sm" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button className="bg-gradient-to-r from-[#1e64ae] to-[#00A651] hover:brightness-110 text-white font-black px-8 py-3 md:py-4 rounded-full transition-all shadow-md uppercase tracking-wide shrink-0">
              {t(lang, "Tìm Kiếm", "Search")}
            </button>
          </Motion.div>
        </div>
`;

tourCode = tourCode.replace(
  /<p className="text-gray-500 max-w-2xl mx-auto">Chọn điểm đến trong mơ của bạn và để chúng tôi lo phần còn lại. Rất nhiều tour du lịch hấp dẫn đang chờ đón.<\/p>\n\s*<\/Motion.div>/,
  '<p className="text-gray-500 max-w-2xl mx-auto">{t(lang, "Chọn điểm đến trong mơ của bạn và để chúng tôi lo phần còn lại. Rất nhiều tour du lịch hấp dẫn đang chờ đón.", "Choose your dream destination and let us handle the rest. Many exciting tours await you.")}</p>\n        </Motion.div>\n' + searchBar
);

// Add dynamic title mapping based on category
const titleMap = `
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
`;

tourCode = tourCode.replace(
  /export function TourPage\(\{ category = "tour" \}: \{ category\?: string \}\) \{[\s\S]*?const \{ lang \} = useLang\(\);/,
  `export function TourPage({ category = "tour" }: { category?: string }) {\n  const [dest, setDest] = useState("");\n  const [date, setDate] = useState("");\n  const { lang } = useLang();\n${titleMap}`
);

tourCode = tourCode.replace(
  /<h1 className="text-4xl md:text-5xl font-black text-\[#003B5C\] mb-4">Khám Phá Các Hành Trình<\/h1>/,
  '<h1 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">{t(lang, pageTitle.vi, pageTitle.en)}</h1>'
);

fs.writeFileSync('src/app/components/TourPage.tsx', tourCode);
console.log('Tours patched');
