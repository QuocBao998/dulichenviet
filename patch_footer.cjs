const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  />Du Lịch · Sự Kiện<\/div>/,
  `>{t(lang, "Du Lịch · Sự Kiện", "Travel · Events")}</div>`
);
code = code.replace(
  />CTY CỔ PHẦN ĐẦU TƯ GIÁO DỤC VÀ DỊCH VỤ LỮ HÀNH ÉN VIỆT\.<\/p>/,
  `>{t(lang, "CTY CỔ PHẦN ĐẦU TƯ GIÁO DỤC VÀ DỊCH VỤ LỮ HÀNH ÉN VIỆT.", "EN VIET TRAVEL SERVICE AND EDUCATION INVESTMENT JSC.")}</p>`
);
code = code.replace(
  />\s*Dịch Vụ\s*<\/h4>/,
  `>{t(lang, "Dịch Vụ", "Services")}</h4>`
);
code = code.replace(
  />\s*Tour Nổi Bật\s*<\/h4>/,
  `>{t(lang, "Tour Nổi Bật", "Featured Tours")}</h4>`
);

fs.writeFileSync('src/app/App.tsx', code);
