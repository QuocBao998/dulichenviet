const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  />Nhận Ưu Đãi Ngay<\/h3>/,
  `>{t(lang, "Nhận Ưu Đãi Ngay", "Get Offer Now")}</h3>`
);
code = code.replace(
  />Để lại thông tin, chuyên viên sẽ liên hệ ngay!<\/p>/,
  `>{t(lang, "Để lại thông tin, chuyên viên sẽ liên hệ ngay!", "Leave your info, our specialist will contact you soon!")}</p>`
);
code = code.replace(
  />Họ và tên \*<\/label>/,
  `>{t(lang, "Họ và tên *", "Full Name *")}</label>`
);
code = code.replace(
  /placeholder="Nhập họ tên của bạn"/,
  `placeholder={t(lang, "Nhập họ tên của bạn", "Enter your name")}`
);
code = code.replace(
  />Số điện thoại \*<\/label>/,
  `>{t(lang, "Số điện thoại *", "Phone Number *")}</label>`
);
code = code.replace(
  /placeholder="Nhập số điện thoại"/,
  `placeholder={t(lang, "Nhập số điện thoại", "Enter your phone number")}`
);
code = code.replace(
  />Điểm đến mong muốn<\/label>/,
  `>{t(lang, "Điểm đến mong muốn", "Desired Destination")}</label>`
);
code = code.replace(
  /placeholder="Ví dụ: Nhật Bản, Châu Âu\.\.\."/,
  `placeholder={t(lang, "Ví dụ: Nhật Bản, Châu Âu...", "E.g: Japan, Europe...")}`
);
code = code.replace(
  />\s*Gửi Thông Tin\s*<\/button>/,
  `>{t(lang, "Gửi Thông Tin", "Submit Info")}</button>`
);
code = code.replace(
  />\s*Đăng Ký Có Hạn\s*<\/Motion\.button>/,
  `>{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</Motion.button>`
);
code = code.replace(
  />\s*Đăng Ký Có Hạn\s*<\/button>/,
  `>{t(lang, "Đăng Ký Có Hạn", "Limited Registration")}</button>`
);

fs.writeFileSync('src/app/App.tsx', code);
