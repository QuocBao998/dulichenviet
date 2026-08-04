const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const tReplace = (pattern, vi, en) => {
  code = code.replace(pattern, `{t(lang, "${vi}", "${en}")}`);
};

// Replace strings in HomePage manually using replace() for complex blocks
code = code.replace(
  /Chắp Cánh Đam Mê <br \/>/,
  `{t(lang, "Chắp Cánh Đam Mê", "Ignite Your Passion for")} <br />`
);

code = code.replace(
  /Khám Phá Thế Giới/,
  `{t(lang, "Khám Phá Thế Giới", "Exploring the World")}`
);

code = code.replace(
  /Dịch vụ du lịch <strong className="text-white">TẤT CẢ TRONG MỘT<\/strong> — Tour trong &amp; ngoài nước, vé máy bay, dịch vụ visa và tổ chức sự kiện trọn gói\./,
  `{t(lang, "Dịch vụ du lịch ", "All-in-one travel services ")}<strong className="text-white">{t(lang, "TẤT CẢ TRONG MỘT", "ALL IN ONE")}</strong>{t(lang, " — Tour trong & ngoài nước, vé máy bay, dịch vụ visa và tổ chức sự kiện trọn gói.", " — Domestic & international tours, flights, visa services, and events.")}`
);

code = code.replace(
  />\s*ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI\s*<\/Motion.button>/,
  `>{t(lang, "ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI", "REGISTER NOW FOR OFFERS")}</Motion.button>`
);

code = code.replace(
  />\s*Nhận Tư Vấn\s*<\/Motion.button>/,
  `>{t(lang, "Nhận Tư Vấn", "Get Advice")}</Motion.button>`
);

// Search Bar
code = code.replace(
  /<label className="[^"]*">Điểm Đến<\/label>/,
  `<label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Điểm Đến", "Destination")}</label>`
);
code = code.replace(
  /<label className="[^"]*">Loại Tour<\/label>/,
  `<label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Loại Tour", "Tour Type")}</label>`
);
code = code.replace(
  /<label className="[^"]*">Thời Gian<\/label>/,
  `<label className="text-[11px] font-black text-[#003B5C]/70 uppercase tracking-widest block mb-2 pl-2">{t(lang, "Thời Gian", "Time")}</label>`
);

code = code.replace(
  /<option value="" className="text-gray-400">Bạn muốn đi đâu\?<\/option>/,
  `<option value="" className="text-gray-400">{t(lang, "Bạn muốn đi đâu?", "Where to?")}</option>`
);
code = code.replace(
  /<option value="">Tất cả loại tour<\/option>/,
  `<option value="">{t(lang, "Tất cả loại tour", "All tour types")}</option>`
);

code = code.replace(
  /Tour Trong Nước<\/option>/,
  `{t(lang, "Tour Trong Nước", "Domestic")}</option>`
);
code = code.replace(
  /Tour Ngoài Nước<\/option>/,
  `{t(lang, "Tour Ngoài Nước", "International")}</option>`
);
code = code.replace(
  /Hành Hương Công Giáo<\/option>/,
  `{t(lang, "Hành Hương Công Giáo", "Catholic Pilgrimage")}</option>`
);

code = code.replace(
  /> Tìm Kiếm/,
  `> {t(lang, "Tìm Kiếm", "Search")}`
);

// Featured Tours
code = code.replace(
  />\s*Khám Phá Ngay\s*<\/p>/,
  `> {t(lang, "Khám Phá Ngay", "Explore Now")}</p>`
);
code = code.replace(
  />Tour Nổi Bật Nhất<\/h2>/,
  `>{t(lang, "Tour Nổi Bật Nhất", "Most Featured Tours")}</h2>`
);
code = code.replace(
  />\s*Xem tất cả hành trình/,
  `> {t(lang, "Xem tất cả hành trình", "View all tours")}`
);
code = code.replace(
  /> Bay khứ hồi<\/div>/,
  `> {t(lang, "Bay khứ hồi", "Round trip")}</div>`
);
code = code.replace(
  />Giá từ<\/div>/,
  `>{t(lang, "Giá từ", "From")}</div>`
);

// Videos section
code = code.replace(
  />Trải Nghiệm Cùng Én Việt<\/h2>/,
  `>{t(lang, "Trải Nghiệm Cùng Én Việt", "Experience with Én Việt")}</h2>`
);
code = code.replace(
  /\{ src: IntroVideo, title: "Giới Thiệu Én Việt Group" \}/,
  `{ src: IntroVideo, title: t(lang, "Giới Thiệu Én Việt Group", "About Én Việt Group") }`
);
code = code.replace(
  /\{ src: TeamBuildingVideo, title: "Teambuilding & Sự Kiện" \}/,
  `{ src: TeamBuildingVideo, title: t(lang, "Teambuilding & Sự Kiện", "Teambuilding & Events") }`
);
code = code.replace(
  /\{ src: ChaoCamVideo, title: "Khám Phá Các Điểm Đến" \}/,
  `{ src: ChaoCamVideo, title: t(lang, "Khám Phá Các Điểm Đến", "Explore Destinations") }`
);

// Gallery
code = code.replace(
  />Thư Viện Hình Ảnh<\/p>/,
  `>{t(lang, "Thư Viện Hình Ảnh", "Photo Gallery")}</p>`
);
code = code.replace(
  />Khoảnh Khắc Đáng Nhớ<\/h2>/,
  `>{t(lang, "Khoảnh Khắc Đáng Nhớ", "Unforgettable Moments")}</h2>`
);
code = code.replace(
  /\{showAllPhotos \? "Thu gọn" : "Xem tất cả hình ảnh"\}/,
  `{showAllPhotos ? t(lang, "Thu gọn", "Collapse") : t(lang, "Xem tất cả hình ảnh", "View all photos")}`
);

fs.writeFileSync('src/app/App.tsx', code);
