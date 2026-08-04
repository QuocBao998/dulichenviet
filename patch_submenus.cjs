const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const subOld = `  const subMenus: Record<string, { label: string; page: Page; sub?: { label: string; page: Page }[] }[]> = {
    "tour": [
      { label: "Tour Trong Nước", page: "tour" },
      { label: "Tour Nước Ngoài", page: "tour" },
      { label: "Tour Giờ Chót", page: "tour" },
      { 
        label: "Tour Hành Hương", 
        page: "tour",
        sub: [
          { label: "Tour Hành Hương Công Giáo", page: "tour" },
          { label: "Tour Hành Hương Phật Giáo", page: "tour" }
        ]
      },
    ],
    "ve-may-bay": [
      { label: "Vé Nội Địa", page: "ve-may-bay" },
      { label: "Vé Quốc Tế", page: "ve-may-bay" },
    ],
    "visa": [
      { label: "Dịch Vụ Passport", page: "visa" },
      { label: "Tư Vấn Visa", page: "visa" },
    ],
    "thong-tin": [
      { label: "Tin Tức Du Lịch", page: "thong-tin" },
      { label: "Nhật Ký Du Lịch", page: "thong-tin" },
      { label: "Cẩm Nang Du Lịch", page: "thong-tin" },
      { label: "Tư Vấn Du Lịch", page: "thong-tin" },
      { label: "Khuyến Mãi", page: "thong-tin" },
    ]
  };`;

const subNew = `  const subMenus: Record<string, { label: string; enLabel: string; page: Page; sub?: { label: string; enLabel: string; page: Page }[] }[]> = {
    "tour": [
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
    ],
    "ve-may-bay": [
      { label: "Vé Nội Địa", enLabel: "Domestic Flights", page: "ve-may-bay" },
      { label: "Vé Quốc Tế", enLabel: "International Flights", page: "ve-may-bay" },
    ],
    "visa": [
      { label: "Dịch Vụ Passport", enLabel: "Passport Services", page: "visa" },
      { label: "Tư Vấn Visa", enLabel: "Visa Consultation", page: "visa" },
    ],
    "thong-tin": [
      { label: "Tin Tức Du Lịch", enLabel: "Travel News", page: "thong-tin" },
      { label: "Nhật Ký Du Lịch", enLabel: "Travel Diaries", page: "thong-tin" },
      { label: "Cẩm Nang Du Lịch", enLabel: "Travel Guide", page: "thong-tin" },
      { label: "Tư Vấn Du Lịch", enLabel: "Travel Advice", page: "thong-tin" },
      { label: "Khuyến Mãi", enLabel: "Promotions", page: "thong-tin" },
    ]
  };`;

code = code.replace(subOld, subNew);

// Replace sub.label usage -> t(lang, sub.label, sub.enLabel)
code = code.replace(/\{sub\.label\}/g, `{t(lang, sub.label, sub.enLabel)}`);
code = code.replace(/\{deepSub\.label\}/g, `{t(lang, deepSub.label, deepSub.enLabel)}`);

// Fix search placeholder
code = code.replace(/placeholder="Tìm kiếm\.\.\."/g, `placeholder={t(lang, "Tìm kiếm...", "Search...")}`);

fs.writeFileSync('src/app/App.tsx', code);
