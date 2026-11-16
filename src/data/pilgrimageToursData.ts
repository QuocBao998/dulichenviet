import type { TourItem } from "./toursData";

// ─────────────────────────────────────────────────────────────────────────────
// DANH SÁCH 10 TOUR HÀNH HƯƠNG (CÔNG GIÁO & PHẬT GIÁO) CHÍNH THỨC ÉN VIỆT GROUP
// ─────────────────────────────────────────────────────────────────────────────

export const TOUR_HANH_HUONG_DATASET: TourItem[] = [
  // ── 1. TOUR SƠN TÂY NGŨ ĐÀI SƠN HUYỀN KHÔNG TỰ 7N7Đ | NO SHOPPING ──
  {
    id: "evg-hh2",
    code: "EVG - HH2",
    title: "TOUR SƠN TÂY NGŨ ĐÀI SƠN HUYỀN KHÔNG TỰ 7N7Đ | NO SHOPPING",
    itinerary: "Thái Nguyên – Hãn Châu – Ngũ Đài Sơn – Hồn Nguyên",
    duration: "7 Ngày 7 Đêm",
    durationDays: 7,
    airline: "Hàng không khứ hồi",
    price: 30009999,
    priceFormatted: "30.009.999 VNĐ",
    highlights: [
      "Hành trình: Thái Nguyên – Hãn Châu – Ngũ Đài Sơn – Hồn Nguyên",
      "Khởi hành: Tháng 5, Tháng 6 | Cam kết chương trình No Shopping"
    ],
    country: "Sơn Tây - Trung Quốc",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "trung-quoc", "chau-a"],
    badge: "7 Ngày 7 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/07/Thanh-co-Binh-Dao-4-1024x682.webp",
    departure: "Tháng 5, Tháng 6",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-HH2.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 2. HÀNH HƯƠNG GIANG NAM ──
  {
    id: "evg-hh1",
    code: "EVG - HH1",
    title: "HÀNH HƯƠNG GIANG NAM: NINH BA – HÀNG CHÂU – VÔ TÍCH – AN HUY – NAM KINH",
    itinerary: "Ninh Ba – Hàng Châu – Vô Tích – An Huy – Nam Kinh",
    duration: "7 Ngày 7 Đêm",
    durationDays: 7,
    airline: "Hàng không khứ hồi",
    price: 29990000,
    priceFormatted: "29.990.000 VNĐ",
    highlights: [
      "Hành trình: Ninh Ba – Hàng Châu – Vô Tích – An Huy – Nam Kinh",
      "Khởi hành định kỳ từ Tháng 6 đến Tháng 10"
    ],
    country: "Giang Nam - Trung Quốc",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "trung-quoc", "chau-a"],
    badge: "7 Ngày 7 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/07/Vinh-Niem-Hoa-2.jpg",
    departure: "Tháng 6 – Tháng 10",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-HH1.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 3. DU LỊCH HÀNH HƯƠNG – NAM BỘ CHÙA XƯA 2026 ──
  {
    id: "evg-nbcx-2026",
    code: "EVG - NBCX",
    title: "DU LỊCH HÀNH HƯƠNG – NAM BỘ CHÙA XƯA 2026",
    itinerary: "Mỹ Tho – Trà Vinh – Cần Thơ",
    duration: "2 Ngày 1 Đêm",
    durationDays: 2,
    airline: "Ô tô du lịch đời mới",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Hành trình: Mỹ Tho – Trà Vinh – Cần Thơ viếng các ngôi cổ tự nổi tiếng",
      "Lịch khởi hành linh hoạt theo yêu cầu đoàn & khách lẻ"
    ],
    country: "Miền Tây",
    region: "Tour Hành Hương",
    category: "trong-nuoc",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "trong-nuoc", "mien-nam", "mien-tay", "viet-nam"],
    badge: "2 Ngày 1 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/04/Chua-Vam-Ray-2-1024x768.jpg",
    departure: "Theo yêu cầu đoàn & khách lẻ",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-NBCX.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 4. DU XUÂN TẾT 2026: ĐÀ LẠT – HÀNH HƯƠNG 10 CẢNH CHÙA SAMTEN HILLS CHÙA TÂY TẠNG ──
  {
    id: "eng-hdt-samten",
    code: "ENG-HDT",
    title: "DU XUÂN TẾT 2026: ĐÀ LẠT – HÀNH HƯƠNG 10 CẢNH CHÙA SAMTEN HILLS CHÙA TÂY TẠNG",
    itinerary: "TP.HCM – Đà Lạt – Samten Hills – 10 Cảnh Chùa Tây Tạng",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Ô tô du lịch đời mới",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Chiêm bái quần thể văn hóa tâm linh Samten Hills & 10 cảnh chùa Đà Lạt",
      "Khởi hành dịp Tết Âm Lịch 2026"
    ],
    country: "Đà Lạt",
    region: "Tour Hành Hương",
    category: "trong-nuoc",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "trong-nuoc", "mien-trung", "mien-nam", "da-lat", "viet-nam"],
    badge: "3 Ngày 2 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2026/01/Samten-Hills-Da-Lat-6-1024x575.webp",
    departure: "Tết Âm Lịch 2026",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_ENG-HDT-SAMTEN.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 5. TOUR HÀNH HƯƠNG ĐỨC MẸ LA VANG – 2026 ──
  {
    id: "evg-hlclub",
    code: "EVG - HLCLUB",
    title: "TOUR HÀNH HƯƠNG ĐỨC MẸ LA VANG – 2026",
    itinerary: "Đà Nẵng – Hội An – Huế – Thánh địa Đức Mẹ La Vang",
    duration: "3 Ngày 2 Đêm",
    durationDays: 3,
    airline: "Ô tô du lịch đời mới",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Hành trình: Đà Nẵng – Hội An – Huế – Thánh địa Đức Mẹ La Vang",
      "Lịch khởi hành định kỳ hàng tháng"
    ],
    country: "Huế - Đà Nẵng - Hội An",
    region: "Tour Hành Hương",
    category: "trong-nuoc",
    cats: ["all", "hanh-huong", "hanh-huong-cong-giao", "mien-trung", "viet-nam"],
    badge: "3 Ngày 2 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/08/Vieng-Duc-Me-Sao-Bien.jpg",
    departure: "Định kỳ hàng tháng",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-HLCLUB.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 6. TOUR HÀNH HƯƠNG PHẬT GIÁO THÁI LAN ──
  {
    id: "evg-tht",
    code: "EVG - THT",
    title: "TOUR HÀNH HƯƠNG PHẬT GIÁO THÁI LAN",
    itinerary: "Bangkok – Pattaya – Cố đô Ayutthaya",
    duration: "5 Ngày 4 Đêm",
    durationDays: 5,
    airline: "Hàng không khứ hồi",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Hành trình: Bangkok – Pattaya – Cố đô Ayutthaya chiêm bái các đại tự",
      "Chương trình hành hương kết hợp tham quan văn hóa Thái Lan"
    ],
    country: "Thái Lan",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "thai-lan", "dong-nam-a", "chau-a"],
    badge: "5 Ngày 4 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/08/MA-TOUR-EVG-THT-HANH-HUONG-PHAT-GIAO-THAI-LAN-2-724x1024.jpg",
    departure: "Khởi hành định kỳ",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-THT.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 7. VIẾNG VƯỜN CHÙA PUTHKIRI – PHNOM PENH ──
  {
    id: "evg-ltour",
    code: "EVG - LTOUR",
    title: "VIẾNG VƯỜN CHÙA PUTHKIRI – PHNOM PENH",
    itinerary: "TP.HCM – Vườn Chùa Puthkiri – Thủ đô Phnom Penh",
    duration: "2 Ngày 1 Đêm",
    durationDays: 2,
    airline: "Ô tô du lịch đời mới",
    price: 2950000,
    priceFormatted: "2.950.000 VNĐ",
    highlights: [
      "Chiêm bái Vườn Chùa Puthkiri với hàng ngàn tượng Phật & thủ đô Phnom Penh",
      "Trọn gói dịch vụ lưu trú, ăn uống và hướng dẫn viên suốt tuyến"
    ],
    country: "Campuchia",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "campuchia", "dong-nam-a", "chau-a"],
    badge: "2 Ngày 1 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/06/Chua_Putkiri_1-1024x768.jpg",
    departure: "Khởi hành hàng tuần",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-LTOUR.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 8. TOUR TÂY NINH 1 NGÀY: NÚI BÀ ĐEN – LỄ DÂNG ĐĂNG – CHÙA GÒ KÉN ──
  {
    id: "evg-hpt",
    code: "EVG - HPT",
    title: "TOUR TÂY NINH 1 NGÀY: NÚI BÀ ĐEN – LỄ DÂNG ĐĂNG – CHÙA GÒ KÉN",
    itinerary: "TP.HCM – Núi Bà Đen – Lễ Dâng Đăng – Chùa Gò Kén",
    duration: "1 Ngày",
    durationDays: 1,
    airline: "Ô tô du lịch đời mới",
    price: 1150000,
    priceFormatted: "1.150.000 VNĐ",
    highlights: [
      "Tham dự Lễ Dâng Đăng thiêng liêng trên đỉnh Núi Bà Đen & viếng Chùa Gò Kén",
      "Khởi hành định kỳ hàng tuần từ TP.HCM"
    ],
    country: "Tây Ninh",
    region: "Tour Hành Hương",
    category: "trong-nuoc",
    cats: ["all", "hanh-huong", "hanh-huong-phat-giao", "mien-nam", "tay-ninh", "viet-nam"],
    badge: "1 Ngày",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/08/Ba-Den-4-1024x683.jpg",
    departure: "Định kỳ hàng tuần",
    pdfFile: "CHUONG_TRINH_TOUR_EVG-HPT.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 9. HÀNH HƯƠNG ĐỨC MẸ AKITA – NHẬT BẢN ──
  {
    id: "evg-dhv-akita",
    code: "EVG - DHV",
    title: "HÀNH HƯƠNG ĐỨC MẸ AKITA – NHẬT BẢN",
    itinerary: "TP.HCM – Tokyo – Đền Thánh Đức Mẹ Akita",
    duration: "8 Ngày 7 Đêm",
    durationDays: 8,
    airline: "Hàng không khứ hồi",
    price: null,
    priceFormatted: "Liên hệ",
    priceNote: "Liên hệ 0983.056.056 để nhận báo giá tốt nhất",
    highlights: [
      "Viếng Đền Thánh Đức Mẹ Akita & khám phá thủ đô Tokyo",
      "Hành trình hành hương Công giáo kết hợp trải nghiệm văn hóa Nhật Bản"
    ],
    country: "Nhật Bản",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-cong-giao", "nhat-ban", "chau-a"],
    badge: "8 Ngày 7 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/08/Tuong-Duc-Me-Akita.jpg",
    departure: "Khởi hành theo lịch đoàn",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-DHV-AKITA.pdf (Đang cập nhật)",
    pdfUrl: ""
  },

  // ── 10. CHƯƠNG TRÌNH DU LỊCH & HÀNH HƯƠNG NĂM THÁNH 2025 ──
  {
    id: "evg-dhv-chauau",
    code: "EVG - DHV",
    title: "CHƯƠNG TRÌNH DU LỊCH & HÀNH HƯƠNG NĂM THÁNH 2025: ĐỨC – THỤY SỸ – Ý – VATICAN – PHÁP",
    itinerary: "Đức – Thụy Sỹ – Ý – Vatican – Lộ Đức (Pháp)",
    duration: "12 Ngày 11 Đêm",
    durationDays: 12,
    airline: "Hàng không 5★",
    price: 91990000,
    priceFormatted: "91.990.000 VNĐ",
    highlights: [
      "Hành hương Năm Thánh qua 5 quốc gia: Đức – Thụy Sỹ – Ý – Vatican – Pháp",
      "Viếng Tòa Thánh Vatican & Linh địa Đức Mẹ Lộ Đức (Massabielle)"
    ],
    country: "Châu Âu",
    region: "Tour Hành Hương",
    category: "nuoc-ngoai",
    cats: ["all", "hanh-huong", "hanh-huong-cong-giao", "chau-au"],
    badge: "12 Ngày 11 Đêm",
    image: "https://dulichenviet.vn/wp-content/uploads/2025/08/Hang-da-Massabielle-2-1024x576.webp",
    departure: "Khởi hành Năm Thánh 2025",
    isFeatured: true,
    pdfFile: "CHUONG_TRINH_TOUR_EVG-DHV-CHAUAU.pdf (Đang cập nhật)",
    pdfUrl: ""
  }
];
