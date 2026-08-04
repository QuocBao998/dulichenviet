const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const navOld = `const NAV: { label: string; page: Page }[] = [
  { label: "Trang Chủ", page: "home" },
  { label: "Giới Thiệu", page: "gioi-thieu" },
  { label: "Tour", page: "tour" },
  { label: "Golf Trip", page: "golf" },
  { label: "Vé Máy Bay", page: "ve-may-bay" },
  { label: "Dịch Vụ Visa", page: "visa" },
  { label: "Thông Tin Du Lịch", page: "thong-tin" },
  { label: "Liên Hệ", page: "lien-he" },
];`;

const navNew = `const NAV: { label: string; enLabel: string; page: Page }[] = [
  { label: "Trang Chủ", enLabel: "Home", page: "home" },
  { label: "Giới Thiệu", enLabel: "About", page: "gioi-thieu" },
  { label: "Tour", enLabel: "Tours", page: "tour" },
  { label: "Golf Trip", enLabel: "Golf Trip", page: "golf" },
  { label: "Vé Máy Bay", enLabel: "Flights", page: "ve-may-bay" },
  { label: "Dịch Vụ Visa", enLabel: "Visa Services", page: "visa" },
  { label: "Thông Tin Du Lịch", enLabel: "Travel Info", page: "thong-tin" },
  { label: "Liên Hệ", enLabel: "Contact", page: "lien-he" },
];`;

code = code.replace(navOld, navNew);

// Fix usages of item.label -> t(lang, item.label, item.enLabel)
code = code.replace(/\{item\.label\}/g, `{t(lang, item.label, item.enLabel)}`);

fs.writeFileSync('src/app/App.tsx', code);
